import React, { Component } from 'react';
import { View, Image, Text } from 'align-ui';

function Demo() {
  return (
    <View containerClass={'flex-col,m-5,p-5,bg-gray-30'}>
      <View containerClass={'text-8,mb-5,text-black,din'}>Image 图片</View>
      <View>
        <View containerClass={'flex-col,w-50,mr-10,bg-blue40-20,hidden'}>
          <Text numberOfLines={2}>期望宽度100，高度等比例适配</Text>
          <View>
            <Image
              src="https://xqimg.imedao.com/1811de0356b43273fe4a0066.png"
              containerClass={'w-50'}
            />
          </View>
        </View>
        <View containerClass={'flex-col,w-50,mr-10,bg-blue40-20'}>
          <Text numberOfLines={2}>宽度100，高度75，圆角10</Text>
          <View>
            <Image
              src={'https://xqimg.imedao.com/1811de0356b43273fe4a0066.png'}
              containerClass={'w-50,h-37.5,rounded-5,hidden'}
            />
          </View>
        </View>
      </View>
      <View containerClass={'mt-5,flex-row,justify-between, item-start,flex-wrap, hidden'}>
        <View containerClass={'flex-col,w-50,bg-blue40-20'}>
          <Text numberOfLines={2}>宽高设置1/2，尺寸差别大，调整为contain模式</Text>
          <View>
            <Image
              src="https://xqimg.imedao.com/1811de0356b43273fe4a0066.png"
              containerClass={'w-50,h-100,'}
              mode={'contain'}
            />
          </View>
        </View>
        <View containerClass={'flex-col,w-50,mr-10,bg-blue40-20'}>
          <Text numberOfLines={2}>宽高设置1/2，不配置默认cover</Text>
          <View>
            <Image
              src="https://xqimg.imedao.com/1811de0356b43273fe4a0066.png"
              containerClass={'w-50,h-100,'}
            />
          </View>
        </View>
      </View>
      <View containerClass={'mt-20'}>
        <Text numberOfLines={2}>width设置100%，高度等比例适配</Text>
      </View>
      <View containerClass={'w-full,h-200'}>
        <Image
          src="https://xqimg.imedao.com/1811de0356b43273fe4a0066.png"
          containerClass={'w-full'}
        />
      </View>
    </View>
  );
}
export default Demo;