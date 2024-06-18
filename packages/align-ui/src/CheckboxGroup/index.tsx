import * as React from 'react';
import { TouchableOpacity, View, Text, Image, ScrollView } from 'react-native';
import type {  ViewStyle, TextStyle } from 'react-native';
import {  useState } from 'react';
import { tailwind } from '../utils/tool';
import * as Mblock from '../index';
export interface CheckboxProps {
  options: [{
    value: any,
    label: string,
    onChange?: (params: boolean) => void;
    disabled?: boolean;
    textPosition?:string;
    iconSize?: number;
    checked?: boolean;
    checkedColor?: string;
    activeIconUrl?:string;
    inactiveIconUrl?: string;
    labelTextClass?: string;
    labelTextStyle?: TextStyle;
    iconClass?: string;
    iconStyle?: ViewStyle;
    labelDisabled?: boolean;
    iconDisabled?: boolean;
    containerClass?:string;
    containerStyle?:string;
  }],
  direction?: 'horizontal' | 'vertical',
  scrollable?: boolean;
  type?: 'Checkbox' | 'Radio',
  multiple?: boolean;
}

const _Checkbox: React.ComponentType<CheckboxProps> = ({
  options = [],
  direction = 'vertical',
  scrollable = true,
  type = 'Checkbox',
  multiple = false,
}) => {
  const [value, setValue] = useState(['none'])
  const contentJSX = () =>{
    const Comp = Mblock[type];
    return (
      <>
        {
          options?.map(item=>{
            const selected = value.indexOf(item.value) > -1;
            return (
              <View style={{
                height: 20,
                marginBottom: 5,
              }}>
                <Comp
                  {...item}
                  label={item.label}
                  containerClass={'mr-4'}
                  onChange={v => {
                    if (multiple){
                      if (selected){
                        var new_set = new Set(value)
                        new_set.delete(item.value);
                        var new_arr = [...new_set];
                        setValue(new_arr);
                      }else{
                        let new_arr = value;
                        if (value && value?.length == 1 && value[0] === 'none'){
                          new_arr = [];
                        }
                        new_arr.push(item.value);
                        setValue(new_arr);
                      }
                    }else{
                      setValue([item.value])
                    }
                  }}
                  checked={selected}
                />
              </View>
            )
          })
        }
      </>
    )
  }
  if (scrollable && direction === 'horizontal'){
    return (
      <ScrollView
        horizontal
        bouncesZoom={false}
        showsHorizontalScrollIndicator={false}>
        {contentJSX()}
      </ScrollView>
    )
  }
  return contentJSX()
};

export { _Checkbox };
export default _Checkbox;
