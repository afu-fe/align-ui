---
title: Rate 评分
nav:
  title: 组件
  path: /component
group:
  title: 通用组件
  path: /general
  order: 1
---

# Switch 切换按钮

Rate 评分

### 何时使用

- 当你需要展示评分星级时候

### 基础实例

```jsx mdx:preview&background=#bebebe29
import React, { Component } from 'react';
import { View, Rate } from 'align-ui';

function Demo() {
  const toggle = 1;
  return (
    <View containerClass={'flex-col,m-5'}>
      <View containerClass={'text-8,mb-5,text-black,din'}>Rate 评分</View>
      <Rate></Rate>
      <Rate score={3}></Rate>
      <Rate size={20}></Rate>
      <Rate size={20} score={4}></Rate>
    </View>
  );
}
export default Demo;
```

### Rate

#### 属性

| 属性             | 说明                                           | 类型      | 默认值  |
| ---------------- | ---------------------------------------------- | --------- | ------- |
| containerClass   | 盒子外围的样式                         | `string` | `` |
| size         | 星标大小                                       | `number` | `12` |
| score    | 评分 | `number`     | 5      |
| count    | 全部星星的数量(总分) | `number`     | 5      |

