---
title: Button 按钮
nav:
  title: 组件
  path: /component
group:
  title: 通用组件
  path: /general
  order: 1
---

# Button 按钮

按钮用于开始一个即时操作。

### 何时使用

标记了一个或封装一组操作命令，响应用户点击行为，触发相应的业务逻辑。

### 基础实例

```jsx mdx:preview&background=#bebebe29
import React, { Component } from 'react';
import { Button, View } from 'align-ui';
function Demo() {
  return (
    <>
      <View containerClass={'text-8,mb-5,text-black,din'}>Button 按钮</View>
      <View containerClass={'mb-5'}>不同颜色的按钮</View>
      <View containerClass={'flex,flex-row,w-full,px-5,flex-wrap,justify-between'}>
        <Button>default</Button>
        <Button type={`primary`}>primary</Button>
        <Button type={`success`}>success</Button>
      </View>
      <View containerClass={'flex,flex-row,w-full,px-5,flex-wrap,mt-5'}>
        <Button type={`warning`}>warning</Button>
        <Button type={`danger`} containerClass={'ml-5'}>
          danger
        </Button>
      </View>
      <View containerClass={'w-full,h-1,bg-blue10-5,mt-5,mb-5'} />
      <View containerClass={'mb-5'}>不同大小的按钮</View>
      <View containerClass={'flex,flex-row,justify-between,w-full,px-5,item-center'}>
        <Button type={`primary`} size={'mini'}>
          mini
        </Button>
        <Button type={`primary`} size={'small'}>
          small
        </Button>
        <Button type={`primary`} size={'middle'}>
          middle
        </Button>
        <Button type={`primary`} size={'large'}>
          large
        </Button>
      </View>
      <View containerClass={'w-full,h-1,bg-blue10-5,mt-5,mb-5'} />
      <View containerClass={'mb-5'}>禁用状态</View>
      <View containerClass={'flex,flex-row,justify-between,w-full,px-5'}>
        <Button disabled={true}>default</Button>
        <Button type={`primary`} disabled={true}>
          primary
        </Button>
      </View>
      <View containerClass={'w-full,h-1,bg-blue10-5,mt-5,mb-5'} />
      <View containerClass={'mb-5'}>填充模式</View>
      <View containerClass={'flex,flex-row,justify-between,w-full,px-5'}>
        <Button type={`primary`} fill={'solid'}>
          solid
        </Button>
        <Button type={`primary`} fill={'outline'}>
          outline
        </Button>
        <Button type={`primary`} fill={'none'}>
          none
        </Button>
        <Button fill={'none'}>none</Button>
      </View>
      <View containerClass={'w-full,h-1,bg-blue10-5,mt-5,mb-5'} />
      <View containerClass={'mb-5'}>带图标的按钮</View>
      <View containerClass={'flex,flex-row,justify-between,w-full,px-5'}>
        <Button type={`primary`} iconType={'info'}>
          按钮带图标
        </Button>
      </View>
      <View containerClass={'w-full,h-1,bg-blue10-5,mt-5,mb-5'} />
      <View containerClass={'mb-5'}>点击方法返回</View>
      <View containerClass={'flex,flex-row,justify-between,w-full,px-5'}>
        <Button
          onClick={() => {
            alert('点击方法返回');
          }}
          type={`primary`}
        >
          点击方法返回
        </Button>
      </View>
    </>
  );
}
export default Demo;
```

### Button

#### 属性

组件继承 [`TouchableOpacity`](https://facebook.github.io/react-native/docs/touchableopacity#docsNav)

注：当你设置按钮颜色时如果使用`color`或者`backgroundColor`时，设置的颜色是`黑色`或者`白色`时，文本颜色会和你设置的按钮背景色是一样的哦！！

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型 | `'primary' \| 'success' \| 'warning' \| 'danger'\| 'default'` | `default` |
| size | 按钮尺寸 | `'mini' \| 'small' \| 'middle'\| 'large'\|'default'` | `default` |
| fill | 填充模式 | `'solid' \| 'outline' \| 'none' ` | `solid` |
| containerClass | 按钮重写样式 | `string` | `---` |
| style | 按钮重写样式 | `Object` | `---` |
| disabled | 是否禁用 | `boolean` | `false` |
| iconType | 按钮前置图标 | `string` | `--` |
| textStr | 如果子节点是文本，修改文本样式 | `string` | `--` |
| textStr | 如果子节点是文本，修改文本样式 | `string` | `--` |
| onClick | 点击事件 | `CustomEvent<any>` | `--` |
| iconType | Icon 图标 | icon 的类型，有效值：success, success_no_circle, info, warn, waiting, cancel, download, search, clear, back, delete, adjust, blackRightShift, close, explain_linear, explain_plane, fall, feeds_close, fold, group, hook, fire, landscape, module_loading, more_blue, more_gray, more, pdf, pin, plane, popupunfold, quotation_waiting, radio_jump, rightshift, rise, safety, sell_disabled, sell, share, trade_detail, trade_dingtou_disabled, trade_dingtou, trade_hide, trade_tradingrecord, trade_visible, unfold, whiteHook |
| iconSize | icon 的大小，单位 px | `number` | 20 |
