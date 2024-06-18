---
title: List 列表
nav:
  title: 组件
  path: /component
group:
  title: 通用组件
  path: /general
  order: 1
---

# List 列表

展示列表数据。

### 功能

- 展示列表。
- 自定义列表样式。

### 基础实例

```jsx mdx:preview&background=#bebebe29
import {List, View} from "align-ui";
import {useEffect, useState} from "react";
const Demo = () => {
    const [dataSource, setDataSource] = useState<string[]>([])

    useEffect(() => {
        const data = (new Array(100)).fill(0).map((_, index) => {
            return `item-${index + 1}`
        })
        setDataSource(data)
    }, []);

    return(
        <List
            dataSource={dataSource}
            renderItem={({item}) => {
                return (
                    <View containerClass={`h-22,item-center,flex-row`}>
                        {item}
                    </View>
                )
            }}
            ItemSeparatorComponent={() => {
                return(
                    <View containerClass={`h-0.5,bg-grey-30`}/>
                )
            }}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default Demo;

```

### Alert

#### 属性

| 属性                             | 说明                                                                                     | 类型                                                                                                                                                                                                                                                                                                                                                                                                         | 默认值     |
|--------------------------------|----------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| dataSource                     | 列表数据源                                                                                  | `T[]`                                                                                                                                                                                                                                                                                                                                                                                                      | `--`    |
| renderItem                     | 渲染每个条目                                                                                 | `ListRenderItem<T> \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                   | `--`    |
| ItemSeparatorComponent         | 分割线                                                                                    | `React.ComponentType<any> \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                            | `--`    |
| ListEmptyComponent             | 列表为空时展示的内容                                                                             | `React.ComponentType<any> \| React.ReactElement<unknown> \| null \| undefined`                                                                                                                                                                                                                                                                                                                             | `--`    |
| ListFooterComponent            | 列表底部展示内容                                                                               | `React.ComponentType<any> \| React.ReactElement<unknown> \| null \| undefined`                                                                                                                                                                                                                                                                                                                             | `--`    |
| ListFooterComponentClass       | 底部内容样式                                                                                 | `string`                                                                                                                                                                                                                                                                                                                                                                                                   | `--`    |
| ListHeaderComponent            | 列表头部展示内容                                                                               | `React.ComponentType<any> \| React.ReactElement<unknown> \| null \| undefined`                                                                                                                                                                                                                                                                                                                             | `--`    |
| ListHeaderComponentClass       | 列表头部内容样式                                                                               | `string`                                                                                                                                                                                                                                                                                                                                                                                                   | `--`    |
| horizontal                     | 是否是横向滚动                                                                                | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                  | `false` |
| initialNumToRender             | 初始化渲染条数                                                                                | ` number`                                                                                                                                                                                                                                                                                                                                                                                                  | `--`    |
| inverted                       | 是否反向滚动                                                                                 | `boolean`                                                                                                                                                                                                                                                                                                                                     \| `false`                                                   |
| keyExtractor                   | 为item设置一个key                                                                           | `((item: T, index: number) => string) \| undefined`                                                                                                                                                                                                                                                                                                                                                        | `--`    |
| onEndReached                   | 滚动到底部阈值范围内                                                                             | `((info: { distanceFromEnd: number }) => void)                                                                                                                                                                                                                                                                                                                         \| null               \| undefined` | `--`    |
| onEndReachedThreshold          | 距离底部阈值范围触发onEndReached                                                                 | `number \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                              | `--`    |
| onRefresh                      | 下拉刷新组件                                                                                 | `(() => void) \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                        | `--`    |
| refreshing                     | 是否数据正在更新                                                                               | `boolean \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                             | `--`    |
| scrollToEnd                    | 滚动到尾部                                                                                  | `(options?: { animated: boolean }) => void`                                                                                                                                                                                                                                                                                                                                                                | `--`    |
| scrollToOffset                 | 滚动到指定偏移量                                                                               | `(params: { animated?: boolean  \| null \| undefined; offset: number }) => void`                                                                                                                                                                                                                                                                                                                           | `--`    |
| endFillColor                   | 有时候滚动视图会占据比实际内容更多的空间。这种情况下可以使用此属性，指定以某种颜色来填充多余的空间，以避免设置背景和创建不必要的绘制开销。一般情况下并不需要这种高级优化技巧 | `ColorValue \| undefined`                                                                                                                                                                                                                                                                                                                                                                                  | `--`    |
| onScroll                       | 列表滚动事件监听                                                                               | `((event: NativeSyntheticEvent<NativeScrollEvent>) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                  | `--`    |
| pagingEnabled                  | 为true时滚动会停留在试图尺寸整数倍                                                                    | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                     | `--`    |
| refreshControl                 | 自定义下拉刷新内容                                                                              | `React.ReactElement<RefreshControlProps> \| undefined`                                                                                                                                                                                                                                                                                                                                                     | `--`    |
| scrollEnabled                  | 是否可滚动                                                                                  | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                     | `true`  |
| showsHorizontalScrollIndicator | 横向滚动时是否展示滚动条                                                                           | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                     | `true`  |
| showsVerticalScrollIndicator   | 纵向滚动时是否展示滚动条                                                                           | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                     | `true`                                                                                                                                                                                                                                                                                                                                                                           |
| bounces                        | 当值为 true 时，如果内容范围比滚动视图本身大，在到达内容末尾的时候，可以弹性地拉动一截，IOS端有效                                  | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                     | `true`  |
| scrollEventThrottle            | 在滚动过程中，scroll 事件被调用的频率                                                                 | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                      | `--`    |
| scrollTo            | 滚动到指定位置                                                                                | `(y?: number \| { x?: number \| undefined; y?: number \| undefined; animated?: boolean \| undefined },x?: number,animated?: boolean) => void`                                                                                                                                                                                                                                                              | `--`    |
| onLayout            | 布局事件                                                                                   | `((event: LayoutChangeEvent) => void) \| undefined;`                                                                                                                                                                                                                                                                                                                                                       | `--`    |
