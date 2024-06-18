import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Text} from 'react-native';
import Tabs from '../index';

describe('Tabs', () => {
  it('should render tabs correctly', () => {
    const {getByText} = render(
      <Tabs title={['Tab 1', 'Tab 2', 'Tab 3']}>
        <Text testID="tab1-content">Tab 1 Content</Text>
        <Text testID="tab2-content">Tab 2 Content</Text>
        <Text testID="tab3-content">Tab 3 Content</Text>
      </Tabs>,
    );

    expect(getByText('Tab 1')).toBeTruthy();
    expect(getByText('Tab 2')).toBeTruthy();
    expect(getByText('Tab 3')).toBeTruthy();
  });

  it('should change tab when clicking on it', () => {
    const {getByText, queryByText} = render(
      <Tabs title={['Tab 1', 'Tab 2', 'Tab 3']}>
        <Text testID="tab1-content">Tab 1 Content</Text>
        <Text testID="tab2-content">Tab 2 Content</Text>
        <Text testID="tab3-content">Tab 3 Content</Text>
      </Tabs>,
    );

    fireEvent.press(getByText('Tab 2'));
    expect(queryByText('Tab 1 Content')).toBeFalsy();
    expect(getByText('Tab 2 Content')).toBeTruthy();
  });

  it('should call onChange callback when tab is changed', () => {
    const onChangeMock = jest.fn();
    const {getByText} = render(
      <Tabs title={['Tab 1', 'Tab 2', 'Tab 3']} onChange={onChangeMock}>
        <Text>Tab 1 Content</Text>
        <Text>Tab 2 Content</Text>
        <Text>Tab 3 Content</Text>
      </Tabs>,
    );

    fireEvent.press(getByText('Tab 2'));
    expect(onChangeMock).toHaveBeenCalledWith(1);
  });
});
