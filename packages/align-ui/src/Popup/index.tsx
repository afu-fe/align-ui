import * as React from 'react';
import { Animated,  Easing } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { useEffect, useState, useRef, useCallback } from 'react';
// import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { tailwind } from '../utils/tool';
import Overlay from '../Overlay/index'
import { getBorderRadius, getTransform, getPosition, PopupPositionMap, getNextZIndex } from './fun'
import type { PopupPosition, State } from './fun'
export interface SwitchProps {
  visible?: boolean;
  overlay?: boolean;
  duration?: number;
  onPressOverlay?: () => void;
  position?: PopupPosition;
  round?: number;
  safeAreaInsetBottom?: boolean;
  safeAreaInsetTop?: boolean;
  style?: StyleProp<ViewStyle>;
  containerClass?: string;
  children?: React.ReactNode;
  closeOnPressOverlay?: boolean;
  lazyRender?: boolean;
  destroyOnClosed?: boolean;
  onOpen?:() => void;
  onOpened?:() => void;
  onClose?:() => void;
  onClosed?:() => void;
}


const _Popup: React.FC<SwitchProps> = ({
  visible = false,
  overlay = true,
  duration = 300,
  position = 'center',
  onPressOverlay,
  round = 0,
  safeAreaInsetBottom = false,
  closeOnPressOverlay = true,
  safeAreaInsetTop = false,
  lazyRender = true,
  destroyOnClosed = false,
  style,
  containerClass = '',
  children,
  onOpen = () => {},
  onOpened= () => {},
  onClose= () =>{},
  onClosed= () => {},
}) => {
  const [state, setState] = useState<State>({
    visible,
    zIndex: getNextZIndex(),
    lazyRender,
  })
  const [overlayVisible, setOverlayVisible] = useState(visible)
  const MountedRef = useRef(false)
  // const insets = useSafeAreaInsets()
  const fadeAnim = useRef(
    new Animated.Value(getPosition(visible, position)),
  ).current;
  const fadeInstance = useRef<Animated.CompositeAnimation | null>(null)
  /** 点击遮罩层 */
  const onPressOverlayFn = useCallback(() => {
    if (closeOnPressOverlay && onPressOverlay) {
      // 关闭弹层
      onPressOverlay()
    }
  }, [closeOnPressOverlay, onPressOverlay])
  // 监听状态变化，执行动画
  useEffect(() => {
    if (visible) {
      // 弹出弹出，立即响应
      setState({
        visible,
        zIndex: getNextZIndex(),
        lazyRender: false,
      })
    }

    // 遮罩层状态实时显示
    setOverlayVisible(visible)

    if (MountedRef.current) {
      fadeAnim.setValue(getPosition(!visible, position))
      if (visible) {
        onOpen()
      } else {
        onClose()
      }
      fadeInstance.current = Animated.timing(
        fadeAnim, // 动画中的变量值
        {
          toValue: getPosition(visible, position),
          duration: duration,
          useNativeDriver: true,
          easing: visible
            ? Easing.bezier(0.075, 0.82, 0.165, 1.0)
            : Easing.bezier(0.55, 0.055, 0.675, 0.19),
        },
      )

      fadeInstance.current.start(({ finished }) => {
        if (finished) {
          fadeInstance.current = null
          if (!visible) {
            setState({ visible, lazyRender: destroyOnClosed, zIndex: state.zIndex })
            onClosed()
          } else {
            onOpened()
          }
        }
      })
    }

    return () => {
      // 停止动画
      if (fadeInstance.current) {
        fadeInstance.current.stop()
        fadeInstance.current = null
      }
    }
  }, [
    destroyOnClosed,
    duration,
    fadeAnim,
    position,
    visible,
  ])
  // 初始化好组件
  useEffect(() => {
    MountedRef.current = true
  }, [])
  return (
    <>
      {overlay && visible ? (
        <Overlay
          visible={overlayVisible}
          zIndex={state.zIndex}
          duration={duration}
          onPress={onPressOverlayFn}
        />
      ) : null}
      <Animated.View
        style={[
          tailwind(`relative,h-0,z-9999,hidden,${containerClass}`),
          getBorderRadius(position, round),
          {
            paddingBottom: visible && safeAreaInsetBottom ? 44 : 0,
            paddingTop: visible && safeAreaInsetTop ? 34 : 0,
            zIndex: state.zIndex
          },
          style,
          visible ? {
            ...tailwind('absolute,h-auto,bg-white'),
            ...getTransform(position, fadeAnim),
            ...PopupPositionMap[position],
          } : null,
        ]}
        testID="RNE__Switch__wrap"
        pointerEvents={position !== 'center' ? undefined : 'box-none'}>
        {children}
      </Animated.View>
    </>
  );
};

export { _Popup };
export default _Popup;
