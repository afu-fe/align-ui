/*
 * @Author: cuiwujie 
 * @Date: 2024-03-12 17:41:54
 * @LastEditors: cuiwujie 
 * @LastEditTime: 2024-03-13 14:30:07
 * @FilePath: /afu-ui/test-ci/src/__tests__/view.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import 'react-native';
import React from 'react';
import Text from '../index';
import {render} from '@testing-library/react-native';

describe('Text', () => {
  it('children && children type', () => {
    const {getByTestId} = render(
      <Text containerClass={'text-20,text-black'}>disabled</Text>,
    );
    const component = getByTestId('RNE__text__wrap');
    expect(component.props.style[0].fontSize).toBe(40);
  });
  it('children Text', () => {
    const {getByText} = render(<Text>disabled</Text>);
    expect(getByText('disabled')).toBeTruthy();
  });
});
