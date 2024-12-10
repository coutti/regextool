// 日期和时间相关的正则表达式
export const datetimePatterns = [
  {
    name: '日期',
    pattern: '^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$',
    description: '匹配YYYY-MM-DD格式日期',
    example: '2023-12-10',
    codeExamples: {
      hive: `SELECT date_col FROM table WHERE date_col RLIKE '^\\\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\\\d|3[01])$';`,
      mysql: `SELECT date_col FROM table WHERE date_col REGEXP '^\\\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\\\d|3[01])$';`,
      python: `import re\nprint(bool(re.match(r'^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$', '2023-12-10')))`
    }
  },
  {
    name: '时间',
    pattern: '^([01]\\d|2[0-3]):([0-5]\\d):([0-5]\\d)$',
    description: '匹配24小时制时间（HH:MM:SS）',
    example: '23:59:59',
    codeExamples: {
      hive: `SELECT time FROM table WHERE time RLIKE '^([01]\\\\d|2[0-3]):([0-5]\\\\d):([0-5]\\\\d)$';`,
      mysql: `SELECT time FROM table WHERE time REGEXP '^([01]\\\\d|2[0-3]):([0-5]\\\\d):([0-5]\\\\d)$';`,
      python: `import re\nprint(bool(re.match(r'^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$', '23:59:59')))`
    }
  },
  {
    name: '日期时间',
    pattern: '^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])\\s([01]\\d|2[0-3]):([0-5]\\d):([0-5]\\d)$',
    description: '匹配YYYY-MM-DD HH:MM:SS格式',
    example: '2023-12-10 23:59:59',
    codeExamples: {
      hive: `SELECT datetime FROM table WHERE datetime RLIKE '^\\\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\\\d|3[01])\\\\s([01]\\\\d|2[0-3]):([0-5]\\\\d):([0-5]\\\\d)$';`,
      mysql: `SELECT datetime FROM table WHERE datetime REGEXP '^\\\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\\\d|3[01])\\\\s([01]\\\\d|2[0-3]):([0-5]\\\\d):([0-5]\\\\d)$';`,
      python: `import re\nprint(bool(re.match(r'^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])\\s([01]\\d|2[0-3]):([0-5]\\d):([0-5]\\d)$', '2023-12-10 23:59:59')))`
    }
  }
]; 