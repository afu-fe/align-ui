import 'react-native';
import React from 'react';
import Icon from '../index';
import {render, fireEvent} from '@testing-library/react-native';

describe('Icon', () => {
  it('size', () => {
    const {getByTestId} = render(<Icon type="success" size={21} />);
    const component = getByTestId('RNE__image__svg');
    expect(component.props.style.width).toBe(21);
    expect(component.props.style.height).toBe(21);
  });
});
