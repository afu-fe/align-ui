import React, { memo } from 'react'

import Portal from '../portal'
import Theme from '../theme'

import type { ProviderProps } from './interface'

/**
 * 统一的配置
 * 将来 Portal 准备统一的入口，https://github.com/callstack/react-native-paper/blob/master/src/components/Portal/Portal.tsx
 */
const Provider: React.FC<ProviderProps> = ({ children, theme }) => {
  return (
    <Theme theme={theme}>
      <Portal.Host>{children}</Portal.Host>
    </Theme>
  )
}

export default memo(Provider)
