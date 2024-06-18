import React, {type ForwardedRef, forwardRef, type ForwardRefExoticComponent, type RefAttributes} from "react";
import {FlatList,} from "react-native";
import type {
    ColorValue,
    NativeSyntheticEvent,
    NativeScrollEvent,
    RefreshControlProps,
    LayoutChangeEvent,
    LayoutRectangle
} from 'react-native';

export type {
    ColorValue,
    NativeSyntheticEvent,
    NativeScrollEvent,
    RefreshControlProps,
    LayoutChangeEvent,
    LayoutRectangle
}

import _ from 'lodash'
import {tailwind} from '../utils/tool'

export interface ListRenderItemInfo<ItemT> {
    item: ItemT;

    index: number;

    separators: {
        highlight: () => void;
        unhighlight: () => void;
        updateProps: (select: "leading" | "trailing", newProps: any) => void;
    };
}

export type ListRenderItem<ItemT> = (info: ListRenderItemInfo<ItemT>) => React.ReactElement | null;

export interface IListProps<T> {
    dataSource: T[];
    renderItem: ListRenderItem<T> | null | undefined;
    ItemSeparatorComponent?: React.ComponentType<any> | null | undefined;
    ListEmptyComponent?: React.ComponentType<any> | React.ReactElement<unknown> | null | undefined;
    ListFooterComponent?: React.ComponentType<any> | React.ReactElement<unknown> | null | undefined;
    ListFooterComponentClass?: string;
    ListHeaderComponent?: React.ComponentType<any> | React.ReactElement<unknown> | null | undefined;
    ListHeaderComponentClass?: string;
    horizontal?: boolean;
    initialNumToRender?: number;
    inverted?: boolean;
    keyExtractor?: ((item: T, index: number) => string) | undefined;
    onEndReached?: ((info: { distanceFromEnd: number }) => void) | null | undefined;
    onEndReachedThreshold?: number | null | undefined;
    onRefresh?: (() => void) | null | undefined;
    refreshing?: boolean | null | undefined;
    scrollToEnd?: (options?: { animated: boolean }) => void;
    scrollToOffset?: (params: { animated?: boolean | null | undefined; offset: number }) => void;
    endFillColor?: ColorValue | undefined;
    onScroll?: ((event: NativeSyntheticEvent<NativeScrollEvent>) => void) | undefined;
    pagingEnabled?: boolean | undefined;
    refreshControl?: React.ReactElement<RefreshControlProps> | undefined;
    scrollEnabled?: boolean | undefined;
    showsHorizontalScrollIndicator?: boolean | undefined;
    showsVerticalScrollIndicator?: boolean | undefined;
    bounces?: boolean | undefined;
    scrollEventThrottle?: number | undefined;
    scrollTo?: (
        y?: number | { x?: number | undefined; y?: number | undefined; animated?: boolean | undefined },
        x?: number,
        animated?: boolean,
    ) => void;
    onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
}

const List: ForwardRefExoticComponent<IListProps<any> & RefAttributes<any>> = forwardRef((props, ref: ForwardedRef<any>) => {
    const listProps = (_.cloneDeep(props) || {}) as IListProps<any>;
    delete listProps.ListFooterComponentClass
    delete listProps.ListHeaderComponentClass

    return (
        <FlatList
            ref={ref}
            data={props?.dataSource}
            ListFooterComponentStyle={tailwind(props?.ListFooterComponentClass || '')}
            ListHeaderComponentStyle={tailwind(props?.ListHeaderComponentClass || '')}
            {...listProps}
        />
    )
})
export default List;

