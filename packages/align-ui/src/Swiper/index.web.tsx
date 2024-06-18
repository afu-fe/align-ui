/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import './web/style/index.css';
import React, { useState, useEffect, useRef } from 'react';
import { tailwind } from '../utils/tool';
import Slider from './web/swiper';
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
  const divRef = useRef<HTMLDivElement>(null);
  const cssObj = tailwind(`${containerClass}`);
  const [curIndex, setcurIndex] = useState(index);
  const dataSource = React.Children.toArray(children);
  let width = 0;
  let height = 260;
  useEffect(() => {
    if (divRef.current) {
      width = divRef.current.clientWidth;
      height = divRef.current.clientHeight;
    }
    if (cssObj && cssObj?.width && parseInt(cssObj?.width) > 0) {
      width = parseInt(cssObj?.width);
    }
    if (cssObj && cssObj?.height && parseInt(cssObj?.height) > 0) {
      height = parseInt(cssObj?.height);
    }
    new Slider('#swiper-instance', {
      width: width,
      height: height,
      defaultSlideIndex: index,
      autoPlay: autoplay,
      autoPlayTimeout: time,
      clickWaitTime: 3000,
      dotStyle,
      indicatorDots,
      indicatorColor,
      indicatorActiveColor,
      curSlideFun: (value) => {
        setcurIndex(value);
      },
    });
  }, []);
  return (
    <div
      id="swiper-instance"
      className="swiper"
      style={tailwind(`w-full,h-${height / 2},relative,hidden,${containerClass}`)}
      ref={divRef}
    >
      <ul className="swiper-container">
        {dataSource?.map((item) => (
          <li className="swiper-item">{item}</li>
        ))}
      </ul>
      {/* <button className="swiper-button prev">&lt;</button>
      <button className="swiper-button next">&gt;</button> */}
      <div className="swiper-dots-group">
        {indicatorDots &&
          dataSource?.map((_, index) => (
            <div
              data-index={index}
              style={tailwind(
                `w-4,h-4,rounded-2,mt-0,mb-0,ml-4,mr-4,${indicatorColor},${
                  dotStyle === 'block' ? 'w-8,h-1.5' : ''
                },${index === curIndex ? indicatorActiveColor : ''}`,
              )}
            ></div>
          ))}
      </div>
    </div>
  );
};

export { _Swiper };
export default _Swiper;
