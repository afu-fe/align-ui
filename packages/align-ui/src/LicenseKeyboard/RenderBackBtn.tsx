import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface RenderBackBtnProps {
  value?: string;
  handleDelete?: () => void;
}
class RenderBackBtn extends React.Component<RenderBackBtnProps> {
  render(): JSX.Element {
    const { value = '', handleDelete}  = this.props;
    return (
      <TouchableOpacity
        style={[
          styles.backBtn,
          { backgroundColor: value.length === 0 ? 'rgb(191, 197, 210)' : 'rgb(0, 136, 255)' } // Adjust styles based on value length
        ]}
        onPress={()=>{
          if (handleDelete){
            handleDelete();
          }
        }}
        key="backBtn"
      >
        <Text style={styles.backBtnText}>删除</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  backBtn: {
    // Define styles for back button
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 4,
    backgroundColor: 'gray', // Default background color
  },
  backBtnText: {
    // Define styles for back button text
    fontSize: 12,
    color: 'white'
  }
});

export default RenderBackBtn;
