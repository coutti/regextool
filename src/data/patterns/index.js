import validation from './validation'
import numbers from './numbers'
import network from './network'
import datetime from './datetime'
import china from './china'

// 所有正则表达式模式
const patterns = [
  ...validation,  // 基础验证模式
  ...numbers,     // 数字相关模式
  ...network,     // 网络相关模式
  ...datetime,    // 日期时间模式
  ...china        // 中国特色模式
]

// 导出所有模式
export default patterns

// 导出模式总数
export const count = patterns.length

// 导出各个分类
export {
  validation,
  numbers,
  network,
  datetime,
  china
} 