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
