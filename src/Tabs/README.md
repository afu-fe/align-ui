---
title: Tabs标签页
nav:
  title: 组件
  path: /component
group:
  title: 通用组件
  path: /general
  order: 1
---

# Tabs 标签页

选项卡切换组件

### 功能

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

### 基础实例

```jsx mdx:preview&background=#bebebe29
import React, { Component, useState } from 'react';
import { Tabs, View, Text } from 'align-ui';

function Demo() {
  const [tabs, setTabs] = useState([
    'tab1',
    'tab2',
    'tab3',
    'tab4',
    'tab5',
    'tab6',
    'tab7',
    'tab8',
    'tab9',
    'tab10',
    'tab11',
    'tab12',
    'tab13',
    'tab14',
    'tab15',
    'tab16',
    'tab17',
    'tab18',
    'tab19',
    'tab20',
  ]);
  return (
    <Tabs title={tabs}>
      {tabs.map((item, index) => {
        return (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 200,
            }}
          >
            <Text
              style={{
                fontSize: 20,
              }}
            >
              {item}
            </Text>
          </View>
        );
      })}
    </Tabs>
  );
}
export default Demo;
```

### Tabs

#### 属性

| 属性                | 说明               | 类型                      | 默认值     |
| ------------------- | ------------------ | ------------------------- | ---------- |
| title               | 展示 tab 标题      | `string[] \| ReactNode[]` | (required) |
| titleContainerStyle | 单个 tab 容器样式  | `ViewStyle`               | `--`       |
| titleContainerClass | 单个 tab 容器样式  | `string`                  | `--`       |
| titleStyle          | tab 标题样式       | `TextStyle`               | `--`       |
| titleClass          | tab 标题样式       | `Tstring`                 | `--`       |
| indicator           | 自定义指示器       | `ReactNode`               | `--`       |
| indicatorStyle      | 指示器样式         | ` ViewStyle`              | `--`       |
| indicatorClass      | 指示器样式         | `string`                  | `--`       |
| onChange            | 切换 tab 回调      | (index: number) => void   | `--`       |
| startIndex          | 默认选中 tab 下标  | number                    | `0`        |
| showIndicator       | 是否展示底部指示器 | boolean                   | `true`     |
| height              | tabs 高度          | number                    | `--`       |
