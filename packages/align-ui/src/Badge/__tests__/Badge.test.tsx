import 'react-native';
import React, {Children} from 'react';
import Badge from '../index';
import Button from '../../Button/index';
import {render, fireEvent} from '@testing-library/react-native';

describe('Badge', () => {
  it('showDot', () => {
    const {getByTestId} = render(
      <Badge count={2222} showDot={true}>
        <Button type={`primary`}>只展示圆点</Button>
      </Badge>,
    );
    const component = getByTestId('RNE__Badge__wrap');
    expect(
      component.props.children.props.children[0].props.style[2].width,
    ).toBe(6);
    expect(
      component.props.children.props.children[0].props.style[2].height,
    ).toBe(6);
  });

  it('count max 99', () => {
    const {getByTestId} = render(
      <Badge count={2222}>
        <Button type={`primary`}>只展示圆点</Button>
      </Badge>,
    );
    const component = getByTestId('RNE__Badge__wrap');
    expect(
      component.props.children.props.children[0]?.props.children.props.children,
    ).toBe('99+');
  });
  it('count max 99999', () => {
    const {getByTestId} = render(
      <Badge count={2222} overflowCount={99999}>
        <Button type={`primary`}>只展示圆点</Button>
      </Badge>,
    );
    const component = getByTestId('RNE__Badge__wrap');
    expect(
      component.props.children.props.children[0]?.props.children.props.children,
    ).toBe(2222);
  });
  it('textCssStr', () => {
    const {getByTestId} = render(
      <Badge count={2222} overflowCount={99999} textClass={'text-red'}>
        <Button type={`primary`}>只展示圆点</Button>
      </Badge>,
    );
    const component = getByTestId('RNE__Badge__wrap');
    expect(
      component.props.children.props.children[0]?.props.children.props.style[0]
        ?.color,
    ).toBe('rgba(220, 53, 69,1)');
  });
});
