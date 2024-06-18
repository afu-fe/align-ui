import React, { Component } from 'react';
import { View, Switch, Text } from 'align-ui';

function Demo() {
  return (
    <View containerClass={'flex-col,m-5'}>
      <View containerClass={'text-8,mb-5,text-black,din'}>Switch 切换按钮</View>
      <View>
        <Text containerClass={'mr-2'}>开启</Text>
        <Switch value={1} />
      </View>
      <View containerClass={'mt-2'}>
        <Text containerClass={'mr-2'}>关闭</Text>
        <Switch value={0} />
      </View>
      <View>
        <Text containerClass={'mr-2'}>开启(禁用)</Text>
        <Switch value={1} disabled={true} />
      </View>
      <View containerClass={'mt-2'}>
        <Text containerClass={'mr-2'}>关闭(禁用)</Text>
        <Switch value={0} disabled={true} />
      </View>
      <View containerClass={'mt-2'}>
        <Text containerClass={'mr-2'}>更换开启时自定义颜色位红色</Text>
        <Switch value={1} switchTrueColor={'red'} />
      </View>
      <View containerClass={'mt-2'}>
        <Text containerClass={'mr-2'}>更换关闭时自定义颜色位红色</Text>
        <Switch value={1} switchFalseColor={'red'} />
      </View>
    </View>
  );
}
export default Demo;