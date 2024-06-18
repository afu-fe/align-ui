import * as React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import type {  ViewStyle, TextStyle } from 'react-native';
import {  useState, useEffect } from 'react';
import { tailwind } from '../utils/tool';
export interface CheckboxProps {
  onChange?: (params: boolean) => void;
  disabled?: boolean;
  textPosition?:string;
  label?:string;
  iconSize?: number;
  checked?: boolean;
  checkedColor?: string;
  activeIconUrl?:string;
  inactiveIconUrl?: string;
  labelTextClass?: string;
  labelTextStyle?: TextStyle;
  iconClass?: string;
  iconStyle?: ViewStyle;
  labelDisabled?: boolean;
  iconDisabled?: boolean;
  containerClass?:string;
  containerStyle?:string;
}

const _Checkbox: React.ComponentType<CheckboxProps> = ({
  disabled,
  onChange,
  textPosition = 'right',
  label = '',
  iconSize = 16,
  checked = false,
  checkedColor = 'primary',
  labelTextClass = '',
  labelTextStyle={},
  iconClass = '',
  iconStyle = {},
  labelDisabled = false,
  iconDisabled = false,
  activeIconUrl = '',
  inactiveIconUrl = '',
  containerClass = '',
  containerStyle = {},
}) => {
  const [active, setChecked] = useState(checked);
  useEffect(() => {
    setChecked(checked)
  }, [checked]);
  const renderText = () => {
    if (label) {
      return (
        <TouchableOpacity
          onPress={() => {
            if (!disabled && !labelDisabled) {
              if (onChange){
                setChecked(!active);
                const v = !active;
                onChange(v);
              }
            }
          }}
          activeOpacity={1}
          style={
            tailwind('flex-shrink')
          }
        >
          <Text style={[
            tailwind(`flex-row,item-center,ml-4,leading-10,text-7,regular,${labelTextClass}`),
            labelTextStyle
          ]}
          numberOfLines={3}
          >{label}</Text>
        </TouchableOpacity>
      );
    }
  };
  const renderIcon = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (!disabled &&!iconDisabled) {
            if (onChange){
              setChecked(!active);
              const v = !active;
              onChange(v);
            }
          }
        }}
        activeOpacity={1}
        style={[
          tailwind(`w-${iconSize/2},h-${iconSize/2},rounded-1,hidden,flex-row,item-center,justify-center,${iconClass}`),
          !active && tailwind('border-0.6,border-nochecked'),
          active && tailwind(`bg-${checkedColor},bg-[${checkedColor}]`),
          iconStyle,
        ]}
      >
        {
          active ? (
            <Image
              testID="RNE__image__svg"
              source={{ uri: activeIconUrl || 'https://z.autoimg.cn/sou/auto-ui/checkbox.png' }}
              style={{
                width: 10 / 16 * iconSize,
                height: 7 / 16 * iconSize,
              }}
            />
          ) : null
        }
        {
          !active && inactiveIconUrl != '' ? (
            <Image
              testID="RNE__image__svg"
              source={{ uri: inactiveIconUrl }}
              style={{
                width: 10 / 16 * iconSize,
                height: 10 / 16 * iconSize,
              }}
            />
          ) : null
        }
      </TouchableOpacity>
    )
  }
  const renderChildren = () => {
    if (textPosition === 'left') {
      return (
        <>
          {renderText()}
          {renderIcon()}
        </>
      );
    } else {
      return (
        <>
          {renderIcon()}
          {renderText()}
        </>
      );
    }
  };
  return (
    <View
      testID="RNE__Checkbox__wrap"
    >
      <View
        style={[
          tailwind(`flex-row,item-center,${containerClass}`),
          disabled && tailwind('opacity-40'),
          containerStyle
        ]}
      >
        { renderChildren() }
      </View>
    </View>
  );
};

export { _Checkbox };
export default _Checkbox;
