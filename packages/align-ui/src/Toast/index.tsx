/**
 * ✔ src
 * ✘ lazy-load
 * ✔ onError(binderror)
 * ✔ onLoad(bindload)
 * ✘ onClick
 * ✔ DEFAULT_SIZE
 *
 * @warn Pass require(LOCAL IMAGE) to SRC, otherwise a string-type parameter.
 * @warn The width/height would be undefined in onLoad.
 * @warn Avoid using HTTP source image.
 * @warn Image.resolveAssetSource 会造成重复请求
 * @warn 宽高为 0 的时候，不触发 onLoad，跟小程序不同
 */
import * as React from 'react';
import { View, Text, Animated } from 'react-native';
import type { ViewStyle } from 'react-native';

import { useEffect, useState } from 'react';
import Icon from '../Icon';
import Image from '../Image';
import type { IconType } from '../Icon/PropsType';
import { tailwind } from '../utils/tool';

export type EventError = {
  detail: {
    errMsg: string;
  };
};

export type EventLoad = {
  detail: {
    width: number;
    height: number;
  };
};

export interface ToastProps {
  content: string;
  duration?: number;
  innerContainer?: string;
  innerWrap?: string;
  textCss?: string;
  style?: ViewStyle;
  mask?: boolean;
  type?: string;
  image?: string;
  iconType?: IconType;
  onClose?: () => void;
  onAnimationEnd?: () => void;
}

const _Toast: React.ComponentType<ToastProps> = ({
  innerContainer,
  innerWrap,
  style,
  content = '',
  mask,
  iconType,
  image,
  onAnimationEnd,
  duration = 3,
  onClose,
  textCss,
}) => {
  const [fadeAnim] = useState(new Animated.Value(0)); // 初始化动画值
  let anim: Animated.CompositeAnimation | null;
  useEffect(() => {
    const timing = Animated.timing;
    if (anim) {
      anim = null;
    }
    const animArr = [
      timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.delay(duration * 1000),
    ];
    if (duration > 0) {
      animArr.push(
        timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      );
    }
    anim = Animated.sequence(animArr);
    anim.start(() => {
      if (duration > 0) {
        anim = null;
        if (onAnimationEnd) {
          onAnimationEnd();
        }
      }
    });
    return () => {
      if (anim) {
        anim.stop();
        anim = null;
      }
      if (onClose) {
        onClose();
      }
    };
  }, [content, image, iconType]);
  if (content === '') return null;
  return (
    <View
      style={[
        tailwind(
          'absolute,top-0,left-0,bottom-0,right-0,bg-transparent,justify-center,item-center,z-9999',
        ),
        style,
      ]}
      pointerEvents={mask ? undefined : 'box-none'}
    >
      <View style={[tailwind(`bg-transparent,${innerContainer}`)]}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <View
            style={tailwind(
              `item-center,min-w-50,bg-black-80,${innerWrap},${
                iconType ? 'p-7.5,rounded-3.5' : 'rounded-1.5,px-4.5,py-7.5'
              }`,
            )}
          >
            {iconType ? <Icon type={iconType} size={40} containerClass={'mt-0'} /> : null}
            {image ? <Image src={image} containerClass={'w-20,h-20'} /> : null}
            {React.isValidElement(content) ? (
              content
            ) : (
              <Text style={tailwind(`text-7.5,text-white,${textCss}`)}>{content}</Text>
            )}
          </View>
        </Animated.View>
      </View>
    </View>
  );
};

export { _Toast };
export default _Toast;
