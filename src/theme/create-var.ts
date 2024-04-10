import isNil from 'lodash/isNil'

import type { TokensType } from './interface'

type Creator<T> = (v: TokensType) => T

type KeyType = [TokensType, Creator<any>]

const StyleMap: Map<KeyType, any> = new Map()

export const createVar = <T>(token: TokensType, creator: Creator<T>): T => {
  let myStyle: T | null = null

  for (let [key, value] of StyleMap) {
    if (key[1] === creator) {
      if (key[0] === token) {
        myStyle = value
      } else {
        StyleMap.delete(key)
      }
    }
  }

  if (!myStyle) {
    myStyle = creator(token)
    // 变量覆盖
    const tempStyle = myStyle as Record<string, unknown>
    Object.keys(tempStyle).forEach((field: string) => {
      // 显式断言 field 为 string 类型
      if (!isNil((token as any)[field])) {
        // 使用 any 断言 token[field] 可以被索引
        tempStyle[field] = (token as any)[field]
      }
    })

    StyleMap.set([token, creator], tempStyle)
  }

  return myStyle as T
}
