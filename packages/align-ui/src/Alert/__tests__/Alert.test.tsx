import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {TouchableOpacity} from 'react-native';
import _Alert from '../index';
import Icon from '../../Icon/index';

describe('_Alert', () => {
  it('renders correctly with default props', () => {
    const {getByText} = render(<_Alert message="Test Alert" type="info" />);
    expect(getByText('Test Alert')).toBeTruthy();
  });

  it('renders icon when showIcon is true', () => {
    const {getByTestId} = render(
      <_Alert message="Test Alert" type="info" showIcon />,
    );
    expect(getByTestId('RNE__icon__svg')).toBeTruthy();
  });

  it('does not render icon when showIcon is false', () => {
    const {queryByTestId} = render(
      <_Alert message="Test Alert" type="info" showIcon={false} />,
    );
    expect(queryByTestId('RNE__icon__svg')).toBeFalsy();
  });

  it('renders description when provided', () => {
    const {getByText} = render(
      <_Alert message="Test Alert" description="Additional info" type="info" />,
    );
    expect(getByText('Additional info')).toBeTruthy();
  });

  it('calls onClose when close icon is pressed', () => {
    const onCloseMock = jest.fn();
    const {getByTestId} = render(
      <_Alert
        closeIcon={
          <TouchableOpacity
            testID="RN_ALERT_CLOSE_BTN"
            activeOpacity={0.9}
            style={{
              height: 22,
              justifyContent: 'center',
              marginLeft: 8,
            }}
            onPress={() => {
              onCloseMock();
            }}>
            <Icon type="warn" size={12} />
          </TouchableOpacity>
        }
        message="Test Alert"
        type="info"
        showCloseIcon
      />,
    );
    fireEvent.press(getByTestId('RN_ALERT_CLOSE_BTN'));
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('does not render close icon when showCloseIcon is false', () => {
    const {queryByTestId} = render(
      <_Alert message="Test Alert" type="info" showCloseIcon={false} />,
    );
    expect(queryByTestId('RNE__icon__svg')).toBeFalsy();
  });
});
