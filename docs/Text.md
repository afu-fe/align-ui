---
title: Text 文本
order: 2
nav:
  title: 组件
  path: /component
group:
  title: 基础组件
  path: /basic
  order: 0
---

# Text 文本

支持字号、字重、颜色、常用 苹果 字体等，封装行内占位，三端差异抹平等等常用功能。

### 何时使用

- 当你需要展示文本的时候

### 基础实例

```jsx mdx:preview&background=#bebebe29
import React, { memo } from 'react'
import { View, Text } from 'align-ui';
const Demo: React.FC = () => {
  return (
    <View containerClass={'flex-col,m-5'}>
      <View containerClass={'text-8,mb-5,text-black,din,border-red'}>Text 文字</View>
      <View containerClass={'flex-col'}>
        <View containerClass={'text-9,text-black,din'}>18.</View>
        <View containerClass={'text-8,text-black,din'}>16.</View>
        <Text containerClass={'text-7,text-black,din'}>14.</Text>
        <Text containerClass={'text-6,text-black,din'}>12.</Text>
        <Text containerClass={'text-5,text-black,din'}>10.</Text>
        <View containerClass={'text-9,ml-5,text-black,din,font-abold'}>bold.</View>
        <Text containerClass={'text-9,ml-5,text-black,din,font-medium'}>500.</Text>
        <Text containerClass={'text-9,ml-5,text-black,din,font-normal'}>400.</Text>
        <View containerClass={'text-9,ml-5,text-green,din'}>Gld010.</View>
        <Text containerClass={'text-9,ml-5,text-red,din'}>Grn010.</Text>
        <Text containerClass={'text-9,ml-5,text-cyan,din'}>Org010.</Text>
      </View>
    </View>
  );
}
export default memo(Demo)
```
### Text

#### 属性

组件继承 [`Text`](https://reactnative.dev/docs/text)

| 属性           | 说明       | 类型      | 默认值 |
| -------------- | ---------- | --------- | ------ |
| containerClass | 样式简写   | `string`  | -      |
| style          | 单独的样式 | `Object`  | -      |
| children       | 被包裹元素 | `Element` | -      |
