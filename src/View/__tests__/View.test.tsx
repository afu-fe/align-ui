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
