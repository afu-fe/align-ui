---
title: Swiper 轮播图
nav:
  title: 组件
  path: /component
group:
  title: 通用组件
  path: /general
  order: 1
---

# Swiper 轮播图

最基础的轮播图，可承载图片。

### 基础示例

<!--DemoStart-->

```jsx mdx:preview&background=#bebebe29
import React from 'react';
import { Swiper, SwiperItem, View, Image } from 'align-ui';

const SwiperDemo = () => {
  const data = [
    {
      url: 'https://z.autoimg.cn/sou/user_increase/car001.jpg',
      onClick: () => {
        console.log('你好！align-ui');
      },
    },
    { url: 'https://z.autoimg.cn/sou/user_increase/car002.png' },
    { url: 'https://z.autoimg.cn/sou/user_increase/car003.png' },
  ];
  return (
    <>
      {/* <Swiper>
          <SwiperItem>
            <View>1</View>
          </SwiperItem>
          <SwiperItem>
            <View>2</View>
          </SwiperItem>
          <SwiperItem>
            <View>3</View>
          </SwiperItem>
        </Swiper> */}
      <Swiper
        containerClass={'h-100,mt-10'}
        indicatorColor={'bg-green'}
        indicatorActiveColor={'bg-yellow'}
      >
        {data?.map((item) => (
          <SwiperItem>
            <Image
              src={item.url}
              containerClass={'w-full,h-100,border-0.5,border-black,border-style'}
            />
          </SwiperItem>
        ))}
      </Swiper>
    </>
  );
};
export default SwiperDemo;
```

<!--End-->

### Swiper

### 属性

| 属性                 | 说明                                   | 类型    | 默认值               |
| -------------------- | -------------------------------------- | ------- | -------------------- |
| dataSource           | 数据源                                 | Array   | [ ]                  |
| containerClass       | 轮播样式设置                           | string  | 屏幕宽度，高度为 260 |
| time                 | 执行时间                               | Number  | 3000（3s）           |
| autoplay             | 是否开启定时器                         | Boolean | true                 |
| dotStyle             | 圆点类型 ( dot : 圆点， block : 方块 ) | String  | dot                  |
| indicatorDots        | 是否显示面板指示点                     | Boolean | true                 |
| indicatorColor       | 指示点颜色                             | String  | 'bg-black-30'        |
| indicatorActiveColor | 当前选中的指示点颜色                   | String  | 'bg-black'           |
