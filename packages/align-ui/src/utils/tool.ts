/*
 * @Author: cuiwujie 
 * @Date: 2024-02-23 13:44:35
 * @LastEditors: cuiwujie 
 * @LastEditTime: 2024-03-01 10:17:31
 * @FilePath: /afu-ui/packages/core/src/utils/tool.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Platform, StyleSheet } from 'react-native';
import type { ViewStyle, TextStyle } from 'react-native';

import * as React from 'react';

import { autoTailwind } from '../cssTool';
import * as colors from './colors';
// @see https://facebook.github.io/react-native/docs/layout-props.html
// @see https://facebook.github.io/react-native/docs/view-style-props.html
// @todo According to the source code of ScrollView, ['alignItems','justifyContent'] should be set to contentContainerStyle

const TEXT_STYLE_REGEX =
  /color|font.*|text.*|letterSpacing|lineHeight|includeFontPadding|writingDirection/;

export const extracteTextStyle = (style?: ViewStyle): TextStyle => {
  const flattenStyle = StyleSheet.flatten(style);
  const textStyle: TextStyle & { [key: string]: any } = {};
  if (flattenStyle) {
    Object.keys(flattenStyle).forEach((key: string) => {
      if (TEXT_STYLE_REGEX.test(key)) {
        // @ts-ignore
        textStyle[key as keyof TextStyle] = flattenStyle[key] as any;
      }
    });
  }
  return textStyle;
};

export const omit = (obj: any = {}, fields: string[] = []): { [key: string]: any } => {
  const shallowCopy = { ...obj };
  fields.forEach((key) => {
    delete shallowCopy[key];
  });
  return shallowCopy;
};

// eslint-disable-next-line
export const noop = (..._args: any[]): void => {};

export const useUpdateEffect = (effect: React.EffectCallback, deps: React.DependencyList) => {
  const isMounted = React.useRef(false);

  // for react-refresh
  React.useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  React.useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
};

export const tailwind = autoTailwind({
  defaultStyles: {},
  extend: {
    color: colors.colorsPalette,
  },
  Platform,
});