import 'react-native';
import React, {Children} from 'react';
import Switch from '../index';
import {render, fireEvent} from '@testing-library/react-native';

describe('Switch', () => {
  it('disabled', () => {
    const {getByTestId} = render(<Switch disabled={true} value={1}></Switch>);
    const component = getByTestId('RNE__Switch__wrap');
    expect(component.props.style.backgroundColor).toBe(
      'rgba(40, 125, 255,0.5)',
    );
  });

  it('onPress events', () => {
    const fn = jest.fn();
    const {getByTestId} = render(
      <Switch value={1} onValueChange={fn}></Switch>,
    );
    const component = getByTestId('RNE__Switch__wrap');
    fireEvent(component, 'press');
    expect(fn).toHaveBeenCalled();
  });

  it('onPress events if disabled', () => {
    const fn = jest.fn();
    const {getByTestId} = render(
      <Switch value={1} onValueChange={fn} disabled={true}></Switch>,
    );
    const component = getByTestId('RNE__Switch__wrap');
    fireEvent(component, 'press');
    expect(fn).not.toHaveBeenCalled();
  });

  it('switchTrueColor red', () => {
    const {getByTestId} = render(
      <Switch value={1} switchTrueColor={'red'}></Switch>,
    );
    const component = getByTestId('RNE__Switch__wrap');
    expect(component.props.style.backgroundColor).toBe('rgba(220, 53, 69,1)');
  });
});
