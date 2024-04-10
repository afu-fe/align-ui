---
title: Badge 徽标数
nav:
  title: 组件
  path: /component
group:
  title: 通用组件
  path: /general
  order: 1
---

# Badge 徽标数

默认位置为右上角，支持自定义颜色、徽标偏移量，是否展示封顶数字、为零是否展示等。

### 何时使用

- 当你需要展示徽标提示时

### 基础实例

```jsx mdx:preview&background=#bebebe29
import React, { Component } from 'react';
import { View, Switch, Text, Badge, Button } from 'align-ui';

function Demo() {
  const toggle = 1;
  return (
    <View containerClass={'flex-col,m-5'}>
      <View containerClass={'text-8,mb-5,text-black,din'}>Badge 徽标数</View>
      <View>
        <Badge count={2222} showDot={true}>
          <Button type={`primary`}>只展示圆点</Button>
        </Badge>
      </View>
      <View containerClass={'mt-10'}>
        <Badge count={2222} overflowCount={99999}>
          <Button type={`primary`}>展示数字,并且设置最大值为99999</Button>
        </Badge>
      </View>
      <View containerClass={'mt-10'}>
        <Badge count={2222}>
          <Button type={`primary`}>展示数字,并且默认最大值为99</Button>
        </Badge>
      </View>
      <View containerClass={'mt-10'}>
        <Badge count={'右移中文角标'}>
          <Button type={`primary`}>primary</Button>
        </Badge>
      </View>
      <View containerClass={'mt-10'}>
        <Badge count={'右移中文角标'}></Badge>
      </View>
      <View containerClass={'mt-10'}>
        <Badge count={'右移中文角标'} showDot={true}></Badge>
      </View>
    </View>
  );
}
export default Demo;
```

### Badge

#### 属性

| 属性          | 说明                                 | 类型                   | 默认值  |
| ------------- | ------------------------------------ | ---------------------- | ------- |
| bgClass       | 外边框的样式                         | `'string'`             | ---     |
| textClass     | 文字样式                             | `'string'`             | ---     |
| count         | 数字(number)/中文(string)角标内容    | `'string' \| 'number'` | `false` |
| overflowCount | 数字(number)/中文(string)角标内容    | `'string' \| 'number'` | 99      |
| showDot       | 不展示数值，仅展示红点，默认不展示。 | `boolean`              | `false` |
