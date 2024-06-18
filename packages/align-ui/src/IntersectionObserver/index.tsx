import List from '../List';
import type {
    IListProps,
    LayoutChangeEvent,
    LayoutRectangle,
    NativeSyntheticEvent,
    NativeScrollEvent,
} from '../List'
import React, {useCallback, useEffect, useRef} from "react";
import {type FlatList, View} from "react-native";
import type {ReactNode} from "react";
import _ from "lodash";
import EventBus from "./utils/EventBus";

const event_key = 'IO_LIST_SCROLL'

export interface IMessage {
    scrollDirection?: 'horizontal' |'vertical';
    contentOffsetY?: number;
    contentOffsetX?: number;
    listLayout?: LayoutRectangle;
}

const IOList: <ItemT>(props?: IListProps<ItemT>) => ReactNode = props => {
    const scrollRef = useRef<FlatList>(null)
    const listProps = (_.cloneDeep(props) || {}) as IListProps<any>;
    const listLayoutRef = useRef<LayoutRectangle>()
    return (
        <List
            initialNumToRender={20}
            scrollEventThrottle={16}
            {...listProps}
            ref={scrollRef}
            onLayout={(event: LayoutChangeEvent) => {
                listLayoutRef.current = event.nativeEvent.layout
                setTimeout(() => {
                    EventBus.emit(event_key, {
                        scrollDirection: listProps.horizontal ? 'horizontal' : 'vertical',
                        contentOffsetY: 0,
                        contentOffsetX: 0,
                        listLayout: listLayoutRef.current
                    })
                }, 1000)
            }}
            onScroll={(event: NativeSyntheticEvent<NativeScrollEvent>) => {
                const contentOffset = event.nativeEvent.contentOffset;
                EventBus.emit(event_key, {
                    scrollDirection: listProps.horizontal ? 'horizontal' : 'vertical',
                    contentOffsetY: listProps.horizontal ? 0 : contentOffset,
                    contentOffsetX: listProps.horizontal ? contentOffset : 0,
                    listLayout: listLayoutRef.current
                })
            }}
        />
    )
}

interface IOptions {
    moduleName?: string | number | undefined;
    expose?: { start?: number, end?: number }
}

interface IInViewProps {
    children?: ReactNode | ReactNode[] | undefined;
    moduleName?: string | number | undefined;
    onChange?: (inView: boolean, options?: IOptions) => void;
}

const InView = (props: IInViewProps) => {
    const visibleChangeRef = useRef({
        isFirst: true,
        visible: false
    });
    const exposeRef = useRef({
        start: 0,
        end: 0
    });
    const onScroll = useCallback(({scrollDirection, listLayout}: IMessage) => {
        viewRef.current?.measureInWindow((x, y, width, height) => {
        const visible = scrollDirection === 'vertical' ? y + height - (listLayout?.y || 0)> 0 && y < ((listLayout?.y || 0) + (listLayout?.height || 0)) : x + width - (listLayout?.x || 0)> 0 && x < ((listLayout?.x || 0) + (listLayout?.width || 0))
        if(visible && !visibleChangeRef.current.visible) {
            exposeRef.current.start = Date.now()
            exposeRef.current.end =0
        }
        if(visibleChangeRef.current.isFirst) {
            visibleChangeRef.current = {
                isFirst: false,
                visible: visible
            }
            props.onChange?.(visible, {
                moduleName: props.moduleName,
                expose: {
                    start: exposeRef.current.start,
                    end: exposeRef.current.end
                }
            })
        } else if(visible !== visibleChangeRef.current.visible){
            if (!visible) {
                exposeRef.current.end = Date.now()
            }
            visibleChangeRef.current = {
                ...visibleChangeRef.current,
                visible: visible
            }
            props.onChange?.(visible, {
                moduleName: props.moduleName,
                expose: {
                    start: exposeRef.current.start,
                    end: exposeRef.current.end
                }
            })
        }
        })
    }, [])
    useEffect(() => {
        EventBus.on(event_key, onScroll)
        return () => {
            EventBus.off(event_key, onScroll)
        }
    }, []);
    const viewRef = useRef<View>(null)
    return (
        <View
            ref={viewRef}
        >
            {props.children}
        </View>
    )
}

export default {
    IOList,
    InView
}
