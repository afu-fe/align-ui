import 'react-native';
import React from 'react';
import Button from '../index';
import {colors} from '../../utils/index';
import {render, fireEvent} from '@testing-library/react-native';
export type keys = {
  [key: string]: any;
};
const colorRgb = (color: string): string => {
  var sColor = color.toLowerCase();
  //十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 如果是16进制颜色
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)));
    }
    return 'rgba(' + sColorChange.join(', ') + ',1)';
  }
  return sColor;
};
const TYPES: keys = {
  primary: colors.colorsPalette.primary,
  success: colors.colorsPalette.success,
  warning: colors.colorsPalette.warning,
  danger: colors.colorsPalette.danger,
};

const SIZES: keys = {mini: 7, small: 11, middle: 16, large: 22};

it('disabled', () => {
  const {getByTestId} = render(<Button disabled={true}>disabled</Button>);
  const component = getByTestId('RNE__Button__wrap');
  expect(component.props.accessibilityState.disabled).toBe(true);
});

describe.each`
  type
  ${'primary'}
  ${'success'}
  ${'warning'}
  ${'danger'}
`('$type', ({type}) => {
  it(`should display type ${type} button`, () => {
    const {getByTestId} = render(<Button type={type}>{type}</Button>);
    const component = getByTestId('RNE__Button__wrap');
    expect(component.props.style.backgroundColor).toBe(colorRgb(TYPES[type]));
  });
});

describe.each`
  size
  ${'mini'}
  ${'small'}
  ${'middle'}
  ${'large'}
`('$size', ({size}) => {
  it(`should display size ${size} button`, () => {
    const {getByTestId} = render(<Button size={size}>{size}</Button>);
    const component = getByTestId('RNE__Button__wrap');
    expect(component.props.style.paddingHorizontal).toBe(SIZES[size]);
  });
});

it('onPress events', () => {
  const fn = jest.fn();
  const {getByTestId} = render(<Button onClick={fn}>onPress</Button>);
  const component = getByTestId('RNE__Button__wrap');
  fireEvent(component, 'press');
  expect(fn).toHaveBeenCalled();
});

it('onPress events if disabled', () => {
  const fn = jest.fn();
  const {getByTestId} = render(
    <Button disabled={true} onClick={fn}>
      onPress
    </Button>,
  );
  const component = getByTestId('RNE__Button__wrap');
  fireEvent(component, 'press');
  expect(fn).not.toHaveBeenCalled();
});
