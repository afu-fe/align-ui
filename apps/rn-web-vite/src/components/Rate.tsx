import React, { Component } from 'react';
import { View, Rate } from 'align-ui';

function Demo() {
  const toggle = 1;
  return (
    <View containerClass={'flex-col,m-5'}>
      <View containerClass={'text-8,mb-5,text-black,din'}>Rate 评分</View>
      <Rate></Rate>
      <Rate score={3}></Rate>
      <Rate size={20}></Rate>
      <Rate size={20} score={4}></Rate>
    </View>
  );
}
export default Demo;