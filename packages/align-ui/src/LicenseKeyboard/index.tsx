/**
 * ✔ selectable
 * ✘ space
 * ✘ decode: Fixed value TRUE
 */

import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Animated, Platform } from 'react-native';
import type { TextProps } from 'react-native';

import RenderProvinceSelect from './renderProvinceSelect'
import RenderNumberSelect from './renderNumberSelect'
import RenderNumberABCSelect from './renderNumberABCSelect'

import { extracteTextStyle, tailwind, } from '../utils/tool';
import { localConfig, provinceSelect, numberSelect, numberAbcSelect,secondScreenStatus  } from './config'
import { mergeAndRemoveDuplicates, isTwoOrMoreAbcVehicle, removeLetters, } from './utils'

type LicensePlateRule = string[];

type LicensePlateRules = {
  [key: string]: LicensePlateRule[];
};
interface DefaultConfig {
  [key: string]: string[];
}
interface LicenseKeyboardProps {
  visible?:boolean;
  containerClass?: string;
  value: string;
  confirmButtonText?: string;
  style?: TextProps;
  selectable?: boolean;
  onChange?: (cell:string) => void;
  done?: () => void;
  defalutConfig?: LicensePlateRules;
}
const _LicenseKeyboard: React.FC<LicenseKeyboardProps> = ({
  containerClass = '',
  value = '',
  confirmButtonText = '',
  style,
  onChange,
  done,
  defalutConfig = {},
  visible,
}) => {
  const [ bottom ] = useState(new Animated.Value(-1000)); 
  const [charType, setCharType] = useState('数字');
  const defaultConfig = localConfig(defalutConfig);
  useEffect(() => {
    Animated.timing(bottom, {
      toValue: visible ? (Platform?.OS === 'android' ? 5 : 44) : -1000,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [visible]);
  const judgeRules = ({ key, len, currentValue }: any): string => {
    const provinceArr = (defaultConfig as DefaultConfig)[key] || [];
    const arr: string[] = [];
    const newArr: string[] = [];
    provinceArr?.forEach((item) => {
      if (typeof item[len] === 'string') { // 检查 item[len] 是否为字符串类型
        arr.push(item[len] as string); // 使用类型断言确定类型为字符串
      }
      if (len > 0) {
        let flag = false;
        currentValue
          ?.slice(1)
          ?.split('')
          ?.forEach((ites:string, ind:number) => {
            if (typeof item[ind] === 'string' && item[ind]?.indexOf(ites) === -1) { // 检查 item[ind] 是否为字符串类型
              flag = true;
            }
          });
        if (!flag && typeof item[len] === 'string') { // 检查 item[len] 是否为字符串类型
          newArr.push(item[len] as string); // 使用类型断言确定类型为字符串
        }
      }
    });
    const rules = mergeAndRemoveDuplicates(newArr?.length > 0 ? newArr : arr);
    return rules;
  };
  const handleEnter = (cell:string)=>{
    if (onChange){
      onChange(value + cell)
    }
  }
  const handleDelete = ()=>{
    if (onChange && value.length > 0){
      onChange(value.slice(0, -1))
    }
  }
  const renderKeyboard = () => {
    const vArr = value.split('');
    const len = value.length;
    if (charType === '中文') {
      // 使车牌解析 使使166001、166001使
      if (len === 7) {
        return (
          <RenderNumberSelect
            firstNumberScreen={numberSelect}
            value={value}
            type={secondScreenStatus?.DisableAll}
            handleEnter={handleEnter}
            handleDelete={handleDelete}
          />
        )
      }
      if (len === 6) {
        return (
          <RenderNumberSelect
            firstNumberScreen={numberSelect}
            value={value}
            type={secondScreenStatus?.NoNumberOnly}
            handleEnter={handleEnter}
            handleDelete={handleDelete}
          />
        )
      }
      return (
        <RenderNumberSelect
          firstNumberScreen={numberSelect}
          value={value}
          handleEnter={handleEnter}
          handleDelete={handleDelete}
        />
      )
    }
    let rule = '';
    if (vArr?.length > 0) {
      // 计算规则
      rule = judgeRules({
        key: vArr[0],
        len: len - 1,
        currentValue: value,
      });
      if (isTwoOrMoreAbcVehicle(value)){ // 如果匹配超出2个英文字母则剩余全部都是数字
        rule = removeLetters(rule);
      }
    }
    switch (len) {
      case 0:
        return (
          <RenderProvinceSelect
            value={value}
            firstScreen={provinceSelect}
            secondScreen={numberAbcSelect}
            handleEnter={handleEnter}
            handleDelete={handleDelete}
          />
        )
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        if (!rule) {
          return (
            <RenderNumberABCSelect
              secondScreen={numberAbcSelect}
              value={value}
              type={secondScreenStatus.DisableAll}
              handleEnter={handleEnter}
              handleDelete={handleDelete}
            />
          )
        }
        return (
          <RenderNumberABCSelect
            secondScreen={numberAbcSelect}
            value={value}
            type={rule}
            handleEnter={handleEnter}
            handleDelete={handleDelete}
          />
        )
      default:
        return (
          <RenderNumberABCSelect
            secondScreen={numberAbcSelect}
            value={value}
            type={secondScreenStatus.DisableAll}
            handleEnter={handleEnter}
            handleDelete={handleDelete}
          />
        )
    }
  };
  return (
    <Animated.View
      style={[tailwind('absolute,left-0,z-9999,bg-[#e8e9eb],w-full'),tailwind(containerClass), extracteTextStyle(style),{bottom: bottom}]}
    >
      <View>
      <View>
        <View style={tailwind('flex,flex-row,item-center,justify-between,h-18,px-4')}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={()=>{
              if (value.length === 0) {
                setCharType(charType === '数字' ? '中文' : '数字');
              }
            }}
          >
            <Text>
              {charType}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={()=>{
              if (done) {
                done();
              }
            }}
          >
          {/* done */}
            <Text style={tailwind('text-[#08f]')}>{confirmButtonText || '完成'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {renderKeyboard()}
      </View>
      </View>
    </Animated.View>
  );
};

_LicenseKeyboard.displayName = '_LicenseKeyboard';

export { _LicenseKeyboard };
export default _LicenseKeyboard;
