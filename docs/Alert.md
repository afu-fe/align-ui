---
title: Alert 警告提示
nav:
  title: 组件
  path: /component
group:
  title: 通用组件
  path: /general
  order: 1
---

# Alert 警告提示

警告提示，展现需要关注的信息。

### 功能

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

### 基础实例

```jsx mdx:preview&background=#bebebe29
import React from 'react';
import { Alert, View } from 'align-ui';

function Demo() {
  return (
    <>
      <View containerClass="flex-col">
        <Alert type="info" message="这是一条提示信息" />
      </View>
      <View containerClass="mt-10,flex-col">
        <Alert type="success" message="这条消息提示成功信息" />
      </View>

      <View containerClass="mt-10,flex-col">
        <Alert type="warning" message="这是一条警告信息" />
      </View>

      <View containerClass="mt-10,flex-col">
        <Alert type="error" message="这是一条错误信息" />
      </View>
      <View containerClass="mt-10,flex-col">
        <Alert showIcon showCloseIcon={true} type="info" message="这是一条提示信息" />
      </View>
      <View containerClass="mt-10,flex-col">
        <Alert showIcon showCloseIcon={true} type="success" message="这条消息提示成功信息" />
      </View>

      <View containerClass="mt-10,flex-col">
        <Alert
          showIcon
          showCloseIcon={true}
          type="warning"
          message="这是一条警告信息"
          description="这是一条描述信息"
        />
      </View>

      <View containerClass="mt-10,flex-col">
        <Alert
          showIcon
          showCloseIcon={true}
          type="error"
          message="这是一条错误信息"
          description="这是一条描述信息"
        />
      </View>
    </>
  );
}
export default Demo;
```

### Alert

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| action | 自定义操作项 | `ReactNode[]` | `--` |
| closeIcon | 自定义关闭 Icon | `ReactNode` | `--` |
| showCloseIcon | 是否展示关闭按钮 | `boolean` | `--` |
| description | 描述 | `ReactNode \| string` | `false` |
| descriptionStyle | 设置描述样式 | `TextStyle` | `--` |
| descriptionClass | 设置描述样式 | `string` | `--` |
| icon | 自定义图标，showIcon 为 true 时有效 | `ReactNode` | `--` |
| message | 警告提示内容 | ` ReactNode \| string` | `--` |
| showIcon | 是否显示辅助图标 | ` boolean` | `false` |
| type | 指定警告提示的样式，有四种选择 success、info、warning、error | ` string` | `--` |
| onClose | 关闭时触发的回调函数 | `() => void` | `--` |
| containerStyle | 自定义容器样式 | `Style` | `--` |
| containerClass | 自定义容器样式 | `string` | `--` |
| messageStyle | 自定义警告文字样式 | `Style` | `--` |
| messageClass | 自定义警告文字样式 | `string` | `--` |
