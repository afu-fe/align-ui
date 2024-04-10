---
title: Empty 加载失败状态
nav:
  title: 组件
  path: /component
group:
  title: 通用组件
  path: /general
  order: 1
---

# Empty 加载失败状态

加载失败提示组件

### 功能

加载失败提示组件

### 基础实例

```jsx mdx:preview&background=#bebebe29
import React from 'react';
import { Failed } from 'align-ui';

function Demo() {
  return <Failed btnText="重新加载" imageClass={'mt-50'} btnClass={'mb-50'} />;
}
export default Demo;
```

### Failed

#### 属性

| 属性             | 说明                               | 类型                    | 默认值     |
| ---------------- | ---------------------------------- | ----------------------- | ---------- |
| image            | 展示图片（为 string 时是图片 rul） | `string \| ReactNode[]` | (required) |
| imageStyle       | 图片样式                           | `ImageStyle`            | `--`       |
| imageClass       | 图片样式                           | `string`                | `--`       |
| title            | 标题                               | `TextStyle \| string`   | `--`       |
| description      | 描述                               | `TextStyle \| string`   | `--`       |
| titleStyle       | 设置标题样式                       | ` ViewStyle`            | `--`       |
| titleClass       | 设置标题样式                       | ` string`               | `--`       |
| descriptionStyle | 设置描述样式                       | ` ViewStyle`            | `--`       |
| descriptionClass | 设置描述样式                       | ` string`               | `--`       |
| btnText          | 按钮文案                           | ` string \| ReactNode`  | `--`       |
| btnStyle         | 按钮样式                           | ` ViewStyle`            | `--`       |
| btnClass         | 按钮样式                           | ` string`               | `--`       |
| btnTextStyle     | 按钮文案样式                       | ` TextStyle`            | `--`       |
| btnTextClass     | 按钮文案样式                       | ` string`               | `--`       |
| onBtnClick       | 按钮点击事件                       | ` () => void`           | `--`       |
