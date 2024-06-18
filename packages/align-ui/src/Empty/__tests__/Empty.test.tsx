import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Empty from '../index';

describe('Empty', () => {
  it('renders correctly with default props', () => {
    const {getByText} = render(<Empty />);
    expect(getByText('暂无数据')).toBeTruthy();
  });

  it('calls onRetry pressed', () => {
    const onBtnClick = jest.fn();
    const {getByTestId} = render(
      <Empty btnText="重新加载" onBtnClick={onBtnClick} />,
    );
    fireEvent.press(getByTestId('RN_BOTTOM_RETRY_BTN'));
    expect(onBtnClick).toHaveBeenCalled();
  });
});
