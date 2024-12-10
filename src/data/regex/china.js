// 中国特色的正则表达式
export const chinaPatterns = [
  {
    name: '手机号码',
    pattern: '^1[3-9]\\d{9}$',
    description: '匹配中国大陆手机号码',
    example: '13812345678',
    codeExamples: {
      hive: `SELECT phone FROM table WHERE phone RLIKE '^1[3-9]\\\\d{9}$';`,
      mysql: `SELECT phone FROM table WHERE phone REGEXP '^1[3-9]\\\\d{9}$';`,
      python: `import re\nprint(bool(re.match(r'^1[3-9]\d{9}$', '13812345678')))`
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
    name: '邮政编码',
    pattern: '^[1-9]\\d{5}$',
    description: '匹配中国邮政编码',
    example: '100000',
    codeExamples: {
      hive: `SELECT postcode FROM table WHERE postcode RLIKE '^[1-9]\\\\d{5}$';`,
      mysql: `SELECT postcode FROM table WHERE postcode REGEXP '^[1-9]\\\\d{5}$';`,
      python: `import re\nprint(bool(re.match(r'^[1-9]\d{5}$', '100000')))`
    }
  },
  {
    name: 'QQ号',
    pattern: '^[1-9][0-9]{4,10}$',
    description: '匹配QQ号（5-11位数字）',
    example: '10000',
    codeExamples: {
      hive: `SELECT qq FROM table WHERE qq RLIKE '^[1-9][0-9]{4,10}$';`,
      mysql: `SELECT qq FROM table WHERE qq REGEXP '^[1-9][0-9]{4,10}$';`,
      python: `import re\nprint(bool(re.match(r'^[1-9][0-9]{4,10}$', '10000')))`
    }
  }
]; 