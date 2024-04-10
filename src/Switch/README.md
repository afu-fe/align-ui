---
title: Switch 切换按钮
nav:
  title: 组件
  path: /component
group:
  title: 通用组件
  path: /general
  order: 1
---

# Switch 切换按钮

切换按钮组件, 开关按钮，可设置禁用

### 何时使用

- 当你需要展示开关按钮时

### 基础实例

```jsx mdx:preview&background=#bebebe29
import React, { Component } from 'react';
import { View, Switch, Text } from 'align-ui';

function Demo() {
  const toggle = 1;
  return (
    <View containerClass={'flex-col,m-5'}>
      <View containerClass={'text-8,mb-5,text-black,din'}>Switch 切换按钮</View>
      <View>
        <Text containerClass={'mr-2'}>开启</Text>
        <Switch value={1} />
      </View>
      <View containerClass={'mt-2'}>
        <Text containerClass={'mr-2'}>关闭</Text>
        <Switch value={0} />
      </View>
      <View>
        <Text containerClass={'mr-2'}>开启(禁用)</Text>
        <Switch value={1} disabled={true} />
      </View>
      <View containerClass={'mt-2'}>
        <Text containerClass={'mr-2'}>关闭(禁用)</Text>
        <Switch value={0} disabled={true} />
      </View>
      <View containerClass={'mt-2'}>
        <Text containerClass={'mr-2'}>更换开启时自定义颜色位红色</Text>
        <Switch value={1} switchTrueColor={'red'} />
      </View>
      <View containerClass={'mt-2'}>
        <Text containerClass={'mr-2'}>更换关闭时自定义颜色位红色</Text>
        <Switch value={1} switchFalseColor={'red'} />
      </View>
    </View>
  );
}
export default Demo;
```

### Switch

#### 属性

| 属性             | 说明                                           | 类型      | 默认值  |
| ---------------- | ---------------------------------------------- | --------- | ------- |
| value            | true: 开启 false: 关闭                         | `boolean` | `false` |
| disabled         | 是否禁用                                       | `boolean` | `false` |
| onValueChange    | 点击回调，参数 checked: 本次操作为开启 or 关闭 | `fun`     | -       |
| switchTrueColor  | 开启时自定义颜色，目前只支持样式系统的颜色 key | `string`  | -       |
| switchFalseColor | 关闭时自定义颜色，目前只支持样式系统的颜色 key | `string`  | -       |
