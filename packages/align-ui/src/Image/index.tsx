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
import { Image, StyleSheet } from 'react-native';

import type { ImageSourcePropType, ImageResolvedAssetSource, ImageStyle } from 'react-native';
import { useCallback, useEffect, useRef, useState } from 'react';

import { omit, tailwind } from '../utils/tool';
import type { ClickableProps } from '../hooks/PropsType';

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

export interface ImageProps {
  style?: ImageStyle;
  src: string;
  containerClass?: string;
  resizeMode?: 'cover'| 'contain'| 'stretch'| 'repeat'| 'center';
  onError?: (event: EventError) => void;
  onLoad?: (event: EventLoad) => void;
  svg?: boolean;
}

const omitProp = (props: any) => {
  return omit(props, ['source', 'src', 'onLoad', 'onError', 'onLayout', 'style']);
};

const _Image: React.ComponentType<ImageProps & ClickableProps> = (
  props: ImageProps = {
    src: '',
    resizeMode: 'cover',
  },
) => {
  const ref = useRef({
    hasLayout: false,
  });

  const [ratio, setRatio] = useState(0);
  const newProps = props;
  const { containerClass = '', style, src, resizeMode = 'cover', onLoad, onError } = newProps;

  const _onError = useCallback(() => {
    if (!onError) return;
    onError({
      detail: { errMsg: 'something wrong' },
    });
  }, [onError]);

  const _onLoad = useCallback((): void => {
    if (!onLoad) return;
    if (typeof src === 'string') {
      Image.getSize(
        src as string,
        (width: number, height: number) => {
          onLoad({
            detail: { width, height },
          });
        },
        () => {
          onLoad({
            detail: { width: 0, height: 0 },
          });
        },
      );
    } else {
      const iras: ImageResolvedAssetSource = Image.resolveAssetSource(
        typeof src === 'string' ? { uri: src } : src,
      );
      const { width, height }: { width: number; height: number } = iras || { width: 0, height: 0 };
      onLoad({
        detail: { width, height },
      });
    }
  }, [onLoad]);

  const onLayout = (): void => {
    const flattenStyle = StyleSheet.flatten(style) || {};
    if (typeof flattenStyle.width === 'string') {
      if (ref.current.hasLayout) return;
    }
    if (ratio) {
      ref.current.hasLayout = true;
    }
  };

  const loadImg = useCallback(
    (props: ImageProps): void => {
      if (typeof src === 'string') {
        Image.getSize(props.src, (width, height) => {
          if (ref.current.hasLayout) return;
          setRatio(height / width);
        });
      } else {
        const source = typeof props.src === 'string' ? { uri: props.src } : props.src;
        const { width, height }: { width: number; height: number } = Image.resolveAssetSource(
          source,
        ) || {
          width: 1,
          height: 1,
        };
        if (ref.current.hasLayout && !!ratio) return;
        setRatio(height / width);
      }
    },
    [src, ref],
  );

  useEffect(() => {
    ref.current.hasLayout = false;
    loadImg(props);
  }, [props.src, ref]);
  // The parameter passed to require mpxTransformust be a string literal
  const source: ImageSourcePropType = typeof src === 'string' ? { uri: src } : src;

  const restImageProps = omitProp(newProps);

  return (
    <Image
      testID="image"
      source={source}
      resizeMode={resizeMode}
      onError={_onError}
      onLoad={_onLoad}
      onLayout={onLayout}
      style={[
        {
          width: 300,
          height: 225,
        },
        tailwind(containerClass),
        style,
      ]}
      {...restImageProps}
    />
  );
};

export { _Image };
export default _Image;
