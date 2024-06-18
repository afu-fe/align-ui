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

# IntersectionObserver 滚动曝光

滚动曝光。

### 功能

- 滚动曝光组件，可以记录曝光时间

- 目标元素出现在视线内和离开视线内都会触发回调

- 场景：滚动曝光埋点，出现在视线上报埋点，离开视线上报埋点

### 基础实例

```jsx mdx:preview&background=#bebebe29
import {Observer, View} from "align-ui";
import {useEffect, useState} from "react";

const IntersectionObserver = () => {
    const {IOList, InView} = Observer
    const [dataSource, setDataSource] = useState<string[]>([])
    const [itemsVisible, setItemsVisible]= useState<boolean[]>([])

    useEffect(() => {
        const data = (new Array(100)).fill(0).map((_, index) => {
            return `item-${index + 1}`
        })
        setDataSource(data)
    }, []);

    return(
        <IOList
            dataSource={dataSource}
            renderItem={({item, index}) => {
                return (
                    <InView
                        moduleName={index}
                        onChange={(inView, options) => {
                            itemsVisible[options?.moduleName as number] = inView
                            setItemsVisible([...itemsVisible])
                        }}
                    >
                        <View containerClass={`h-22,item-center,flex-row`}>
                            {item} -- visible:{itemsVisible[index] ? 'visible': 'invisible'}
                        </View>
                    </InView>
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

export default IntersectionObserver;

```

### IOList

#### 属性

- 同List

#### InView

#### 属性

| 属性          | 说明           | 类型                                              | 默认值                   |
|-------------|--------------|-------------------------------------------------|-----------------------|
| moduleName  | 模块名称，可以为模块标识 | `string \|  number \| undefined`                | `--`    |
| onChange    | 可见变化事件       | `(inView: boolean, options?: IOptions) => void` | `--`                  |
