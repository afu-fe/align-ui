---
title: Empty 空状态
nav:
  title: 组件
  path: /component
group:
  title: 通用组件
  path: /general
  order: 1
---

# Empty 空状态

当目前没有数据时，用于显式的用户提示。

### 功能

空状态时的展示占位图。

### 基础实例

```jsx mdx:preview&background=#bebebe29
import React from 'react';
import { Empty } from 'align-ui';

function Demo() {
  return <Empty btnText="重新加载" imageClass={'mt-50'} btnClass={'mb-50'} />;
}
export default Demo;
```

### Empty

#### 属性

| 属性             | 说明                               | 类型                    | 默认值     |
| ---------------- | ---------------------------------- | ----------------------- | ---------- |
| image            | 展示图片（为 string 时是图片 rul） | `string \| ReactNode[]` | (required) |
| imageStyle       | 图片样式                           | `Style`                 | `--`       |
| imageClass       | 图片样式                           | `string`                | `--`       |
| description      | 描述                               | `Style \| string`       | `--`       |
| descriptionStyle | 设置描述样式                       | `Style`                 | `--`       |
| descriptionClass | 设置描述样式                       | `string`                | `--`       |
| btnText          | 按钮文案                           | ` string \| ReactNode`  | `--`       |
| btnStyle         | 按钮样式                           | ` Style`                | `--`       |
| btnClass         | 按钮样式                           | ` string`               | `--`       |
| btnTextStyle     | 按钮文案样式                       | ` Style`                | `--`       |
| btnTextClass     | 按钮文案样式                       | ` string`               | `--`       |
| onBtnClick       | 按钮点击事件                       | ` () => void`           | `--`       |
