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
