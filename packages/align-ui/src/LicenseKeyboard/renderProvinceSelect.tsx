import React from 'react';
import { View } from 'react-native';
import type { ViewStyle } from 'react-native';
import KeyCell from './KeyCell';
import RenderBackBtn from './RenderBackBtn';
import { tailwind } from '../utils/tool';

interface RenderProvinceSelectProps {
  firstScreen?: string[][];
  secondScreen?: string[][];
  value?: string;
  cellTextStyle?: ViewStyle,
  cellDivStyle?: ViewStyle,
  handleEnter?: (cell:string) => void;
  handleDelete?: () => void;
}

class RenderProvinceSelect extends React.Component<RenderProvinceSelectProps> {
  render(): JSX.Element {
    const { firstScreen = [], secondScreen = [], value, cellTextStyle, cellDivStyle, handleEnter, handleDelete } = this.props;
    return (
      <View>
        {firstScreen.map((row, index) => (
          <View key={index}  style={tailwind('flex,flex-row,px-1')}>
            {index !== 3 ? (
              row?.map((province: string) => (
                <KeyCell
                  key={province}
                  cell={province}
                  onClick={() => {
                    if (handleEnter){
                      handleEnter(province)
                    }
                  }}
                  cellTextStyle={cellTextStyle}
                  cellDivStyle={cellDivStyle}
                  type="province"
                />
              ))
            ) : (
              <>
                {row.map(province => (
                  <KeyCell
                    key={province}
                    cell={province}
                    onClick={() => {
                      if (handleEnter){
                        handleEnter(province)
                      }
                    }}
                    cellTextStyle={cellTextStyle}
                    cellDivStyle={cellDivStyle}
                    type="province"
                  />
                ))}
                {secondScreen?.length > 3 ? <>
                  {
                    secondScreen[4]?.map(cell => (
                      <KeyCell
                        key={cell}
                        cell={cell}
                        onClick={() => {
                          if (handleEnter){
                            handleEnter(cell)
                          }
                        }}
                        disabled={true}
                        cellTextStyle={cellTextStyle}
                        cellDivStyle={cellDivStyle}
                        type="province"
                      />
                    ))
                  }
                </> : null}
                <View style={tailwind('flex-2.5,my-1.5,mx-1.5,')}>
                  <RenderBackBtn
                    value={value}
                    handleDelete={()=>{
                      if (handleDelete){
                        handleDelete();
                      }
                    }}
                  />
                </View>
              </>
            )}
          </View>
        ))}
      </View>
    );
  }
}

export default RenderProvinceSelect;
