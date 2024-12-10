<template>
  <div class="regex-tester">
    <div class="pattern-input">
      <el-input
        v-model="pattern"
        placeholder="/your-pattern/"
        :status="regexError ? 'error' : ''"
        @input="updateRegex"
        clearable
        class="code-font"
      >
        <template #prepend>
          <el-icon><Edit /></el-icon>
        </template>
        <template #append>
          <el-space :size="4">
            <el-checkbox
              v-for="flag in ['g', 'i', 'm']"
              :key="flag"
              v-model="activeFlags"
              :label="flag"
              class="flag-checkbox"
              @change="updateRegex"
            >
              {{ flag }}
            </el-checkbox>
          </el-space>
        </template>
      </el-input>

      <div class="flag-container">
        <div class="flag-item">
          <span class="flag-label">g</span>
          <span class="flag-desc">全局匹配</span>
        </div>
        <div class="flag-item">
          <span class="flag-label">i</span>
          <span class="flag-desc">忽略大小写</span>
        </div>
        <div class="flag-item">
          <span class="flag-label">m</span>
          <span class="flag-desc">多行匹配</span>
        </div>
      </div>
      
      <el-alert
        v-if="regexError"
        :title="regexError"
        type="error"
        show-icon
        :closable="false"
        class="error-alert"
      />
    </div>

    <div class="test-content">
      <div class="test-area">
        <div class="area-header">测试文本</div>
        <el-input
          v-model="testText"
          type="textarea"
          :rows="12"
          resize="none"
          placeholder="在此输入要测试的文本..."
          @input="updateRegex"
          class="code-font test-input"
        />
      </div>

      <div class="preview-area">
        <div class="area-header">匹配预览</div>
        <div class="preview-content">
          <el-alert
            :title="resultStatus.message"
            :type="resultStatus.alertType"
            :icon="resultStatus.icon"
            :closable="false"
            show-icon
            class="status-alert"
          >
            <template #description>
              <p v-if="resultStatus.description">{{ resultStatus.description }}</p>
            </template>
          </el-alert>
          
          <div class="highlighted-text code-font" v-html="highlightedText"></div>
          
          <el-collapse-transition>
            <div v-if="matches.length" class="match-details">
              <el-divider content-position="left">
                <el-tag size="small" type="success" effect="dark">
                  匹配结果
                </el-tag>
              </el-divider>
              <el-scrollbar height="120px">
                <div class="matches-list">
                  <div
                    v-for="(match, index) in matches"
                    :key="index"
                    class="match-item"
                  >
                    <el-tag type="info" effect="plain" class="match-index" size="small">
                      #{{ index + 1 }}
                    </el-tag>
                    <el-tag type="success" class="match-content code-font">
                      {{ match.text }}
                    </el-tag>
                    <el-tag type="warning" class="match-index" size="small">
                      位置: {{ match.index }}
                    </el-tag>
                    <el-button
                      type="primary"
                      link
                      size="small"
                      @click="copyToClipboard(match.text)"
                    >
                      复制
                    </el-button>
                  </div>
                </div>
              </el-scrollbar>
            </div>
          </el-collapse-transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { Edit } from '@element-plus/icons-vue'

const pattern = ref('')
const testText = ref(`test@example.com
support@gmail.com
john.doe@company.cn
user@sub.domain.com`)
const activeFlags = ref(['g'])
const matches = ref([])
const regexError = ref('')

// 默认的正则表达式：匹配电子邮件
pattern.value = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'

// 组件加载时执行正则匹配
onMounted(() => {
  updateRegex()
})

const getFlagDescription = (flag) => {
  const descriptions = {
    g: '全局匹配 - 查找所有匹配项',
    i: '忽略大小写 - 使匹配不区分大小写',
    m: '多行匹配 - 使 ^ 和 $ 匹配每一行的开始和结束'
  }
  return descriptions[flag]
}

const getFlags = () => activeFlags.value.join('')

const resultStatus = computed(() => {
  if (!pattern.value) {
    return {
      alertType: 'info',
      icon: 'InfoFilled',
      message: '等待输入',
      description: '请输入正则表达式开始测试'
    }
  }
  if (regexError.value) {
    return {
      alertType: 'error',
      icon: 'CircleCloseFilled',
      message: '正则表达式语法错误',
      description: regexError.value
    }
  }
  if (!testText.value) {
    return {
      alertType: 'info',
      icon: 'InfoFilled',
      message: '等待测试文本',
      description: '请输入要测试的文本内容'
    }
  }
  if (matches.value.length > 0) {
    return {
      alertType: 'success',
      icon: 'CircleCheckFilled',
      message: '匹配成功！',
      description: `共找到 ${matches.value.length} 个匹配项`
    }
  }
  return {
    alertType: 'warning',
    icon: 'WarnTriangleFilled',
    message: '未找到匹配项',
    description: '可能原因：1. 正则表达式过于严格 2. 测试文本不符合匹配模式'
  }
})

const createRegex = (pattern, flags) => {
  try {
    // 如果模式已经是正则表达式格式（以/开始和结束），则提取实际的模式
    if (pattern.startsWith('/') && pattern.lastIndexOf('/') > 0) {
      const lastSlashIndex = pattern.lastIndexOf('/')
      const patternBody = pattern.slice(1, lastSlashIndex)
      return new RegExp(patternBody, flags)
    }
    // 否则直接使用输入的模式
    return new RegExp(pattern, flags)
  } catch (e) {
    throw new Error(`无效的正则表达式: ${e.message}`)
  }
}

const updateRegex = () => {
  regexError.value = ''
  matches.value = []
  
  if (!pattern.value || !testText.value) return

  try {
    // 确保使用全局匹配
    let flags = getFlags()
    if (!flags.includes('g')) {
      flags += 'g'
    }

    // 创建正则表达式
    const regex = createRegex(pattern.value, flags)
    
    // 获取所有匹配结果
    const allMatches = Array.from(testText.value.matchAll(regex))
    
    // 保存匹配结果
    matches.value = allMatches.map(match => ({
      text: match[0],
      index: match.index,
      groups: match.groups || {},
      length: match[0].length
    }))
  } catch (e) {
    regexError.value = e.message
  }
}

const escapeHtml = (text) => {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

const highlightedText = computed(() => {
  if (!pattern.value || !testText.value || regexError.value) {
    return escapeHtml(testText.value)
  }
  try {
    // 确保使用全局匹配
    let flags = getFlags()
    if (!flags.includes('g')) {
      flags += 'g'
    }

    // 创建正则表达式
    const regex = createRegex(pattern.value, flags)
    
    // 获取所有匹配并排序（按位置）
    const allMatches = Array.from(testText.value.matchAll(regex))
      .sort((a, b) => a.index - b.index)
    
    if (allMatches.length === 0) {
      return escapeHtml(testText.value)
    }

    // 构建高亮文本
    let result = ''
    let lastIndex = 0

    allMatches.forEach(match => {
      // 添加匹配前的文本（需要转义）
      result += escapeHtml(testText.value.slice(lastIndex, match.index))
      
      // 添加高亮的匹配文本（需要转义）
      result += `<span class="highlight" title="位置: ${match.index}, 长度: ${match[0].length}">${escapeHtml(match[0])}</span>`
      
      lastIndex = match.index + match[0].length
    })

    // 添加剩余的文本（需要转义）
    result += escapeHtml(testText.value.slice(lastIndex))

    return result
  } catch (e) {
    return escapeHtml(testText.value)
  }
})

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    ElMessage({
      message: '已复制到剪贴板',
      type: 'success',
      duration: 2000
    })
  } catch (err) {
    ElMessage({
      message: '复制失败',
      type: 'error',
      duration: 2000
    })
  }
}

// 暴露给父组件的方法
const setPattern = (patternData) => {
  try {
    // 设置正则表达式和示例文本
    pattern.value = patternData.pattern
    testText.value = patternData.example

    // 重置标志位
    activeFlags.value = ['g'] // 始终启用全局匹配

    // 检查正则表达式是否需要特殊处理
    const needsMultiline = /[\n\r]/.test(patternData.example) || 
                          /[\^$]/.test(patternData.pattern)
    const needsIgnoreCase = /[a-zA-Z]/i.test(patternData.pattern)

    // 根据需要添加标志位
    if (needsMultiline) activeFlags.value.push('m')
    if (needsIgnoreCase) activeFlags.value.push('i')

    // 立即执行匹配
    updateRegex()
  } catch (e) {
    regexError.value = e.message
  }
}

defineExpose({
  setPattern
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap');
</style>

<style scoped>
.regex-tester {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.pattern-input {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-header {
  margin-bottom: 0.5rem;
}

.flag-container {
  display: flex;
  gap: 1.5rem;
  padding: 0.5rem;
  background-color: var(--el-fill-color-light);
  border-radius: 4px;
}

.flag-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.flag-label {
  font-family: 'Fira Code', monospace;
  font-weight: 600;
  color: var(--el-color-primary);
  background-color: var(--el-color-primary-light-9);
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 13px;
}

.flag-desc {
  color: var(--el-text-color-secondary);
  font-size: 13px;
}

.code-font {
  font-family: 'Fira Code', monospace !important;
}

.code-font :deep(input),
.code-font :deep(textarea) {
  font-family: 'Fira Code', monospace !important;
}

.flag-checkbox {
  margin-right: 0 !important;
  padding: 4px 8px;
}

.flag-checkbox :deep(.el-checkbox__label) {
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  padding-left: 4px;
}

.test-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  height: 100%;
}

.test-area,
.preview-area {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.area-header {
  font-size: 14px;
  font-weight: 500;
  color: var(--el-text-color-primary);
  margin-bottom: 8px;
}

.test-input {
  height: 100%;
}

.test-input :deep(.el-textarea__inner) {
  height: 100%;
}

.preview-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--el-fill-color-blank);
  border: 1px solid var(--el-border-color-light);
  border-radius: 4px;
  padding: 1rem;
  height: 100%;
}

.highlighted-text {
  flex: 1;
  padding: 12px;
  background-color: var(--el-fill-color-light);
  border-radius: 4px;
  white-space: pre-wrap;
  overflow-y: auto;
  font-size: 14px;
  line-height: 1.6;
  min-height: 200px;
}

:deep(.highlight) {
  background-color: var(--el-color-success-light-8);
  color: var(--el-color-success-dark-2);
  border: 1px solid var(--el-color-success-light-5);
  border-radius: 3px;
  padding: 0 4px;
  margin: 0 2px;
  cursor: help;
  transition: all 0.3s ease;
}

:deep(.highlight:hover) {
  background-color: var(--el-color-success-light-5);
  border-color: var(--el-color-success);
}

.matches-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
}

.match-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.match-index {
  min-width: 40px;
  text-align: center;
}

.match-content {
  flex: 1;
  font-size: 13px;
  padding: 4px 8px;
}

:deep(.el-input-group__prepend),
:deep(.el-input-group__append) {
  padding: 0 12px;
  background-color: var(--el-fill-color-light);
}

.error-alert {
  margin-top: 8px;
}

@media (max-width: 768px) {
  .test-content {
    grid-template-columns: 1fr;
  }
}
</style> 