import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { ReactNode } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import type { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { tailwind } from '../utils/tool';
export type dotType = 'dot' | 'block';
export interface SwiperProps {
  containerClass?: string;
  /** 播放时间 */
  time?: number;
  /** 是否开启自动播放 */
  autoplay?: boolean;
  /** 指示点样式 dot: 圆点  block: 方块 */
  dotStyle?: dotType;
  /** 初始位置 */
  index?: number;
  /** 是否显示指示点 */
  indicatorDots?: boolean;
  /** 指示点颜色 */
  indicatorColor?: string;
  /** 当前选中的指示点颜色 */
  indicatorActiveColor?: string;
  /** 子元素 */
  children?: React.ReactNode;
}
const _Swiper = (porps: SwiperProps) => {
  const {
    containerClass,
    time = 6000,
    autoplay = true,
    dotStyle = 'dot',
    index = 0,
    indicatorDots = true,
    indicatorColor = 'bg-black-30',
    indicatorActiveColor = 'bg-black',
    children,
  } = porps;
  let [curIndex, setCurIndex] = useState(index);
  let timer = useRef<ReturnType<typeof setTimeout> | undefined>();
  let [width, setWidth] = useState(0);
  let [height, setHeight] = useState(260);
  const scrollToRef: any = useRef();
  const scrollWin: any = useRef();
  const dataSource = React.Children.toArray(children);
  const cssObj = tailwind(`${containerClass}`);
  // 设置初始变量
  const onContentSizeChange = () => {
    if (scrollToRef && scrollToRef.current && index !== 0) {
      setCurIndex(index);
      scrollToRef.current.scrollTo({ x: width * index, y: 0, animated: false });
    } else if (scrollToRef && scrollToRef.current && index === 0) {
      setCurIndex(index);
      scrollToRef.current.scrollTo({ x: dataSource.length * width, y: 0, animated: false });
    }
  };
  // 自动播放
  const autoPlay = useCallback(() => {
    clearInterval(timer.current as unknown as number);
    timer.current = setInterval(() => {
      let index = curIndex + 1;
      if (curIndex === dataSource.length - 1) {
        index = 0;
        setCurIndex(0);
      } else {
        setCurIndex(curIndex + 1);
      }
      scrollToRef.current.scrollTo({ x: width * index, y: 0, animated: index != 0 });
    }, time);
  }, [curIndex]);

  // 开启播放
  useEffect(() => {
    if (autoplay) autoPlay();
  }, [autoPlay]);

  useEffect(() => {
    if (scrollWin?.current?.clientWidth) {
      setWidth(scrollWin?.current?.clientWidth);
    }
    if (cssObj && cssObj?.width && parseInt(cssObj?.width) > 0) {
      setWidth(cssObj?.width / 2);
    }
    if (scrollWin?.current?.clientHeight) {
      setHeight(scrollWin?.current?.clientHeight);
    }
    if (cssObj && cssObj?.height && parseInt(cssObj?.height) > 0) {
      setHeight(cssObj?.height / 2);
    }
    return () => {
      // 页面离开停止播放
      clearInterval(timer.current as unknown as number);
    };
  }, []);
  // 开始拖拽终止定时器
  const onScrollBeginDrag = () => {
    if (autoplay) {
      clearInterval(timer.current as unknown as number);
      // setCurIndex(0);
    }
  };

  // 停止拖拽开启定时器
  const onScrollEndDrag = () => {
    if (autoplay) autoPlay();
  };

  const onMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    e.persist();
    let offSetX = e.nativeEvent.contentOffset.x;
    let mentWidth = e.nativeEvent.layoutMeasurement.width;
    let page = offSetX / mentWidth;
    // 第一张图片
    if (page === 0 && offSetX <= 0) {
      setCurIndex(dataSource.length - 1);
      scrollToRef.current.scrollTo({ x: dataSource.length * width, y: 0, animated: false }); // 让 ScrollView 定位到最后一张图片
    }
    // 最后一张图片
    if (page === dataSource.length) {
      setCurIndex(0);
      scrollToRef.current.scrollTo({ x: 0, y: 0, animated: false });
    } else {
      setCurIndex(page);
    }
  };

  // 点击原点跳转
  const onClickDot = (index: number) => {
    setCurIndex(index);
    scrollToRef.current.scrollTo({ x: width * index, y: 0, animated: true });
  };

  return (
    <View
      style={tailwind(`w-full,h-${height / 2},relative,hidden,${containerClass}`)}
      ref={scrollWin}
    >
      <ScrollView
        ref={scrollToRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onScrollBeginDrag={onScrollBeginDrag}
        onScrollEndDrag={onScrollEndDrag}
        onMomentumScrollEnd={onMomentumScrollEnd}
        onContentSizeChange={onContentSizeChange}
      >
        {[...dataSource, dataSource[0]].map((item: React.ReactNode, index: number) => {
          return (
            <View key={index} style={tailwind(`w-${width / 2},h-${height / 2},${containerClass}`)}>
              {item}
            </View>
          );
        })}
      </ScrollView>
      {indicatorDots ? (
        <View style={[tailwind(`w-full,flex-row,justify-center,absolute,bottom-11`)]}>
          {React.Children.toArray(children).map((_: ReactNode, index: number) => {
            return (
              <TouchableOpacity
                onPress={onClickDot.bind(this, index)}
                key={index}
                style={[
                  tailwind(`w-4,h-4,rounded-2,mt-0,mb-0,ml-4,mr-4,${indicatorColor}`),
                  dotStyle === 'block' && tailwind('w-8,h-1.5'),
                  index === curIndex && tailwind(indicatorActiveColor),
                ]}
              />
            );
          })}
        </View>
      ) : null}
    </View>
  );
};

export { _Swiper };
export default _Swiper;
