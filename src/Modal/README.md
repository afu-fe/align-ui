---
title: Modal弹窗
nav:
  title: 组件
  path: /component
group:
  title: 通用组件
  path: /general
  order: 1
---

# Modal 弹窗

弹窗组件

### 功能

支持提示窗、确认窗两种样式弹窗。

### 基础实例

```jsx mdx:preview&background=#bebebe29
import React, { Component, useState } from 'react';
import { Button, Modal } from 'align-ui';

function Demo() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        打开弹窗
      </Button>
      <Modal
        visible={visible}
        title="我是标题"
        description="我是对话框正文，支持多行，建议显示文案在三行以内，折行后文案左对齐展示"
        onCancel={() => {
          console.log('cancel');
          setVisible(false);
        }}
        onOk={() => {
          console.log('ok');
          setVisible(false);
        }}
      ></Modal>
    </>
  );
}
export default Demo;
```

### Modal

#### 属性

| 属性          | 说明                 | 类型                        | 默认值     |
| ------------- | -------------------- | --------------------------- | ---------- |
| visible       | 弹窗是否打开         | `boolean`                   | (required) |
| title         | 弹窗标题             | `string \| React.ReactNode` | `--`       |
| description   | 弹窗内容             | `string \| React.ReactNode` | `--`       |
| cancelText    | 取消文字             | `string \| React.ReactNode` | `取消`     |
| okText        | 确认文字             | `string \| React.ReactNode` | 确认       |
| onCancel      | 底部左侧按钮回调函数 | () => void                  | --         |
| onOk          | 底部右侧按钮回调函数 | () => void                  | --         |
| showAnimation | 是否展示动画         | boolean                     | false      |
| footer        | 自定义底部内容       | React.ReactNode             | --         |
