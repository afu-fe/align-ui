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
