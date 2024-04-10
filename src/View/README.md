---
title: View 盒子
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

View 是 align-ui 最基础的组件，实现了样式组件系统[rn-atomcss](https://www.npmjs.com/package/rn-atomcss)，采用这种 UI 写法后，编程思路顺畅，无需绞尽脑汁为 classname 起名，无需 js css 来回切换，编写迅速代码精简 盒子用于包裹一组元素，更多可参考样式组件系统介绍

### 何时使用

- 当你需要包裹一组元素时。

### 基础实例

<code src="./__fixtures__/index.tsx"></code>

### View

#### 属性

组件继承 [`View`](https://reactnative.dev/docs/view)

| 属性           | 说明       | 类型      | 默认值 |
| -------------- | ---------- | --------- | ------ |
| containerClass | 样式简写   | `string`  | -      |
| style          | 单独的样式 | `Object`  | -      |
| children       | 被包裹元素 | `Element` | -      |
