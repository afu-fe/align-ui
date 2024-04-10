/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import type { ViewStyle } from 'react-native';
import { extracteTextStyle, noop, tailwind } from '../utils/tool';
import Icon from '../Icon';
import type { IconType } from '../Icon/PropsType';
export interface ButtonState {
  isHover: boolean;
}

export interface ButtonProps {
  containerClass?: string;
  style?: ViewStyle;
  children?: React.ReactNode;
  size?: 'mini' | 'small' | 'middle' | 'large' | 'default';
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'default';
  fill?: 'solid' | 'outline' | 'none';
  disabled?: boolean;
  hoverStyle?: ViewStyle;
  hoverStartTime?: number;
  hoverStayTime?: number;
  onClick?: () => void;
  textStr?: string;
  iconType?: IconType;
  iconSize?: number;
}

class _Button extends React.Component<ButtonProps, ButtonState> {
  static displayName = '_Button';
  static defaultProps = {
    size: 'default',
    type: 'default',
    hoverStyle: { opacity: 0.8 },
    hoverStartTime: 20,
    hoverStayTime: 70,
    iconSize: 20,
    disabled: false,
  };

  $touchable = React.createRef<TouchableOpacity>();

  isTouchEnd = false;
  pressInTimer!: ReturnType<typeof setTimeout>;
  pressOutTimer!: ReturnType<typeof setTimeout>;

  state: ButtonState = {
    isHover: false,
  };

  componentWillUnmount(): void {
    clearTimeout(this.pressOutTimer);
    clearTimeout(this.pressInTimer);
  }

  onPress = (): void => {
    const { disabled, onClick = noop } = this.props;
    !disabled && onClick();
  };

  onPressIn = (): void => {
    const { hoverStartTime, hoverStyle } = this.props;
    this.isTouchEnd = false;
    if (hoverStyle) {
      this.pressInTimer = setTimeout(() => {
        this.setState({ isHover: true }, () => {
          if (this.isTouchEnd) {
            // short press
            this.stopHover();
          }
        });
        clearTimeout(this.pressInTimer);
      }, hoverStartTime);
    }
  };

  stopHover = (): void => {
    const { hoverStayTime } = this.props;
    this.pressOutTimer = setTimeout(() => {
      this.setState({ isHover: false });
      clearTimeout(this.pressOutTimer);
    }, hoverStayTime);
  };

  onPressOut = (): void => {
    const { hoverStyle } = this.props;
    const { isHover } = this.state;
    this.isTouchEnd = true;
    if (hoverStyle && isHover) {
      // long press or error boundary
      this.stopHover();
    }
  };
  typeMap = {
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
  sizeMap = {
    mini: {
      containerStyle: 'h-12,px-3.5,rounded-2',
      textStyle: 'text-6,font-normal,leading-12',
    },
    small: {
      containerStyle: 'h-16,px-5.5,rounded-2',
      textStyle: 'text-6,font-normal,leading-16',
    },
    middle: {
      containerStyle: 'h-20,px-8,rounded-2',
      textStyle: 'text-7,font-normal,leading-20',
    },
    large: {
      containerStyle: 'h-24,px-11,rounded-2',
      textStyle: 'text-8,font-normal,leading-24',
    },
    default: {
      containerStyle: 'h-20,px-3.5,rounded-2',
      textStyle: 'text-7,font-normal,leading-20',
    },
  };
  fillMap = {
    solid: 'border-0',
    outline: 'border-0.5,border-solid,bg-transparent',
    none: 'border-0,bg-transparent',
  };
  render(): JSX.Element {
    const {
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
    } = this.props;
    const textHoverStyle = this.state.isHover ? extracteTextStyle(hoverStyle) : {};
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={this.onPress}
        onLongPress={this.onPress}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        ref={this.$touchable}
        accessibilityRole="button"
        disabled={disabled}
        testID="RNE__Button__wrap"
        style={[
          tailwind(
            `flex-row,justify-center,item-center,${this.sizeMap[size]?.containerStyle},${this.typeMap[type]?.containerStyle}, ${this.fillMap[fill]}`,
          ),
          tailwind(containerClass),
          style,
          this.state.isHover && tailwind('bg-opacity-80'),
          disabled && tailwind('bg-opacity-30'),
        ]}
      >
        {iconType ? <Icon type={iconType} size={iconSize} containerClass={'mt-0,mr-2'} /> : null}
        {Array.isArray(children) ? (
          children.map((c: any, i: number) => (
            <Text
              key={i}
              style={[
                tailwind(
                  `text-9,text-color-title,${this.sizeMap[size]?.textStyle},${this.typeMap[type]?.textStyle},${textStr}`,
                ),
                fill !== 'solid' && tailwind(`text-${type !== 'default' ? type : 'color-title'}`),
                textHoverStyle,
              ]}
            >
              {c}
            </Text>
          ))
        ) : ['string', 'number'].indexOf(typeof children) > -1 ? (
          <Text
            style={[
              tailwind(
                `text-9,text-color-title,${this.sizeMap[size]?.textStyle},${
                  this.typeMap[type]?.textStyle
                },${fill === 'solid' ? '' : 'text-color-white'},${textStr}`,
              ),
              fill !== 'solid' && tailwind(`text-${type !== 'default' ? type : 'color-title'}`),
              textHoverStyle,
            ]}
          >
            {children}
          </Text>
        ) : (
          children
        )}
      </TouchableOpacity>
    );
  }
}
export { _Button };
export default _Button;
