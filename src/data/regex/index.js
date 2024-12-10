import { basicPatterns } from './basic'
import { numberPatterns } from './numbers'
import { networkPatterns } from './network'
import { datetimePatterns } from './datetime'
import { chinaPatterns } from './china'

// 按顺序合并所有正则表达式
export const allPatterns = [
  ...basicPatterns,     // 基础验证（3个）
  ...numberPatterns,    // 数字相关（5个）
  ...networkPatterns,   // 网络相关（5个）
  ...datetimePatterns,  // 日期时间（3个）
  ...chinaPatterns      // 中国特色（4个）
]

// 导出总数
export const totalPatterns = allPatterns.length 