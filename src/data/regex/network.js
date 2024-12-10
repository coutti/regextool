// 网络相关的正则表达式
export const networkPatterns = [
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
      mysql: `SELECT mac FROM table WHERE mac REGEXP '^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$';`,
      python: `import re\nprint(bool(re.match(r'^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$', '00:1B:44:11:3A:B7')))`
    }
  },
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
  }
]; 