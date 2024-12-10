<template>
  <div class="regex-cheatsheet">
    <!-- 卡片网格 -->
    <div class="pattern-grid">
      <el-card
        v-for="pattern in allPatterns"
        :key="pattern.name"
        class="pattern-mini-card"
        :class="{ active: selectedPattern === pattern }"
        @click="selectPattern(pattern)"
      >
        <div class="mini-card-content">
          <h4>{{ pattern.name }}</h4>
          <p>{{ pattern.description }}</p>
        </div>
      </el-card>
    </div>

    <!-- 详细信息卡片 -->
    <el-card v-if="selectedPattern" class="pattern-detail-card">
      <template #header>
        <div class="detail-header">
          <h3>{{ selectedPattern.name }}</h3>
          <el-button type="primary" @click="$emit('select-pattern', selectedPattern)">
            应用此模式
          </el-button>
        </div>
      </template>

      <div class="detail-content">
        <div class="pattern-info">
          <div class="info-row">
            <span class="label">正则表达式：</span>
            <div class="code-wrapper">
              <el-tag class="code-tag" type="info">{{ selectedPattern.pattern }}</el-tag>
              <el-button type="primary" link @click="copyToClipboard(selectedPattern.pattern)">
                复制
              </el-button>
            </div>
          </div>

          <div class="info-row">
            <span class="label">示例：</span>
            <el-tag class="code-tag" type="success">{{ selectedPattern.example }}</el-tag>
          </div>

          <div class="info-row">
            <span class="label">描述：</span>
            <span class="description">{{ selectedPattern.description }}</span>
          </div>
        </div>

        <div class="code-examples">
          <h4>代码示例：</h4>
          
          <div class="code-block">
            <div class="code-header">
              <span>Hive SQL</span>
              <el-button 
                type="primary" 
                link 
                @click="copyToClipboard(selectedPattern.codeExamples.hive)"
              >
                复制
              </el-button>
            </div>
            <pre class="code-content">{{ selectedPattern.codeExamples.hive }}</pre>
          </div>

          <div class="code-block">
            <div class="code-header">
              <span>MySQL</span>
              <el-button 
                type="primary" 
                link 
                @click="copyToClipboard(selectedPattern.codeExamples.mysql)"
              >
                复制
              </el-button>
            </div>
            <pre class="code-content">{{ selectedPattern.codeExamples.mysql }}</pre>
          </div>

          <div class="code-block">
            <div class="code-header">
              <span>Python</span>
              <el-button 
                type="primary" 
                link 
                @click="copyToClipboard(selectedPattern.codeExamples.python)"
              >
                复制
              </el-button>
            </div>
            <pre class="code-content">{{ selectedPattern.codeExamples.python }}</pre>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { allPatterns } from '../data/regex'
import { ElMessage } from 'element-plus'

const selectedPattern = ref(null)

// 初始化时选择第一个正则表达式
onMounted(() => {
  if (allPatterns.length > 0) {
    selectedPattern.value = allPatterns[0]
  }
})

const selectPattern = (pattern) => {
  selectedPattern.value = pattern
}

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
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap');
</style>

<style scoped>
.regex-cheatsheet {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
}

.pattern-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}

.pattern-mini-card {
  cursor: pointer;
  transition: all 0.3s ease;
  height: 100px;
}

.pattern-mini-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--el-box-shadow-light);
}

.pattern-mini-card.active {
  border-color: var(--el-color-primary);
  background-color: var(--el-color-primary-light-9);
}

.mini-card-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  padding: 0.5rem;
}

.mini-card-content h4 {
  margin: 0;
  font-size: 14px;
  color: var(--el-text-color-primary);
  font-weight: 500;
}

.mini-card-content p {
  margin: 0;
  font-size: 12px;
  color: var(--el-text-color-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.pattern-detail-card {
  margin-top: 1rem;
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.detail-header h3 {
  margin: 0;
  font-size: 16px;
  color: var(--el-text-color-primary);
}

.detail-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
}

.pattern-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.label {
  min-width: 100px;
  font-weight: 500;
  color: var(--el-text-color-regular);
}

.code-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
}

.code-tag {
  font-family: 'Fira Code', monospace;
  padding: 4px 8px;
  max-width: 100%;
  overflow-x: auto;
}

.description {
  flex: 1;
  color: var(--el-text-color-regular);
}

.code-examples {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.code-examples h4 {
  margin: 0;
  font-size: 14px;
  color: var(--el-text-color-primary);
}

.code-block {
  background-color: var(--el-fill-color-light);
  border-radius: 4px;
  overflow: hidden;
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background-color: var(--el-fill-color);
  border-bottom: 1px solid var(--el-border-color-light);
}

.code-content {
  margin: 0;
  padding: 12px;
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-all;
  color: var(--el-text-color-primary);
  background-color: var(--el-fill-color-light);
}

@media (max-width: 1200px) {
  .pattern-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 992px) {
  .pattern-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .pattern-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style> 