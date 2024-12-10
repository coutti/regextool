export const commonRegexPatterns = [
  {
    name: '邮箱地址',
    pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
    description: '匹配标准邮箱地址格式',
    example: 'example@email.com',
    codeExamples: {
      hive: `SELECT email FROM table WHERE email RLIKE '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}$';`,
      mysql: `SELECT email FROM table WHERE email REGEXP '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}$';`,
      python: `import re\nprint(bool(re.match(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$', 'example@email.com')))`
    }
  },
  {
    name: '手机号码',
    pattern: '^1[3-9]\\d{9}$',
    description: '匹配中国大陆手机号码',
    example: '13812345678',
    codeExamples: {
      hive: `SELECT phone FROM table WHERE phone RLIKE '^1[3-9]\\\\d{9}$';`,
      mysql: `SELECT phone FROM table WHERE phone REGEXP '^1[3-9]\\\\d{9}$';`,
      python: `import re\nprint(bool(re.match(r'^1[3-9]\\d{9}$', '13812345678')))`
    }
  },
  {
    name: 'URL',
    pattern: '^(https?:\\/\\/)?([\\da-z.-]+)\\.([a-z.]{2,6})([\\/\\w .-]*)*\\/?$',
    description: '匹配网址URL',
    example: 'https://www.example.com',
    codeExamples: {
      hive: `SELECT url FROM table WHERE url RLIKE '^(https?:\\\\/\\\\/)?([\\\\da-z.-]+)\\\\.([a-z.]{2,6})([\\\\/?\\\\w .-]*)*\\\\/?$';`,
      mysql: `SELECT url FROM table WHERE url REGEXP '^(https?:\\\\/\\\\/)?([\\\\da-z.-]+)\\\\.([a-z.]{2,6})([\\\\/?\\\\w .-]*)*\\\\/?$';`,
      python: `import re\nprint(bool(re.match(r'^(https?:\/\/)?[\da-z.-]+\.([a-z.]{2,6})([\/\w .-]*)*\/?$', 'https://www.example.com')))`
    }
  },
  {
    name: '身份证号',
    pattern: '^[1-9]\\d{5}(19|20)\\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\\d|3[01])\\d{3}[0-9X]$',
    description: '匹配中国大陆身份证号',
    example: '110101199001011234',
    codeExamples: {
      hive: `SELECT id_card FROM table WHERE id_card RLIKE '^[1-9]\\\\d{5}(19|20)\\\\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\\\\d|3[01])\\\\d{3}[0-9X]$';`,
      mysql: `SELECT id_card FROM table WHERE id_card REGEXP '^[1-9]\\\\d{5}(19|20)\\\\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\\\\d|3[01])\\\\d{3}[0-9X]$';`,
      python: `import re\nprint(bool(re.match(r'^[1-9]\d{5}(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[0-9X]$', '110101199001011234')))`
    }
  },
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
    name: 'IP地址',
    pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$',
    description: '匹配IPv4地址',
    example: '192.168.1.1',
    codeExamples: {
      hive: `SELECT ip FROM table WHERE ip RLIKE '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$';`,
      mysql: `SELECT ip FROM table WHERE ip REGEXP '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$';`,
      python: `import re\nprint(bool(re.match(r'^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$', '192.168.1.1')))`
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
  },
  {
    name: '数字',
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
    name: '十六进制颜色',
    pattern: '^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$',
    description: '匹配CSS十六进制颜色值',
    example: '#ff0000',
    codeExamples: {
      hive: `SELECT color FROM table WHERE color RLIKE '^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$';`,
      mysql: `SELECT color FROM table WHERE color REGEXP '^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$';`,
      python: `import re\nprint(bool(re.match(r'^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$', '#ff0000')))`
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
    name: 'IPv6地址',
    pattern: '^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$',
    description: '匹配标准IPv6地址',
    example: '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
    codeExamples: {
      hive: `SELECT ipv6 FROM table WHERE ipv6 RLIKE '^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$';`,
      mysql: `SELECT ipv6 FROM table WHERE ipv6 REGEXP '^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$';`,
      python: `import re\nprint(bool(re.match(r'^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$', '2001:0db8:85a3:0000:0000:8a2e:0370:7334')))`
    }
  },
  {
    name: 'MAC地址',
    pattern: '^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$',
    description: '匹配MAC地址',
    example: '00:1B:44:11:3A:B7',
    codeExamples: {
      hive: `SELECT mac FROM table WHERE mac RLIKE '^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$';`,
  }
]; 