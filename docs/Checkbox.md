---
title: Checkbox 复选框
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

一组备选项中进行多选。

### 何时使用

- 适用于勾选某个单项内容，例如是否同意、已读。

适用于受控、非受控两种方式。

### 基础实例

```jsx mdx:preview&background=#bebebe29
import React, { memo, useState } from 'react'
import { Checkbox, View } from 'align-ui';
const Demo: React.FC = () => {
  const [value, setValue] = useState(true)
  return (
    <View containerClass={'flex-col,mb-30'}>
      <View containerClass={'mt-10,mb-5'}>基础用法</View>
      <Checkbox label={'初始化时未激活'} onChange={v => {
              console.log('当前状态：', v)
            }}/>
      <Checkbox label={'初始化时激活'} checked onChange={v => {
          console.log('当前状态：', v)
        }}/>
      <Checkbox label={'自定义 icon 边距'} checked iconClass={'mr-10'} onChange={v => {
          console.log('当前状态：', v)
        }}/>
      <Checkbox label={'受控:不更新'} checked={value}/>
      <Checkbox label={'受控:更新'} checked={value} onChange={(flag)=>{setValue(flag)}}/>
      <View containerClass={'mt-10,mb-5'}>禁用状态</View>
      <Checkbox label={'未激活'} disabled onChange={v => { console.log('当前状态：', v)}}/>
      <Checkbox label={'已激活'} disabled checked onChange={v => { console.log('当前状态：', v)}}/>
      <View containerClass={'mt-10,mb-5'}>自定义</View>
      <Checkbox label={'自定义激活时图标颜色'} checkedColor={'red'} checked onChange={v => { console.log('当前状态：', v)}}/>
      <Checkbox label={'自定义激活时图标颜色'} checkedColor={'green'} checked onChange={v => { console.log('当前状态：', v)}}/>
      
      <View containerClass={'mt-10,mb-5'}>禁用文本点击</View>
      <Checkbox label={'点击图标可以更新状态，点击文字不更新状态'} labelDisabled checked onChange={v => { console.log('当前状态：', v)}}/>
      <Checkbox label={'点击文本可以更新状态，点击图标不更新状态'} iconDisabled checked onChange={v => { console.log('当前状态：', v)}}/>
      <View containerClass={'mt-10,mb-5'}>自定义图标</View>
      <Checkbox label={'自定义图标'} iconDisabled checked={value} activeIconUrl="https://z.autoimg.cn/sou/auto-ui/icon/rise.png" inactiveIconUrl="https://z.autoimg.cn/sou/auto-ui/icon/fall.png" checkedColor={'white'} onChange={v => { console.log('当前状态：', v)}}/>
      <Checkbox label={'点击文案响应切换，图标没有绑定点击回调'} iconDisabled checked={value} activeIconUrl="https://z.autoimg.cn/sou/auto-ui/icon/rise.png" inactiveIconUrl="https://z.autoimg.cn/sou/auto-ui/icon/fall.png" checkedColor={'white'} onChange={v => { console.log('当前状态：', v)}}/>
      <Checkbox label={'点击图标响应切换'} checked={value} labelDisabled activeIconUrl="https://z.autoimg.cn/sou/auto-ui/icon/rise.png" inactiveIconUrl="https://z.autoimg.cn/sou/auto-ui/icon/fall.png" checkedColor={'white'} onChange={v => { console.log('当前状态：', v)}}/>
      <View containerClass={'mt-10,mb-5'}>自定义样式</View>
      <Checkbox label={'自定义图标大小'} iconSize={20}  checked onChange={v => { console.log('当前状态：', v)}}/>
      <Checkbox label={'自定义文本大小'} iconSize={20}  checked onChange={v => { console.log('当前状态：', v)}} labelTextClass={'text-red,text-10'}/>
      <Checkbox label={'文本多行展示文本多行展示文本多行展示文本多行展示文本多行展示文本多行展示文本多行展示文本多行展示文本多行展示文本多行展示文本多行展示文本多行展示文本多行展示文本多行展示文本多行展示文本多行展示'} iconSize={20}  checked onChange={v => { console.log('当前状态：', v)}}/>
   </View>
  );
}
export default memo(Demo)
```

### Checkbox

#### 属性


| 属性           | 说明       | 类型      | 默认值 |
| -------------- | ---------- | --------- | ------ |
| onChange       | 变化时的回调函数   | (value:ActiveValueT|InactiveValueT) => void  | -      |
| disabled          | 是否禁用复选框 | `boolean`  | false      |
| textPosition       | icon位置 | `left right` | -      |
| label       | 文本文案 | `string` | -      |
| iconSize       | icon大小 | `number` | 16      |
| checked       | 是否被选中 | `boolean` | false     |
| checkedColor       | 被选中颜色 | `string` | -      |
| activeIconUrl       | 被选中Icon地址 | `string` | -      |
| inactiveIconUrl       | 不被选中Icon地址 | `string` | -      |

| labelTextClass       | 文本样式系统样式 | `string` |      |
| labelTextStyle       | 文本样式 | `TextStyle` |       |
| iconClass       | icon样式系统样式 | `string` |       |
| iconStyle       | icon样式 | `ViewStyle` |      |
| labelDisabled       | 是否禁用复选框文本点击 | `boolean` |   false    |
| iconDisabled       | 是否禁用图标文本点击 | `boolean` |  false     |
| containerClass       | 外围样式系统样式 | `string` |      |
| containerStyle       | 外围样式 | `ViewStyle` |       |
