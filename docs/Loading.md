---
title: Loading 加载中状态
nav:
  title: 组件
  path: /component
group:
  title: 通用组件
  path: /general
  order: 1
---

# Loading 加载中状态

用于页面和区块的加载中状态。

### 功能

用于页面和区块的加载中状态。

### 基础实例

```jsx mdx:preview&background=#bebebe29
import React from 'react';
import { Loading } from 'align-ui';

function Demo() {
  return <Loading imageClass={'mt-50'} descriptionClass={'mb-50'} />;
}
export default Demo;
```

### Loading

#### 属性

| 属性             | 说明                               | 类型                    | 默认值     |
| ---------------- | ---------------------------------- | ----------------------- | ---------- |
| image            | 展示图片（为 string 时是图片 rul） | `string \| ReactNode[]` | (required) |
| imageStyle       | 图片样式                           | `Style`                 | `--`       |
| imageClass       | 图片样式                           | `string`                | `--`       |
| description      | 描述                               | `ReactNode \| string`   | `--`       |
| descriptionStyle | 设置描述样式                       | ` Style`                | `--`       |
| descriptionClass | 设置描述样式                       | ` string`               | `--`       |
