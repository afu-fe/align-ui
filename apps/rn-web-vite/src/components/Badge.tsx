import React, { Component } from 'react';
import { View, Badge, Button } from 'align-ui';

function Demo() {
  return (
    <View containerClass={'flex-col,m-5'}>
      <View containerClass={'text-8,mb-5,text-black,din'}>Badge 徽标数</View>
      <View>
        <Badge count={2222} showDot={true}>
          <Button type={`primary`}>只展示圆点</Button>
        </Badge>
      </View>
      <View containerClass={'mt-10'}>
        <Badge count={2222} overflowCount={99999}>
          <Button type={`primary`}>展示数字,并且设置最大值为99999</Button>
        </Badge>
      </View>
      <View containerClass={'mt-10'}>
        <Badge count={2222}>
          <Button type={`primary`}>展示数字,并且默认最大值为99</Button>
        </Badge>
      </View>
      <View containerClass={'mt-10'}>
        <Badge count={'右移中文角标'}>
          <Button type={`primary`}>primary</Button>
        </Badge>
      </View>
      <View containerClass={'mt-10'}>
        <Badge count={'右移中文角标'}></Badge>
      </View>
      <View containerClass={'mt-10'}>
        <Badge count={'右移中文角标'} showDot={true}></Badge>
      </View>
    </View>
  );
}
export default Demo;