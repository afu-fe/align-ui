import React, { Component } from 'react';
import { Button, View } from 'align-ui';
function Demo() {
  return (
    <>
      <View containerClass={'text-8,mb-5,text-black,din'}>Button 按钮</View>
      <View containerClass={'mb-5'}>不同颜色的按钮</View>
      <View containerClass={'flex,flex-row,w-full,px-5,flex-wrap,justify-between'}>
        <Button>default</Button>
        <Button type={`primary`}>primary</Button>
        <Button type={`success`}>success</Button>
      </View>
      <View containerClass={'flex,flex-row,w-full,px-5,flex-wrap,mt-5'}>
        <Button type={`warning`}>warning</Button>
        <Button type={`danger`} containerClass={'ml-5'}>
          danger
        </Button>
      </View>
      <View containerClass={'w-full,h-1,bg-blue10-5,mt-5,mb-5'} />
      <View containerClass={'mb-5'}>不同大小的按钮</View>
      <View containerClass={'flex,flex-row,justify-between,w-full,px-5,item-center'}>
        <Button type={`primary`} size={'mini'}>
          mini
        </Button>
        <Button type={`primary`} size={'small'}>
          small
        </Button>
        <Button type={`primary`} size={'middle'}>
          middle
        </Button>
        <Button type={`primary`} size={'large'}>
          large
        </Button>
      </View>
      <View containerClass={'w-full,h-1,bg-blue10-5,mt-5,mb-5'} />
      <View containerClass={'mb-5'}>禁用状态</View>
      <View containerClass={'flex,flex-row,justify-between,w-full,px-5'}>
        <Button disabled={true}>default</Button>
        <Button type={`primary`} disabled={true}>
          primary
        </Button>
      </View>
      <View containerClass={'w-full,h-1,bg-blue10-5,mt-5,mb-5'} />
      <View containerClass={'mb-5'}>填充模式</View>
      <View containerClass={'flex,flex-row,justify-between,w-full,px-5'}>
        <Button type={`primary`} fill={'solid'}>
          solid
        </Button>
        <Button type={`primary`} fill={'outline'}>
          outline
        </Button>
        <Button type={`primary`} fill={'none'}>
          none
        </Button>
        <Button fill={'none'}>none</Button>
      </View>
      <View containerClass={'w-full,h-1,bg-blue10-5,mt-5,mb-5'} />
      <View containerClass={'mb-5'}>带图标的按钮</View>
      <View containerClass={'flex,flex-row,justify-between,w-full,px-5'}>
        <Button type={`primary`} iconType={'info'}>
          按钮带图标
        </Button>
      </View>
      <View containerClass={'w-full,h-1,bg-blue10-5,mt-5,mb-5'} />
      <View containerClass={'mb-5'}>点击方法返回</View>
      <View containerClass={'flex,flex-row,justify-between,w-full,px-5'}>
        <Button
          onClick={() => {
            alert('点击方法返回');
          }}
          type={`primary`}
        >
          点击方法返回
        </Button>
      </View>
    </>
  );
}
export default Demo;