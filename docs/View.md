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

```jsx mdx:preview&background=#bebebe29
import React, { memo } from 'react'
import { View } from 'align-ui';
const Demo: React.FC = () => {
  return (
    <>
      <View containerClass={'text-8,mb-5,text-black,din'}>View 盒子</View>
      <View containerClass={'bg-primary-10,p-10,relative,w-full'}>
        <View containerClass="p-10,flex-1,bg-primary-50,border-0.5,border-blue10">
          <View containerClass="w-full,h-full,bg-primary,h-50,item-center,justify-center,flex">
            View 盒子模型
          </View>
        </View>
        <View containerClass="absolute,top-0,left-1/2,text-black-50">mt</View>
        <View containerClass="absolute,top-10,left-1/2,text-black-50">pt</View>
        <View containerClass="absolute,bottom-0,left-1/2,text-black-50">mb</View>
        <View containerClass="absolute,bottom-10,left-1/2,text-black-50">pb</View>
        <View containerClass="absolute,bottom-1/2,left-2,text-black-50">ml</View>
        <View containerClass="absolute,bottom-1/2,left-12,text-black-50">pl</View>
        <View containerClass="absolute,bottom-1/2,right-2,text-black-50">mr</View>
        <View containerClass="absolute,bottom-1/2,right-12,text-black-50">pr</View>
      </View>
      <View containerClass={'text-9,m-5'}>默认横向排列</View>
      <View>
        <View containerClass={'w-25,h-25,m-5,bg-primary'} />
        <View containerClass={'w-25,h-25,m-5,bg-primary-50'} />
        <View containerClass={'w-25,h-25,m-5,bg-primary-10'} />
      </View>
      <View containerClass={'text-9,m-5'}>col 纵向排列</View>
      <View containerClass={'flex-col'}>
        <View containerClass={'w-25,h-25,m-5,bg-primary'} />
        <View containerClass={'w-25,h-25,m-5,bg-primary-50'} />
        <View containerClass={'w-25,h-25,m-5,bg-primary-10'} />
      </View>
    </>
  );
}
export default memo(Demo)
```

### View

#### 属性

组件继承 [`View`](https://reactnative.dev/docs/view)

| 属性           | 说明       | 类型      | 默认值 |
| -------------- | ---------- | --------- | ------ |
| containerClass | 样式简写   | `string`  | -      |
| style          | 单独的样式 | `Object`  | -      |
| children       | 被包裹元素 | `Element` | -      |
