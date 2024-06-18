import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { ViewStyle } from 'react-native'
import { tailwind } from '../utils/tool';
interface KeyCellProps {
  disabled?: boolean;
  cell?: string;
  type?:string;
  cellTextStyle?: ViewStyle,
  cellDivStyle?: ViewStyle,
  onClick?: (celll:string) => void;
  handleDelete?: () => void;
}
class KeyCell extends React.Component<KeyCellProps> {
  // Object mapping cell type to style

  // Handle click event
  handleClick = () => {
    const { disabled, onClick, cell = ''} = this.props;
    if (!disabled && typeof onClick === 'function') {
      onClick(cell);
    }
  };
  render(): JSX.Element {
    const { disabled, cell = '', cellDivStyle = '', cellTextStyle} = this.props;
    return (
      <TouchableOpacity
        style={[
          tailwind(`flex-1,h-20,bg-white,my-1.5,mx-1.5,item-center,justify-center,rounded-2,opacity-${disabled ? '40' : 100}`),
          cellDivStyle
        ]}
        onPress={this.handleClick}
      >
        <Text style={[styles.cellText, cellTextStyle]}>{cell}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  keyboardCell: {
    // Define styles for the keyboard cell
  },
  provinceCell: {
    // Define styles for province cell
  },
  characterCell: {
    // Define styles for character cell
  },
  normalCell: {
    // Define styles for normal cell
  },
  numberCell: {
    // Define styles for number cell
  },
  cellDisabled: {
    // Define styles for disabled cell
  },
  cellNoDisabled: {
    // Define styles for non-disabled cell
  },
  cellText: {
    // Define styles for cell text
  }
});

export default KeyCell;
