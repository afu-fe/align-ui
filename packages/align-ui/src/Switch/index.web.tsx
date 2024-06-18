import React, { memo, useState, useRef, useEffect } from 'react';
import type { FC } from 'react';
import { tailwind } from '../utils/tool';
export interface SwitchProps {
  // 自定义switch接口
  /**
   * @description switch 是否开启(像素)
   */
  value?: Boolean;
  /**
   * @description switch 打开时的背景色
   * @default #409EFF
   */
  switchTrueColor?: String;
  /**
   * @description switch 关闭时的背景色
   * @default #C0CCDA
   */
  switchFalseColor?: String;
  disabled?: Boolean;
}
// 控制开关的  true(在左边 为 关闭)  false(圆球在右边  为开启)
const _Switch: FC<SwitchProps> = memo((props) => {
  const { disabled, switchTrueColor = 'switchT', switchFalseColor = 'switchF', value = 0 } = props;
  const [isActive, setIsActive] = useState(false);
  const refs = useRef<HTMLDivElement>(null);
  // 圆球点击事件
  const ballClick = () => {
    if (isActive === false) {
      if (refs.current && refs.current.style) {
        refs.current.style.transform = `translateX(16px)`;
        setIsActive(true);
      }
    } else {
      if (refs.current && refs.current.style) {
        refs.current.style.transform = `translateX(1px)`;
        setIsActive(false);
      }
    }
  };
  useEffect(() => {
    if (value) {
      setTimeout(() => {
        ballClick();
      }, 0);
    }
  }, [value]);
  return (
    <div>
      <div
        style={tailwind(
          `w-17,h-9,rounded-9,bg-${isActive ? switchTrueColor : switchFalseColor}${
            disabled ? '-50' : '-100'
          }`,
        )}
        onClick={() => !disabled && ballClick()}
      >
        <div style={tailwind('w-8,h-8,rounded-5,bg-white,relative,top-0.5')} ref={refs}></div>
      </div>
    </div>
  );
});

export { _Switch };
export default _Switch;
