import {View, TextInput, TouchableOpacity, Text} from "react-native";
import React, {useState} from "react";
import {tailwind} from '../utils/tool'
import {Icon} from '../index'
import {type ReactNode} from "react";

export interface ISearchProps {
    containerClass?: string;
    searchContainerClass?: string;
    leftIconSize?: number;
    showLeftIcon?: boolean;
    placeholder?: string;
    placeholderTextColor?: string;
    autoFocus?: boolean;
    onChangeText?: (text?: string) => void;
    defaultValue?: string;
    maxLength?: number;
    onBlur?: () => void;
    onFocus?: () => void;
    onKeyDown?: (keyValue?: string) => void;
    onSearch?: (text?: string) => void;
    searchBtnText?: string;
    searchBtnClass?: string;
    showSearchBtn?: boolean;
    prefix?: ReactNode;
    suffix?: ReactNode;
    showClearBtn?: boolean;
    inputClass?: string;
}

const Search = (props: ISearchProps) => {
    const {
        containerClass,
        searchContainerClass,
        leftIconSize,
        showLeftIcon = true,
        placeholder,
        placeholderTextColor,
        autoFocus,
        onChangeText,
        defaultValue,
        maxLength,
        onBlur,
        onFocus,
        onKeyDown,
        onSearch,
        searchBtnText,
        searchBtnClass,
        showSearchBtn = true,
        prefix,
        suffix,
        inputClass,
        showClearBtn
    } = props
    const [searchValue, setSearchValue] = useState(defaultValue || '')
    return (
        <View style={{...tailwind('flex-row,items-center,px-8,bg-white,h-22,py-2'), ...tailwind(containerClass || '')}}>
            <View
                style={{...tailwind('flex-row,item-center,h-full,flex-1,px-8,rounded-2,bg-gray_6'), ...tailwind(searchContainerClass || '')}}>
                {
                    prefix ? prefix : null
                }
                {
                    showLeftIcon ? (<Icon type="search" size={leftIconSize || 20} containerClass="mr-4"/>) : null
                }
                <TextInput
                    style={{...tailwind('h-full,flex-1,text-8,text-gray_2,px-4'), ...tailwind(inputClass || '')}}
                    placeholder={placeholder || '请输入搜索内容'}
                    placeholderTextColor={placeholderTextColor || '#828CA0'}
                    autoFocus={autoFocus}
                    maxLength={maxLength}
                    value={searchValue}
                    multiline={false}
                    numberOfLines={1}
                    onChangeText={(text) => {
                        setSearchValue(text)
                        onChangeText?.(text)
                    }}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onKeyPress={(event) => {
                        onKeyDown?.(event.nativeEvent.key)
                    }}
                />
                {
                    (showClearBtn && searchValue) ? (
                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={tailwind('h-full,w-8,ml-4,item-center,justify-center')}
                            onPress={() => {
                                console.log('clear')
                                setSearchValue('')
                            }}
                        >
                            <Icon type={'clear'} size={16}/>
                        </TouchableOpacity>
                    ) : null
                }
                {showSearchBtn ? (<TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                        onSearch?.(searchValue)
                    }}
                    style={{...tailwind('h-full,px-6,item-center,justify-center,rounded-2,bg-blue_1,ml-4'), ...tailwind(searchBtnClass || '')}}
                >
                    <Text style={{...tailwind('text-7,text-white,'), ...tailwind(searchBtnClass || '')}}>
                        {searchBtnText || '搜索'}
                    </Text>
                </TouchableOpacity>) : null}
                {
                    suffix ? suffix : null
                }
            </View>
        </View>
    )
}

Search.displayName = 'Search'

export default Search;
