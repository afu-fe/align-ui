import {View, SectionList, Text, type LayoutRectangle, Pressable, PanResponder} from "react-native";
import type {SectionListRenderItem, SectionListData} from "react-native";
import {tailwind} from "../utils/tool";
import React, {type ReactNode, useCallback, useEffect, useRef, useState} from "react";

interface SectionT {
    sectionIndex: number;
    title: string;
}

interface IIndexSidebarProps<SectionT> {
    // dataSource: IDataSource[];
    dataSource: ReadonlyArray<SectionListData<string, SectionT>>;
    renderItem: SectionListRenderItem<string, SectionT> | undefined;
    renderSectionHeader?:
        | ((info: { section: SectionListData<string, SectionT> }) => React.ReactElement | null)
        | undefined;
    itemHeight?: number;
    titleHeight?: number;
    sideLetterPopperContainerClass?: string;
    sideLetterPopperTextClass?: string;
    sideLetterPopperAngleClass?: string;
    letterContainerClass?: string;
    letterItemClass?: string;
    letterTextClass?: string;
}

const IndexSidebar: (props: IIndexSidebarProps<SectionT>) => ReactNode = (props) => {
    const [containerH, setContainerH] = useState(0)
    const [showPopper, setShowPopper] = useState(false)
    const [PopperOffsetY, setPopperOffsetY] = useState(0)
    const scrollRef = useRef<any>(null)
    const letterContainerRef = useRef<any>(null)
    const letterContainerRect = useRef<LayoutRectangle>()
    const containerRect = useRef<LayoutRectangle & {top?: number}>()
    const titlesRef = useRef<any[]>([])
    const lettersRef = useRef<any[]>([])
    const touching = useRef<boolean>(false)
    const touchStartY = useRef(0)
    const letterReacts = useRef<any[]>([])
    const [letterActive, setLetterActive] = useState(0)
    const [contentSize, setContentSize] = useState(0)
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (_, { dx, dy }) => Math.abs(dx) + Math.abs(dy) > 5,
            onPanResponderMove: (_, gestureState) => {
                // 在这里处理移动事件
                if(touching.current) {
                    setLetterActiveByTouch(gestureState.dy)
                }
            },
            onPanResponderRelease: () => {
                touching.current = false
                touchStartY.current = 0
                setShowPopper(false)
            }
        })
    ).current;

    const getMeasureData = useCallback((ref: any, index: number) => {
        if(ref) {
            return new Promise((resove) => {
                ref.measureInWindow((x: number | undefined, y: number | undefined, width: number | undefined, height: number | undefined) => {
                    resove({
                        rect: {x, y, width, height },
                        index
,                    })
                })
            })
        }
        return Promise.resolve({
            rect: {x: 0, y: 0, width: 0, height: 0 },
            index
        })
    }, [])

    const getLetterRects = useCallback(async () => {
        if(letterReacts.current?.length > 0) {
            return letterReacts.current
        }
        const promiseList: Promise<any>[] = []
        lettersRef.current?.forEach((ref, index) => {
            promiseList.push(getMeasureData(ref, index))
        })
        letterReacts.current = await Promise.all(promiseList)
        return letterReacts.current
    }, [])


    const getTitleRects = useCallback(async () => {
        const promiseList: Promise<any>[] = []
        titlesRef.current?.forEach((ref, index) => {
            promiseList.push(getMeasureData(ref, index))
        })
        return  await Promise.all(promiseList)
    }, [])

    const setLetterActiveByTouch = useCallback(async (dy: number) => {
        const letterRectsResult = await getLetterRects() || []
        for (let i = 0; i < letterRectsResult.length; i++) {
            const {rect: {y, height}} = letterRectsResult[i]
            if (y - (letterContainerRect.current?.height || 0) / 2 <= (dy + touchStartY.current) && y - (letterContainerRect.current?.height || 0) / 2 + height >= (dy + touchStartY.current)) {
                if (i !== letterActive) {
                    scrollToLocale(i)
                }
                break
            }
        }
    }, [])

    useEffect(() => {
        let size = 0
        props?.dataSource?.forEach((item) => {
            size += item?.data?.length || 0
        })
        setContentSize(size)
    }, [props?.dataSource?.length]);

    const setLetterActiveByScroll = useCallback(async () => {
        const titleRectsResult = await getTitleRects() || []
        for (let i = titleRectsResult.length - 1; i >= 0; i--) {
            const {rect: {y}} = titleRectsResult[i]
            if (-1 < y - (containerRect.current?.top || 0) && y - (containerRect.current?.top || 0) < 1) {
                if(i !== letterActive) {
                    setLetterActive(i)
                }
                break
            }
        }
    }, [])

    const handleScroll = useCallback(() => {
        setLetterActiveByScroll()
    }, [])

    const scrollToLocale = useCallback((index: number) => {
        setLetterActive(index)
        scrollRef.current?.scrollToLocation({
            animated: false,
            viewPosition: 0,
            sectionIndex: index,
            itemIndex: 0,
            viewOffset: (props?.titleHeight || 40) * index
        })
        lettersRef.current[index]?.measureInWindow((_x: number, y: number, _w: number, h: number) => {
            const popperY = y - (letterContainerRect.current?.y || 0) + (h - (tailwind(props?.sideLetterPopperContainerClass || '')?.height || 30)) / 2
            setPopperOffsetY(popperY)
        })
    }, [])

    return (
        <View
            {...panResponder.panHandlers}
            onLayout={(event) => {
                containerRect.current = event.nativeEvent.layout
            }}
            style={tailwind('relative,h-full')}>
            <SectionList
                ref={scrollRef}
                initialNumToRender={contentSize}
                sections={props?.dataSource}
                renderItem={props?.renderItem}
                scrollEventThrottle={16}
                renderSectionHeader={(info) => {
                    return (
                        <View
                            ref={el => {
                                titlesRef.current[info.section?.sectionIndex] = el
                            }}
                        >
                            {props?.renderSectionHeader?.(info)}
                        </View>
                    )
                }}
                keyExtractor={(item, index) => item + index}
                stickySectionHeadersEnabled={true}
                showsVerticalScrollIndicator={false}
                getItemLayout={(_data, index) => {
                    return { length: props?.itemHeight || 40, offset: ((props?.itemHeight) || 40) * index, index }
                }}
                onScroll={() => {
                    handleScroll()
                }}
                />
            <View
                ref={letterContainerRef}
                style={[tailwind(`absolute,right-4,top-1/2`), {transform: [{translateY: -containerH / 2}]}, tailwind(props?.letterContainerClass || '')]}
                onLayout={(event) => {
                    setContainerH(event.nativeEvent.layout.height)
                    letterContainerRef.current?.measureInWindow((x: number, y: number, width: number, height: number) => {
                        letterContainerRect.current = {x, y, width, height}
                    })
                }}
            >
                {
                    props?.dataSource?.map((item, index) => {
                        return (
                            <Pressable
                                ref={el => {
                                    lettersRef.current[index] = el
                                }}
                                onLongPress={(event) => {
                                    touchStartY.current = event.nativeEvent.pageY
                                    touching.current = true
                                    scrollToLocale(index)
                                    setShowPopper(true)
                                }}
                                onPress={() => {
                                    scrollToLocale(index)
                                }}
                                style={[tailwind(`w-10,h-10,rounded-10,item-center,justify-center${letterActive === index ? ',bg-grey-50' : ''}`), tailwind(props?.letterItemClass || '')]}>
                                <Text
                                    style={[tailwind('text-5,text-black,font-normal'), tailwind(props?.letterTextClass || '')]}
                                    key={index}>
                                    {item?.title}
                                </Text>
                            </Pressable>
                        )
                    })
                }
                {
                    showPopper ? (
                        <View
                            style={[tailwind(`absolute,right-0,top-${PopperOffsetY / 2},right-20,z-9999,bg-gray_4,w-15,h-15,rounded-full,justify-center,item-center`), tailwind(props?.sideLetterPopperContainerClass || '')]}
                        >
                            <Text style={tailwind(props?.sideLetterPopperTextClass || '')}>
                                {props?.dataSource?.[letterActive]?.title}
                            </Text>
                            <View
                                style={[tailwind('absolute,-right-1.5,bg-gray_4,w-8,h-8,-z-1'), {transform: [{rotate: '45deg'}]}, tailwind(props?.sideLetterPopperAngleClass || '')]}
                            />
                        </View>
                    ) : null
                }
            </View>
        </View>
    )
}

export default IndexSidebar;
