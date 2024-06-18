import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Failed from '../index';

describe('Failed', () => {
  it('renders correctly with default props', () => {
    const {getByText, getByTestId} = render(<Failed />);
    expect(getByText('加载失败')).toBeTruthy();
    expect(getByText('脑袋放空中，坐下来休息会吧')).toBeTruthy();
    expect(getByTestId('image').props.source.uri).toEqual(
      'https://fs.autohome.com.cn/afu_views/static/images/failed@3x.png',
    );
  });

  it('calls onRetry pressed', () => {
    const onBtnClick = jest.fn();
    const {getByTestId} = render(
      <Failed btnText="重新加载" onBtnClick={onBtnClick} />,
    );
    fireEvent.press(getByTestId('RN_BOTTOM_RETRY_BTN'));
    expect(onBtnClick).toHaveBeenCalled();
  });
});
