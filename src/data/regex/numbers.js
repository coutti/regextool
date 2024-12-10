// 数字相关的正则表达式
export const numberPatterns = [
  {
    name: '整数或小数',
    pattern: '^-?\\d+(\\.\\d+)?$',
    description: '匹配整数或小数',
    example: '-123.45',
    codeExamples: {
      hive: `SELECT number FROM table WHERE number RLIKE '^-?\\\\d+(\\\\.\\\\d+)?$';`,
      mysql: `SELECT number FROM table WHERE number REGEXP '^-?\\\\d+(\\\\.\\\\d+)?$';`,
      python: `import re\nprint(bool(re.match(r'^-?\d+(\.\d+)?$', '-123.45')))`
    }
  },
  {
    name: '正整数',
    pattern: '^[1-9]\\d*$',
    description: '匹配正整数',
    example: '123',
    codeExamples: {
      hive: `SELECT number FROM table WHERE number RLIKE '^[1-9]\\\\d*$';`,
      mysql: `SELECT number FROM table WHERE number REGEXP '^[1-9]\\\\d*$';`,
      python: `import re\nprint(bool(re.match(r'^[1-9]\d*$', '123')))`
    }
  },
  {
    name: '负整数',
    pattern: '^-[1-9]\\d*$',
    description: '匹配负整数',
    example: '-123',
    codeExamples: {
      hive: `SELECT number FROM table WHERE number RLIKE '^-[1-9]\\\\d*$';`,
      mysql: `SELECT number FROM table WHERE number REGEXP '^-[1-9]\\\\d*$';`,
      python: `import re\nprint(bool(re.match(r'^-[1-9]\d*$', '-123')))`
    }
  },
  {
    name: '浮点数',
    pattern: '^-?([1-9]\\d*\\.\\d+|0\\.\\d*[1-9]\\d*|0?\\.0+|0)$',
    description: '匹配浮点数',
    example: '3.14',
    codeExamples: {
      hive: `SELECT number FROM table WHERE number RLIKE '^-?([1-9]\\\\d*\\\\.\\\\d+|0\\\\.\\\\d*[1-9]\\\\d*|0?\\\\.0+|0)$';`,
      mysql: `SELECT number FROM table WHERE number REGEXP '^-?([1-9]\\\\d*\\\\.\\\\d+|0\\\\.\\\\d*[1-9]\\\\d*|0?\\\\.0+|0)$';`,
      python: `import re\nprint(bool(re.match(r'^-?([1-9]\d*\.\d+|0\.\d*[1-9]\d*|0?\.0+|0)$', '3.14')))`
    }
  },
  {
    name: '版本号',
    pattern: '^\\d+\\.\\d+\\.\\d+$',
    description: '匹配语义化版本号（X.Y.Z）',
    example: '2.0.1',
    codeExamples: {
      hive: `SELECT version FROM table WHERE version RLIKE '^\\\\d+\\\\.\\\\d+\\\\.\\\\d+$';`,
      mysql: `SELECT version FROM table WHERE version REGEXP '^\\\\d+\\\\.\\\\d+\\\\.\\\\d+$';`,
      python: `import re\nprint(bool(re.match(r'^\d+\.\d+\.\d+$', '2.0.1')))`
    }
  }
]; 