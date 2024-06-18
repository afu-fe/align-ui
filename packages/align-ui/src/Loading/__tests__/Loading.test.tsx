import React from 'react';
import {render} from '@testing-library/react-native';
import Loading from '../index';

describe('Loading', () => {
  it('renders correctly with default props', () => {
    const {getByText} = render(<Loading />);
    expect(getByText('加载中...')).toBeTruthy();
    // https://z.autoimg.cn/sou/souRNImage/pageloading.gif
  });
  it('renders correctly with default props Image', () => {
    const {getByTestId} = render(<Loading />);
    expect(getByTestId('image').props.source.uri).toEqual(
      'https://z.autoimg.cn/sou/souRNImage/pageloading.gif',
    );
  });
});
