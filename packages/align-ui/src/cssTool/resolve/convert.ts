/*
 * @Author: cuiwujie 
 * @Date: 2024-04-02 20:03:24
 * @LastEditors: cuiwujie 
 * @LastEditTime: 2024-04-03 13:38:52
 * @FilePath: /align-ui-doc/src/cssTool/resolve/convert.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { parseNumericValue } from '../utils'
interface StyleObject {
  [key: string]: any
}

interface RotateConfig {
  [key: string]: string
}

const rotate: RotateConfig = {
  '0': '0deg',
  '90': '90deg',
  '-90': '-90deg',
}

export function transform(value: string, style: StyleObject): StyleObject {
  const configSize = rotate?.[value] // 是否为固定变量
  if (configSize !== undefined) {
    style.transform = [{ rotate: configSize }]
  } else {
    const parsedArbitrary = parseNumericValue(value)
    if (Number.isFinite(parsedArbitrary) && parsedArbitrary != null) {
      style.transform = [{ rotate: 2 * parsedArbitrary + 'deg' }]
    } else {
      return style
    }
  }

  return style
}
