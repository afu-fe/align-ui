import React, { memo } from 'react'
import { View, Text } from 'align-ui';
const Demo: React.FC = () => {
  return (
    <View containerClass={'flex-col,m-5'}>
      <View containerClass={'text-8,mb-5,text-black,din,border-red'}>Text 文字</View>
      <View containerClass={'flex-col'}>
        <View containerClass={'text-9,text-black,din'}>18.</View>
        <View containerClass={'text-8,text-black,din'}>16.</View>
        <Text containerClass={'text-7,text-black,din'}>14.</Text>
        <Text containerClass={'text-6,text-black,din'}>12.</Text>
        <Text containerClass={'text-5,text-black,din'}>10.</Text>
        <View containerClass={'text-9,ml-5,text-black,din,font-abold'}>bold.</View>
        <Text containerClass={'text-9,ml-5,text-black,din,font-medium'}>500.</Text>
        <Text containerClass={'text-9,ml-5,text-black,din,font-normal'}>400.</Text>
        <View containerClass={'text-9,ml-5,text-green,din'}>Gld010.</View>
        <Text containerClass={'text-9,ml-5,text-red,din'}>Grn010.</Text>
        <Text containerClass={'text-9,ml-5,text-cyan,din'}>Org010.</Text>
      </View>
    </View>
  );
}
export default memo(Demo)