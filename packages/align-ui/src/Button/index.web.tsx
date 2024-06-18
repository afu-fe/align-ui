import React, { useState } from 'react';
import Icon from '../Icon/index.web';
import { tailwind } from '../utils/tool';
import type { IconType } from '../Icon/PropsType';
interface ButtonProps {
  style?: React.CSSProperties;
  containerClass?: string;
  children?: React.ReactNode;
  size?: 'mini' | 'small' | 'middle' | 'large' | 'default';
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'default';
  fill?: 'solid' | 'outline' | 'none';
  disabled?: boolean;
  hoverStyle?: React.CSSProperties;
  hoverStartTime?: number;
  hoverStayTime?: number;
  onClick?: () => void;
  textStr?: string;
  iconType?: IconType; // Assuming type of Icon
  iconSize?: number;
}

const _Button: React.FC<ButtonProps> = ({
  style,
  containerClass = '',
  children,
  size = 'default',
  type = 'default',
  fill = 'solid',
  disabled,
  hoverStyle,
  textStr = '',
  iconType,
  iconSize = 20,
  onClick,
}) => {
  const [isHover, setIsHover] = useState(false);

  const onPressIn = () => {
    if (hoverStyle) {
      setIsHover(true);
    }
  };

  const stopHover = () => {
    if (hoverStyle) {
      setIsHover(false);
    }
  };

  const onPressOut = () => {
    if (hoverStyle && isHover) {
      stopHover();
    }
  };

  const typeMap = {
    primary: {
      containerStyle: 'bg-primary,border-primary',
      textStyle: 'text-white',
    },
    success: {
      containerStyle: 'bg-success,border-success',
      textStyle: 'text-white',
    },
    warning: {
      containerStyle: 'bg-warning,border-warning',
      textStyle: 'text-white',
    },
    danger: {
      containerStyle: 'bg-danger,border-danger',
      textStyle: 'text-white',
    },
    default: {
      containerStyle: 'bg-default,border-default',
      textStyle: 'text-color-title',
    },
  };
  const sizeMap = {
    mini: {
      containerStyle: 'h-12,pl-3.5,pr-3.5,rounded-2',
      textStyle: 'text-6,font-normal,leading-12',
    },
    small: {
      containerStyle: 'h-16,pl-5.5,pr-5.5,rounded-2',
      textStyle: 'text-6,font-normal,leading-16',
    },
    middle: {
      containerStyle: 'h-20,pl-8,pr-8,rounded-2',
      textStyle: 'text-7,font-normal,leading-20',
    },
    large: {
      containerStyle: 'h-24,pl-11,pr-11,rounded-2',
      textStyle: 'text-8,font-normal,leading-24',
    },
    default: {
      containerStyle: 'h-20,pl-8,pr-8,rounded-2',
      textStyle: 'text-7,font-normal,leading-20',
    },
  };
  const fillMap = {
    solid: 'border-0',
    outline: 'border-0.5,border-solid,bg-transparent',
    none: 'border-0,bg-transparent',
  };

  const textHoverStyle = isHover ? { opacity: 0.8 } : {};

  const handlePress = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handlePress}
      onMouseEnter={onPressIn}
      onMouseLeave={onPressOut}
      style={{
        ...tailwind(
          `flex,lex-row,justify-center,item-center,${sizeMap[size]?.containerStyle},${typeMap[type]?.containerStyle}, ${fillMap[fill]}`,
        ),
        ...tailwind(containerClass),
        ...style,
        ...(isHover && hoverStyle ? { ...hoverStyle } : {}),
        ...(disabled ? { opacity: 0.3 } : {}),
        ...textHoverStyle,
      }}
      disabled={disabled}
    >
      {iconType && <Icon type={iconType} size={iconSize} containerClass={'mt-0,mr-2'} />}
      {Array.isArray(children) ? (
        children.map((c: any, i: number) => (
          <span
            key={i}
            style={{
              ...tailwind(
                `text-9,text-color-title,${sizeMap[size]?.textStyle},${typeMap[type]?.textStyle},${textStr}`,
              ),
              ...(fill !== 'solid' &&
                tailwind(`text-${type !== 'default' ? type : 'color-title'}`)),
              ...textHoverStyle,
            }}
          >
            {c}
          </span>
        ))
      ) : ['string', 'number'].indexOf(typeof children) > -1 ? (
        <span
          style={{
            ...tailwind(
              `text-9,text-color-title,${sizeMap[size]?.textStyle},${typeMap[type]?.textStyle},${
                fill === 'solid' ? '' : 'text-color-white'
              },${textStr}`,
            ),
            ...(fill !== 'solid' && tailwind(`text-${type !== 'default' ? type : 'color-title'}`)),
            ...textHoverStyle,
          }}
        >
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export { _Button };
export default _Button;
