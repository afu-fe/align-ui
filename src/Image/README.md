---
title: Image 图片
order: 3
nav:
  title: 组件
  path: /component
group:
  title: 基础组件
  path: /basic
  order: 0
---

# Image 图片

- 适配简写语法，快速定义图片宽高
- 限定宽度或者高度，支持等比例缩放
- 支持 contain 模式作为尺寸比例差异大的异常素材兜底展示方案

### 何时使用

- 当你需要展示图片的时候

### 基础实例

```jsx mdx:preview&background=#bebebe29
import React, { Component } from 'react';
import { View, Image, Text } from 'align-ui';

function Demo() {
  return (
    <View containerClass={'flex-col,m-5,p-5,bg-gray-30'}>
      <View containerClass={'text-8,mb-5,text-black,din'}>Image 图片</View>
      <View>
        <View containerClass={'flex-col,w-50,mr-10,bg-blue40-20,hidden'}>
          <Text numberOfLines={2}>期望宽度100，高度等比例适配</Text>
          <View>
            <Image
              src="https://xqimg.imedao.com/1811de0356b43273fe4a0066.png"
              containerClass={'w-50'}
            />
          </View>
        </View>
        <View containerClass={'flex-col,w-50,mr-10,bg-blue40-20'}>
          <Text numberOfLines={2}>宽度100，高度75，圆角10</Text>
          <View>
            <Image
              src={'https://xqimg.imedao.com/1811de0356b43273fe4a0066.png'}
              containerClass={'w-50,h-37.5,rounded-5,hidden'}
            />
          </View>
        </View>
      </View>
      <View containerClass={'mt-5,flex-row,justify-between, item-start,flex-wrap, hidden'}>
        <View containerClass={'flex-col,w-50,bg-blue40-20'}>
          <Text numberOfLines={2}>宽高设置1/2，尺寸差别大，调整为contain模式</Text>
          <View>
            <Image
              src="https://xqimg.imedao.com/1811de0356b43273fe4a0066.png"
              containerClass={'w-50,h-100,'}
              mode={'contain'}
            />
          </View>
        </View>
        <View containerClass={'flex-col,w-50,mr-10,bg-blue40-20'}>
          <Text numberOfLines={2}>宽高设置1/2，不配置默认cover</Text>
          <View>
            <Image
              src="https://xqimg.imedao.com/1811de0356b43273fe4a0066.png"
              containerClass={'w-50,h-100,'}
            />
          </View>
        </View>
      </View>
      <View containerClass={'mt-20'}>
        <Text numberOfLines={2}>width设置100%，高度等比例适配</Text>
      </View>
      <View containerClass={'w-full,h-200'}>
        <Image
          src="https://xqimg.imedao.com/1811de0356b43273fe4a0066.png"
          containerClass={'w-full'}
        />
      </View>
    </View>
  );
}
export default Demo;
```

### Image

#### 属性

组件继承 [`image`](https://reactnative.dev/docs/image)

| 属性           | 说明                                       | 类型     | 默认值  |
| -------------- | ------------------------------------------ | -------- | ------- |
| src            | 图片源数据（仅支持远程 URL 地址）-优先使用 | `string` | -       |
| containerClass | 样式简写                                   | `string` | -       |
| style          | 单独的样式                                 | `Object` | -       |
| resizeMode     | Image 原生属性                             | `string` | 'cover' |
