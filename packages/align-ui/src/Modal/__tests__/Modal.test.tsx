import * as React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Modal, {ModalProps} from '../index';
import {Text} from 'react-native';

describe('Modal Component', () => {
  const defaultProps: ModalProps = {
    visible: true,
    title: 'Test Title',
    description: 'Test Description',
    cancelText: 'Cancel',
    okText: 'OK',
    showAnimation: true,
    onCancel: jest.fn(),
    onOk: jest.fn(),
    footer: null,
  };

  it('renders modal with default props', () => {
    const {getByText} = render(<Modal {...defaultProps} />);
    expect(getByText('Test Title')).toBeTruthy();
    expect(getByText('Test Description')).toBeTruthy();
    expect(getByText('Cancel')).toBeTruthy();
    expect(getByText('OK')).toBeTruthy();
  });

  it('triggers onCancel callback when cancel button is pressed', () => {
    const {getByText} = render(<Modal {...defaultProps} />);
    fireEvent.press(getByText('Cancel'));
    expect(defaultProps.onCancel).toHaveBeenCalled();
  });

  it('triggers onOk callback when OK button is pressed', () => {
    const {getByText} = render(<Modal {...defaultProps} />);
    fireEvent.press(getByText('OK'));
    expect(defaultProps.onOk).toHaveBeenCalled();
  });

  it('renders custom footer when provided', () => {
    const customFooter = <Text>Custom Footer</Text>;
    const {getByText} = render(
      <Modal {...defaultProps} footer={customFooter} />,
    );
    expect(getByText('Custom Footer')).toBeTruthy();
  });
});
