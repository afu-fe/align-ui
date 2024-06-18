import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { ViewStyle } from 'react-native';
import KeyCell from './KeyCell';
import RenderBackBtn from './RenderBackBtn';
import { judgeInput } from './utils'
import { tailwind } from '../utils/tool';
interface RenderNumberABCSelectProps {
  secondScreen?: string[][];
  value?: string;
  type?: string;
  cellTextStyle?: ViewStyle,
  cellDivStyle?: ViewStyle,
  handleEnter?: (cell:string) => void;
  handleDelete?: () => void;
}
class RenderNumberABCSelect extends React.Component<RenderNumberABCSelectProps> {
  render(): JSX.Element {
    const { secondScreen = [],  value, cellTextStyle, cellDivStyle, handleEnter, handleDelete, type } = this.props;
    return (
      <View style={styles.keyboardContainer}>
        {secondScreen.map((row, index) => (
          <View key={index} style={{
            flexDirection: 'row',
            marginHorizontal: index > 1 ? 8 * index : 0,
          }}>
            {row.map(cell => (
              <KeyCell
                key={cell}
                cellTextStyle={cellTextStyle}
                cellDivStyle={cellDivStyle}
                cell={cell}
                onClick={() => {
                  if (handleEnter){
                    handleEnter(cell)
                  }
                }}
                disabled={!judgeInput(cell, type)}
                type={index === 4 ? 'character' : 'normal'}
              />
            ))}
            {index === 3 && (
              <View style={tailwind('flex-2.5,my-1,mx-2,')}>
                <RenderBackBtn
                  value={value}
                  handleDelete={handleDelete}
                />
              </View>
            )}
          </View>
        ))}
      </View>
    );
  }

};

const styles = StyleSheet.create({
  keyboardContainer: {
    // Define styles for keyboard container
    flexDirection: 'column'
  },
  keyboardRow: {
    // Define styles for keyboard row
    flexDirection: 'row'
  },
});

export default RenderNumberABCSelect;
