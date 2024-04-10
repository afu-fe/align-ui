import * as React from 'react';
import { View, Text } from 'react-native';

import { useState } from 'react';
import { tailwind } from '../utils/tool';
export interface BadgeProps {
  bgClass?: string;
  textClass?: string;
  count?: number | string;
  overflowCount?: number | string;
  showDot?: boolean;
  children?: React.ReactNode;
}

const _Badge: React.ComponentType<BadgeProps> = ({
  count = 0,
  children,
  showDot = false,
  bgClass = '',
  textClass = '',
  overflowCount = 99,
}) => {
  const [childBox, setChildBox] = useState({
    width: 0,
    height: 0,
  });
  const [badgeBox, setBadgeBox] = useState({
    width: 0,
    height: 0,
  });
  return (
    <View style={[tailwind('relative,min-h-0,min-w-0')]} testID="RNE__Badge__wrap">
      <View
        style={[tailwind('relative,min-h-0,min-w-0')]}
        onLayout={(event) => {
          const { width, height } = event.nativeEvent.layout;
          setChildBox({
            width,
            height,
          });
        }}
      >
        <View
          style={[
            tailwind(
              `${children ? 'absolute' : 'relative'},-top-${
                badgeBox.height / 4
              },,bg-Orange_1,px-2,h-7,rounded-7,flex,fleex-row,item-center,justify-center`,
            ),
            children &&
              badgeBox.width > 0 &&
              childBox.width > 0 &&
              tailwind(`-right-${Math.min(badgeBox.width, childBox.width) / 4}`),
            showDot && tailwind('w-3,h-3,rounded-3,px-0'),
            tailwind(bgClass),
          ]}
          onLayout={(event) => {
            const { width, height } = event.nativeEvent.layout;
            setBadgeBox({
              width,
              height,
            });
          }}
        >
          {!showDot ? (
            <Text
              style={[tailwind(`text-white,text-5.5,${textClass}`)]}
              testID="RNE__Badge_Text_wrap"
            >
              {count > overflowCount ? overflowCount + '+' : count}
            </Text>
          ) : null}
        </View>
        {children}
      </View>
    </View>
  );
};

export { _Badge };
export default _Badge;
