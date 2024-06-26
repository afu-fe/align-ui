import type { TokensType } from './interface'

type ComponentVar = Record<string, any>

type Creator<T> = (v: ComponentVar, t?: TokensType) => T

type KeyType = [ComponentVar, Creator<any>]

const StyleMap: Map<KeyType, any> = new Map()

export const createStyle = <T>(
  componentVar: ComponentVar,
  creator: Creator<T>,
  tokens?: TokensType,
): T => {
  let myStyle: T | null = null // 给 myStyle 初值 null
  for (let [key, value] of StyleMap) {
    if (key[1] === creator) {
      if (key[0] === componentVar) {
        myStyle = value
      } else {
        StyleMap.delete(key)
      }
    }
  }

  if (!myStyle) {
    myStyle = creator(componentVar, tokens)

    StyleMap.set([componentVar, creator], myStyle)
  }

  return myStyle
}
