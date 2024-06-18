---
title: Alert 警告提示
nav:
  title: 组件
  path: /component
group:
  title: 通用组件
  path: /general
  order: 1
---

# IndexSidebar 字母侧边栏组件

右侧展示字母列表，点击字母跳转到对应字母的页面。

### 功能

- 右侧展示字母列表，点击字母跳转到对应字母的页面。
- 左侧列表对应的字母滚动吸顶。

### 基础实例

```jsx mdx:preview&background=#bebebe29
import {Image, IndexSidebar, View} from "align-ui";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";

const Demo = () => {
    const [dataSource, setDataSource] = useState([])
    useEffect(() => {
        axios.get('/api/search_card/?pid=90100024&chl=zhaoche&is_base_exp=0').then(res => {
            let result = res?.data?.result?.value
            console.log(result)
            const datas = []
            let preLetter = ""
            let dataIndex = 0
            result = result?.sort((a, b) => a.firstletter.charCodeAt(0) - b.firstletter.charCodeAt(0))
            result?.forEach((item, index) => {
                if(item?.firstletter !== preLetter) {
                    preLetter = item?.firstletter
                    if(index !== 0) {
                        dataIndex++;
                    }
                    datas.push({
                        title: item?.firstletter,
                        sectionIndex: dataIndex,
                        data: [JSON.stringify(item)]
                    })
                } else {
                    datas[dataIndex].data.push(JSON.stringify(item))
                }
            })
            setDataSource(datas)
        })
    }, []);

    const _renderItem = useCallback((item) => {
        let itemObj = {}
        try {
            itemObj = JSON.parse(item)
        } catch (e) {}
        return(
            <View containerClass="h-20,bg-grey-20,flex-row,item-center,px-8">
                <Image src={itemObj.logo} containerClass={'w-16,h-16,mr-4'}/> {itemObj?.name}
            </View>
        )
    }, [])

    return (
        <IndexSidebar
            dataSource={dataSource}
            renderItem={({item, index}) => {
                return _renderItem(item, index)
            }}
            renderSectionHeader={({section: {title}}) => {
                return (
                    <View containerClass={'h-20,bg-grey,flex-row,item-center,px-8'}>
                        {title}
                    </View>
                )
            }}
        />
    )
}

export default Demo;
```

### Alert

#### 属性

| 属性 | 说明            | 类型                                                                    | 默认值 |
| --- |---------------|-----------------------------------------------------------------------| --- |
| dataSource | 数据源           | `{data: string[], title: string, sectionIndex: number}[]`             | `--` |
| renderItem | 自定义关闭 Icon    | `(item, index) => ReactNode`                                          | `--` |
| renderSectionHeader | 渲染吸顶标题        | `(info: { section: SectionListData<string, SectionT> }) => ReactNode` | `--` |
| itemHeight | 条目高度          | `number`                                                              | `false` |
| titleHeight | 吸顶标题高度        | `number`                                                              | `--` |
| sideLetterPopperContainerClass | 侧边栏字母长按提示容器样式 | `string`                                                              | `--` |
| sideLetterPopperTextClass | 侧边栏字母长按提示文字样式 | `string`                                                              | `--` |
| sideLetterPopperAngleClass | 侧边栏字母长按提示三角样式 | ` string`                                                             | `--` |
| letterContainerClass | 侧边栏字母整体容器样式   | ` string`                                                             | `--` |    
| letterItemClass | 侧边栏字母容器样式     | ` string`                                                             | `--` |
| letterTextClass | 侧边栏字母文字样式     | `strign`                                                              | `--` |

