---
title: Icon 图标
nav:
  title: 组件
  path: /component
group:
  title: 通用组件
  path: /general
  order: 1
---

# Icon 图标

语义化的矢量图形

### 何时使用

- 当你需要展示某一个图标时。

### 基础实例

```jsx mdx:preview&background=#bebebe29
import React, { Component } from 'react';
import { View, Icon } from 'align-ui';

function sigleIcon(type) {
  return (
    <View containerClass={'flex-col, item-center, w-1/2,mb-10'}>
      <Icon type={type} size={30} />
      {type}
    </View>
  );
}

function Demo() {
  return (
    <>
      <View containerClass={'text-8,mb-5,text-black,din'}>Icon 图标</View>
      <View containerClass={'flex-wrap'}>
        {sigleIcon('success')}
        {sigleIcon('success_no_circle')}
        {sigleIcon('info')}
        {sigleIcon('warn')}
        {sigleIcon('waiting')}
        {sigleIcon('cancel')}
        {sigleIcon('download')}
        {sigleIcon('search')}
        {sigleIcon('back')}
        {sigleIcon('delete')}
        {sigleIcon('clear')}
        {sigleIcon('adjust')}
        {sigleIcon('blackRightShift')}
        {sigleIcon('close')}
        {sigleIcon('explain_linear')}
        {sigleIcon('explain_plane')}
        {sigleIcon('fall')}
        {sigleIcon('feeds_close')}
        {sigleIcon('fold')}
        {sigleIcon('group')}
        {sigleIcon('hook')}
        {sigleIcon('fire')}
        {sigleIcon('landscape')}
        {sigleIcon('module_loading')}
        {sigleIcon('more_blue')}
        {sigleIcon('more_gray')}
        {sigleIcon('more')}
        {sigleIcon('pdf')}
        {sigleIcon('pin')}
        {sigleIcon('plane')}
        {sigleIcon('popupunfold')}
        {sigleIcon('quotation_waiting')}
        {sigleIcon('radio_jump')}
        {sigleIcon('rightshift')}
        {sigleIcon('rise')}
        {sigleIcon('safety')}
        {sigleIcon('sell_disabled')}
        {sigleIcon('sell')}
        {sigleIcon('share')}
        {sigleIcon('trade_detail')}
        {sigleIcon('trade_dingtou_disabled')}
        {sigleIcon('trade_dingtou')}
        {sigleIcon('trade_hide')}
        {sigleIcon('trade_tradingrecord')}
        {sigleIcon('trade_visible')}
        {sigleIcon('unfold')}
        {sigleIcon('whiteHook')}
      </View>
    </>
  );
}
export default Demo;
```

### Icon

#### 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | String |  | icon 的类型，有效值：success, success_no_circle, info, warn, waiting, cancel, download, search, clear, back, delete, adjust, blackRightShift, close, explain_linear, explain_plane, fall, feeds_close, fold, group, hook, fire, landscape, module_loading, more_blue, more_gray, more, pdf, pin, plane, popupunfold, quotation_waiting, radio_jump, rightshift, rise, safety, sell_disabled, sell, share, trade_detail, trade_dingtou_disabled, trade_dingtou, trade_hide, trade_tradingrecord, trade_visible, unfold, whiteHook |
| size | Number | 23 | icon 的大小，单位 px |
| color | Color |  | icon 的颜色，同 css 的 color |
