import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { ViewStyle } from 'react-native';
import KeyCell from './KeyCell';
import RenderBackBtn from './RenderBackBtn';
import { judgeInput } from './utils'
import { secondScreenStatus  } from './config'
import { tailwind } from '../utils/tool';
interface RenderProvinceSelectProps {
  firstNumberScreen?: string[][];
  value?: string;
  type?: string;
  cellTextStyle?: ViewStyle,
  cellDivStyle?: ViewStyle,
  handleEnter?: (cell:string) => void;
  handleDelete?: () => void;
}
class RenderNumberSelect extends React.Component<RenderProvinceSelectProps> {
  render(): JSX.Element {
    const { firstNumberScreen = [],  value, cellTextStyle, cellDivStyle, handleEnter, handleDelete, type = secondScreenStatus.NumberOnly } = this.props;
    return (
      <View style={styles.keyboardContainer}>
        {firstNumberScreen.map((row, index) => (
          <View key={index} style={styles.keyboardRow}>
            {index !== 3 ? (
              <View style={styles.keyboardRow}>
                {row.map(number => (
                  <KeyCell
                    key={number}
                    cell={number}
                    onClick={() => {
                      if (handleEnter){
                        handleEnter(number)
                      }
                    }}
                    disabled={!judgeInput(number, type)}
                    cellTextStyle={cellTextStyle}
                    cellDivStyle={cellDivStyle}
                    type="number"
                  />
                ))}
              </View>
            ) : (
              <View style={styles.keyboardRow}>
                {row.map(number => (
                  <KeyCell
                    key={number}
                    cell={number}
                    onClick={() => {
                      if (handleEnter){
                        handleEnter(number)
                      }
                    }}
                    disabled={!judgeInput(number, type)}
                    cellTextStyle={cellTextStyle}
                    cellDivStyle={cellDivStyle}
                    type="number"
                  />
                ))}
                <View style={tailwind('flex-1,my-1,mx-2,')}>
                  <RenderBackBtn
                    value={value}
                    handleDelete={handleDelete}
                  />
                </View>
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
    width: '100%',
    // Define styles for keyboard container
    flexDirection: 'column'
  },
  keyboardRow: {
    width: '100%',
    // Define styles for keyboard row
    flexDirection: 'row'
  },
});

export default RenderNumberSelect;
