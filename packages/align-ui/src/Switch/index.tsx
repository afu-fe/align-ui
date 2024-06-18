import * as React from 'react';
import { Animated, TouchableOpacity } from 'react-native';

import { useEffect, useState } from 'react';
import { tailwind } from '../utils/tool';
export interface SwitchProps {
  value?: number;
  onValueChange?: (params: boolean) => void;
  onPress?: () => void;
  disabled?: boolean;
  switchTrueColor?: string;
  switchFalseColor?: string;
}

const _Switch: React.ComponentType<SwitchProps> = ({
  value,
  disabled,
  onValueChange,
  switchTrueColor = 'switchT',
  switchFalseColor = 'switchF',
}) => {
  const [toggleOn, setToggleOn] = useState(false);
  const [toggerPostion] = useState(new Animated.Value(1));
  const [scaleBg] = useState(new Animated.Value(1));
  useEffect(() => {
    if (value) {
      setToggleOn(true);
      Animated.timing(scaleBg, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start();
      Animated.spring(toggerPostion, {
        toValue: 16,
        useNativeDriver: true,
      }).start();
    }
  }, [value]);
  function toggleSwitch() {
    if (toggleOn) {
      setToggleOn(false);
      Animated.spring(toggerPostion, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
      Animated.timing(scaleBg, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
      onValueChange && onValueChange(false);
    } else {
      setToggleOn(true);
      Animated.spring(toggerPostion, {
        toValue: 16,
        useNativeDriver: true,
      }).start();
      Animated.timing(scaleBg, {
        toValue: 0.0,
        duration: 400,
        useNativeDriver: true,
      }).start();
      onValueChange && onValueChange(true);
    }
  }
  return (
    <TouchableOpacity
      style={[
        tailwind(
          `w-17,h-9,rounded-9,bg-${
            disabled ? (value ? switchTrueColor + '-50' : 'transparent') : switchTrueColor
          }`,
        ),
      ]}
      onPress={() => {
        if (!disabled) {
          toggleSwitch();
        }
      }}
      activeOpacity={1}
      testID="RNE__Switch__wrap"
    >
      <Animated.View
        style={[
          tailwind(`flex-1,bg-${switchFalseColor}-${disabled ? 50 : 100},rounded-9`),
          { transform: [{ scale: scaleBg }] },
        ]}
      ></Animated.View>
      <Animated.View
        style={[tailwind('w-8,h-8,rounded-5,bg-white,absolute,top-0.5'), { left: toggerPostion }]}
      ></Animated.View>
    </TouchableOpacity>
  );
};

export { _Switch };
export default _Switch;
