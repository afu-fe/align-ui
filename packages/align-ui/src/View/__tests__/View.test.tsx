/*
 * @Author: cuiwujie 
 * @Date: 2024-03-12 17:41:54
 * @LastEditors: cuiwujie 
 * @LastEditTime: 2024-03-13 14:20:02
 * @FilePath: /afu-ui/test-ci/src/__tests__/view.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import 'react-native';
import React from 'react';
import View from '../index';
import {render} from '@testing-library/react-native';

describe('View', () => {
  it('children && children type', () => {
    const {getByTestId} = render(<View>disabled</View>);
    const component = getByTestId('RNE__view__wrap');
    expect(component.props.children.props.children).toBe('disabled');
    expect(component.props.children.type.displayName).toBe('Text');
  });
  it('children Text', () => {
    const {getByText} = render(<View>disabled</View>);
    expect(getByText('disabled')).toBeTruthy();
  });
});
