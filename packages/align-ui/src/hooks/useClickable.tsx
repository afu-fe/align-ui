import { useEffect, useRef, useState } from 'react'
import type { GestureResponderEvent } from 'react-native'
import { PanResponder } from 'react-native'

import { omit, tailwind } from '../utils/tool'

export const clickableHandlers: Array<string> = [
  'onStartShouldSetResponder',
  'onMoveShouldSetResponder',
  'onResponderEnd',
  'onResponderGrant',
  'onResponderReject',
  'onResponderMove',
  'onResponderRelease',
  'onResponderStart',
  'onResponderStart',
  'onResponderTerminationRequest',
  'onResponderTerminate',
  'onMoveShouldSetResponderCapture',
]

const getWxAppEvent = (event: GestureResponderEvent) => {
  const nativeEvent = event.nativeEvent
  const {
    timestamp,
    target,
    pageX,
    pageY,
    touches = [],
    changedTouches = [],
  } = nativeEvent
  return {
    type: 'tap',
    timeStamp: timestamp,
    target: {
      id: target,
      dataset: {},
    },
    currentTarget: {
      id: target,
      dataset: {},
    },
    detail: {
      x: pageX,
      y: pageY,
    },
    touches: touches.map(item => {
      return {
        identifier: item.identifier,
        pageX: item.pageX,
        pageY: item.pageY,
        clientX: item.locationX,
        clientY: item.locationY,
      }
    }),
    changedTouches: changedTouches.map(item => {
      return {
        identifier: item.identifier,
        pageX: item.pageX,
        pageY: item.pageY,
        clientX: item.locationX,
        clientY: item.locationY,
      }
    }),
  }
}

const useClickable = (props: any) => {
  const {
    containerClass,
    style,
    onClick,
    hoverStyle,
    hoverStartTime,
    onLongPress,
    onTouchStart,
    onTouchEnd,
  } = props

  const [isHover, setIsHover] = useState(false)

  const ref = useRef<{
    startTimestamp: number
    startTimer?: ReturnType<typeof setTimeout>
    stayTimer?: ReturnType<typeof setTimeout>
  }>({
    startTimestamp: 0,
  })

  useEffect(() => {
    return () => {
      ref.current.startTimer && clearTimeout(ref.current.startTimer)
      ref.current.stayTimer && clearTimeout(ref.current.stayTimer)
    }
  }, [])

  const setStartTimer = () => {
    if (hoverStyle) {
      ref.current.startTimer && clearTimeout(ref.current.startTimer)
      ref.current.startTimer = setTimeout(() => {
        setIsHover(true)
      }, hoverStartTime)
    }
  }

  const setStayTimer = () => {
    if (hoverStyle) {
      ref.current.stayTimer && clearTimeout(ref.current.stayTimer)
      ref.current.stayTimer = setTimeout(() => {
        isHover && setIsHover(false)
      }, hoverStartTime)
    }
  }

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => {
        return !!(
          hoverStyle ||
          onClick ||
          onLongPress ||
          onTouchStart ||
          onTouchEnd
        )
      },
      onShouldBlockNativeResponder: () => false,
      onPanResponderGrant: (evt: GestureResponderEvent) => {
        onTouchStart && onTouchStart(getWxAppEvent(evt))
        ref.current.startTimestamp = evt.nativeEvent.timestamp
        setStartTimer()
      },
      onPanResponderTerminationRequest: () => true,
      onPanResponderRelease: (evt: GestureResponderEvent, gestureState) => {
        onTouchEnd && onTouchEnd(getWxAppEvent(evt))
        const endTimestamp = evt.nativeEvent.timestamp
        const gapTime = endTimestamp - ref.current.startTimestamp
        const hasMove =
          Math.abs(gestureState.dx) >= 3 || Math.abs(gestureState.dy) >= 3
        if (!hasMove) {
          if (gapTime <= 350) {
            onClick && onClick(getWxAppEvent(evt))
          } else {
            onLongPress && onLongPress(getWxAppEvent(evt))
          }
        }
        setStayTimer()
      },
      onPanResponderTerminate: () => {
        setStayTimer()
      },
    }),
  ).current

  useEffect(() => {
    return () => {
      ref.current.startTimer && clearTimeout(ref.current.startTimer)
      ref.current.stayTimer && clearTimeout(ref.current.stayTimer)
    }
  }, [])

  return {
    ...omit(props, [
      'style',
      'hoverStyle',
      'hoverStartTime',
      'hoverStayTime',
      'onClick',
      'onLongPress',
      'onTouchStart',
      // 'onTouchMove',
      // 'onTouchCancel',
      'onTouchEnd',
    ]),
    ...panResponder.panHandlers,
    style: [
      { backgroundColor: 'transparent', display: 'flex' },
      tailwind(containerClass),
      style,
      isHover && hoverStyle,
    ],
  }
}

export default useClickable
