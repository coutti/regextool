<script setup>
import RegexTester from './components/RegexTester.vue'
import RegexCheatsheet from './components/RegexCheatsheet.vue'
import { ref } from 'vue'

const testerRef = ref(null)

const handlePatternSelect = (pattern) => {
  if (testerRef.value) {
    testerRef.value.setPattern(pattern)
  }
}
</script>

<template>
  <div class="app">
    <header>
      <h1>正则表达式工具</h1>
    </header>

    <main>
      <div class="content-container">
        <div class="section">
          <div class="section-header">
            <h2>正则表达式测试</h2>
          </div>
          <div class="section-content">
            <RegexTester ref="testerRef" />
          </div>
        </div>
        
        <div class="section">
          <div class="section-header">
            <h2>常用正则表达式速查</h2>
          </div>
          <div class="section-content">
            <RegexCheatsheet @select-pattern="handlePatternSelect" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: var(--el-bg-color-page);
  min-height: 100vh;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background-color: var(--el-color-primary);
  color: white;
  text-align: center;
  padding: 1rem;
}

header h1 {
  font-size: 1.5rem;
}

main {
  flex: 1;
  padding: 1rem;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.section {
  background-color: var(--el-bg-color);
  border-radius: 4px;
  box-shadow: var(--el-box-shadow-light);
  display: flex;
  flex-direction: column;
}

.section-header {
  padding: 1rem;
  border-bottom: 1px solid var(--el-border-color-light);
}

.section-header h2 {
  font-size: 1.2rem;
  color: var(--el-text-color-primary);
  margin: 0;
}

.section-content {
  padding: 1rem;
  min-height: 400px; /* 确保每个部分有足够的高度 */
}
</style>
