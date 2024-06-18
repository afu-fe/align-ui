---
title: Search 搜索
nav:
  title: 组件
  path: /component
group:
  title: 通用组件
  path: /general
  order: 1
---

# Search 搜索

用于搜索场景的输入框组件。

### 功能

- 当有需求需求时，可以添加搜索按钮。
- 包含搜索按钮、清空按钮，可以自定义部分样式。

### 基础实例

```jsx mdx:preview&background=#bebebe29
import {Search} from "align-ui";

const Demo = () => {
    return (<Search
        autoFocus={true}
        showClearBtn={true}
        defaultValue={'默认值'}
        onSearch={(text) => {
            console.log('onSearch:', text)
        }}
        onChangeText={(text) => {
            console.log('onChangeText:', text)
        }}
    />)
}

export default Demo;
```

### Alert

#### 属性

| 属性 | 说明             | 类型                            | 默认值       |
| --- |----------------|-------------------------------|-----------|
| containerClass | 设置搜索框整体容器样式    | `string`                      | `--`      |
| searchContainerClass | 设置搜索框、按钮容器样式   | `string`                      | `--`      |
| leftIconSize | 设置左侧图标大小       | `number`                      | `--`      |
| showLeftIcon | 是否展示左侧图标       | `boolean`                     | `true`    |
| placeholder | 提示文字           | `string`                      | `请输入搜索内容` |
| placeholderTextColor | 提示文字颜色         | `string`                      | `#828CA0` |
| autoFocus | 是否自动聚焦         | `boolean`                     | `--`      |
| onChangeText | 输入内容改变触发事件     | `(text?: string) => void`     | `--`      |
| defaultValue | 输入框默认内容        | ` string`                     | `--`      |
| maxLength | 输入框最长输入内容      | ` number`                     | `--`      |
| onBlur | 失去焦点时回调        | `() => void`                  | `--`      |
| onFocus | 聚焦时回调          | `() => void`                  | `--`      |
| onKeyDown | 按键按下时回调        | `(keyValue?: string) => void` | `--`      |
| onSearch | 搜索按钮点击回调       | `(text?: string) => void`     | `--`      |
| searchBtnText | 搜索按钮文字         | `string`                      | `搜索`      |
| searchBtnClass | 搜索按钮样式         | `string`                      | `--`      |
| showSearchBtn | 是否展示搜索按钮       | `boolean`                     | `--`      |
| showSearchBtn | 是否展示搜索按钮       | `boolean`                     | `true`    |
| prefix | 自定义前面搜索图标之前的内容 | `ReactNode`                   | `--`      |
| suffix | 自定义搜索按钮之后的内容   | `ReactNode`                   | `--`      |
| showClearBtn | 是否展示清除按钮       | `boolean`                     | `--`      |
| inputClass | 设置数据框样式        | `string`                      | `--`      |
