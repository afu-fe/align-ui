import React, { useState, useEffect } from 'react';
import Icon from '../Icon/index.web';
import Image from '../Image/index.web';
import type { IconType } from '../Icon/PropsType';
import { tailwind } from '../utils/tool';

export type ToastType = 'success' | 'info' | 'warning' | 'error';

interface ToastProps {
  content: string;
  duration?: number;
  innerContainer?: string;
  innerWrap?: string;
  textCss?: string;
  mask?: boolean;
  type?: string;
  image?: string;
  iconType?: IconType;
  onClose?: () => void;
  onAnimationEnd?: () => void;
}

const _Toast: React.FC<ToastProps> = ({
  content = '',
  duration = 3,
  textCss = '',
  innerWrap = '',
  iconType,
  image = '',
  onAnimationEnd,
  onClose,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (content !== '') {
      setVisible(true);
    }
    const timer = setTimeout(() => {
      setVisible(false);
      if (onAnimationEnd) {
        onAnimationEnd();
      }
    }, duration * 1000);

    return () => {
      clearTimeout(timer);
      if (onClose) {
        onClose();
      }
    };
  }, [content, image, iconType]);

  return (
    <div
      style={{
        display: visible ? 'flex' : 'none',
        ...tailwind(
          'absolute,top-0,left-0,bottom-0,right-0,bg-transparent,justify-center,item-center,z-9999',
        ),
      }}
    >
      <div
        style={tailwind(
          `flex,flex-col,item-center,min-w-50,bg-black-80,${innerWrap},${
            iconType || image ? 'p-7.5,rounded-3.5' : 'rounded-1.5,pl-4.5,pr-4.5,pt-7.5,pb-7.5'
          }`,
        )}
      >
        {iconType ? <Icon type={iconType} size={40} containerClass={'mt-0'} /> : null}
        {image ? <Image src={image} containerClass={'w-20,h-20'} /> : null}
        {React.isValidElement(content) ? (
          content
        ) : (
          <span style={tailwind(`text-7.5,text-white,${textCss}`)}>{content}</span>
        )}
      </div>
    </div>
  );
};
export { _Toast };
export default _Toast;
