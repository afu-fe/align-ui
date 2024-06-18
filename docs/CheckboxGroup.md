---
title: CheckboxGroup 复选框
order: 1
nav:
  title: 组件
  path: /component
group:
  title: 基础组件
  path: /basic
  order: 0
---

# View 盒子

一组备选项中进行多选。

### 何时使用

- 适用于勾选某个单项内容，例如是否同意、已读。

适用于受控、非受控两种方式。

### 基础实例

```jsx mdx:preview&background=#bebebe29
import React, { memo, useState } from 'react'
import { CheckboxGroup, View } from 'align-ui';
const options = new Array(6).fill(0).map((_, index) => ({
  value: index + 1,
  label: `选项${index + 1}`,
}))
const Demo: React.FC = () => {
  const [value, setValue] = useState(true)
  return (
    <View containerClass={'flex-col,mb-30'}>
      <View containerClass={'mt-10,mb-5'}>单选</View>
      <CheckboxGroup 
        options={options}
        onChange={v => {
              console.log('当前状态：', v)
        }}/>
      <View containerClass={'mt-10,mb-5'}>多选</View>
      <CheckboxGroup
        multiple
        options={options}
        onChange={v => {
              console.log('当前状态：', v)
        }}/>
      <View containerClass={'mt-10,mb-5'}>可以横向滑动</View>
      <CheckboxGroup
        direction={'horizontal'}
        multiple
        options={options}
        onChange={v => {
              console.log('当前状态：', v)
        }}/>
   </View>
  );
}
export default memo(Demo)
```

### CheckboxGroup

#### 属性


| 属性           | 说明       | 类型      | 默认值 |
| -------------- | ---------- | --------- | ------ |
| direction          | 横向竖向 | `‘horizontal’  'vertical'`  | vertical      |
| scrollable          | 是否可以滚动 | `boolean`  | true      |
| type          | 类型 | `'Checkbox' 'Radio'`  | Checkbox      |
| multiple          | 是否多选 | `boolean`  | false      |

| options[0].onChange       | 变化时的回调函数   | (value:ActiveValueT|InactiveValueT) => void  | -      |
| options[0].disabled          | 是否禁用复选框 | `boolean`  | false      |
| options[0].textPosition       | icon位置 | `left right` | -      |
| options[0].label       | 文本文案 | `string` | -      |
| options[0].iconSize       | icon大小 | `number` | 16      |
| options[0].checked       | 是否被选中 | `boolean` | false     |
| options[0].checkedColor       | 被选中颜色 | `string` | -      |
| options[0].activeIconUrl       | 被选中Icon地址 | `string` | -      |
| options[0].inactiveIconUrl       | 不被选中Icon地址 | `string` | -      |

| options[0].labelTextClass       | 文本样式系统样式 | `string` |      |
| options[0].labelTextStyle       | 文本样式 | `TextStyle` |       |
| options[0].iconClass       | icon样式系统样式 | `string` |       |
| options[0].iconStyle       | icon样式 | `ViewStyle` |      |
| options[0].labelDisabled       | 是否禁用复选框文本点击 | `boolean` |   false    |
| options[0].iconDisabled       | 是否禁用图标文本点击 | `boolean` |  false     |
| options[0].containerClass       | 外围样式系统样式 | `string` |      |
| options[0].containerStyle       | 外围样式 | `ViewStyle` |       |