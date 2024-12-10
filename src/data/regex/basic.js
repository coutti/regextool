// 基础验证相关的正则表达式
export const basicPatterns = [
  {
    name: '用户名',
    pattern: '^[a-zA-Z0-9_-]{4,16}$',
    description: '4-16位字母、数字、下划线、减号',
    example: 'user_name123',
    codeExamples: {
      hive: `SELECT username FROM table WHERE username RLIKE '^[a-zA-Z0-9_-]{4,16}$';`,
      mysql: `SELECT username FROM table WHERE username REGEXP '^[a-zA-Z0-9_-]{4,16}$';`,
      python: `import re\nprint(bool(re.match(r'^[a-zA-Z0-9_-]{4,16}$', 'user_name123')))`
    }
  },
  {
    name: '密码强度',
    pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$',
    description: '至少8位，包含大小写字母和数字',
    example: 'Password123',
    codeExamples: {
      hive: `SELECT password FROM table WHERE password RLIKE '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\\\d)[a-zA-Z\\\\d]{8,}$';`,
      mysql: `SELECT password FROM table WHERE password REGEXP '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\\\d)[a-zA-Z\\\\d]{8,}$';`,
      python: `import re\nprint(bool(re.match(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$', 'Password123')))`
    }
  },
  {
    name: '中文字符',
    pattern: '^[\\u4e00-\\u9fa5]+$',
    description: '匹配中文字符',
    example: '你好世界',
    codeExamples: {
      hive: `SELECT text FROM table WHERE text RLIKE '^[\\\\u4e00-\\\\u9fa5]+$';`,
      mysql: `SELECT text FROM table WHERE text REGEXP '^[\\\\u4e00-\\\\u9fa5]+$';`,
      python: `import re\nprint(bool(re.match(r'^[\u4e00-\u9fa5]+$', '你好世界')))`
    }
  }
]; 