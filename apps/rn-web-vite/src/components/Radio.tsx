import React, { memo, useState } from 'react'
import { Radio, View } from 'align-ui';
const Demo: React.FC = () => {
  const [value, setValue] = useState(true)
  return (
    <View containerClass={'flex-col,mb-30'}>
      <View containerClass={'mt-10,mb-5'}>基础用法</View>
      <Radio label={'初始化时未激活'} onChange={v => {
              console.log('当前状态：', v)
            }}/>
      <Radio label={'初始化时激活'} checked onChange={v => {
          console.log('当前状态：', v)
        }}/>
      <Radio label={'自定义 icon 边距'} checked iconClass={'mr-10'} onChange={v => {
          console.log('当前状态：', v)
        }}/>
      <Radio label={'受控:不更新'} checked={value}/>
      <Radio label={'受控:更新'} checked={value} onChange={(flag)=>{setValue(flag)}}/>
      <View containerClass={'mt-10,mb-5'}>禁用状态</View>
      <Radio label={'未激活'} disabled onChange={v => { console.log('当前状态：', v)}}/>
      <Radio label={'已激活'} disabled checked onChange={v => { console.log('当前状态：', v)}}/>
      <View containerClass={'mt-10,mb-5'}>自定义</View>
      <Radio label={'自定义激活时图标颜色'} checkedColor={'red'} checked onChange={v => { console.log('当前状态：', v)}}/>
      <Radio label={'自定义激活时图标颜色'} checkedColor={'green'} checked onChange={v => { console.log('当前状态：', v)}}/>
      
      <View containerClass={'mt-10,mb-5'}>禁用文本点击</View>
      <Radio label={'点击图标可以更新状态，点击文字不更新状态'} labelDisabled checked onChange={v => { console.log('当前状态：', v)}}/>
      <Radio label={'点击文本可以更新状态，点击图标不更新状态'} iconDisabled checked onChange={v => { console.log('当前状态：', v)}}/>
      <View containerClass={'mt-10,mb-5'}>自定义图标</View>
      <Radio label={'自定义图标'} iconDisabled checked={value} activeIconUrl="https://z.autoimg.cn/sou/auto-ui/icon/rise.png" inactiveIconUrl="https://z.autoimg.cn/sou/auto-ui/icon/fall.png" checkedColor={'white'} onChange={v => { console.log('当前状态：', v)}}/>
      <Radio label={'点击文案响应切换，图标没有绑定点击回调'} iconDisabled checked={value} activeIconUrl="https://z.autoimg.cn/sou/auto-ui/icon/rise.png" inactiveIconUrl="https://z.autoimg.cn/sou/auto-ui/icon/fall.png" checkedColor={'white'} onChange={v => { console.log('当前状态：', v)}}/>
      <Radio label={'点击图标响应切换'} checked={value} labelDisabled activeIconUrl="https://z.autoimg.cn/sou/auto-ui/icon/rise.png" inactiveIconUrl="https://z.autoimg.cn/sou/auto-ui/icon/fall.png" checkedColor={'white'} onChange={v => { console.log('当前状态：', v)}}/>
      <View containerClass={'mt-10,mb-5'}>自定义样式</View>
      <Radio label={'自定义图标大小'} iconSize={20}  checked onChange={v => { console.log('当前状态：', v)}}/>
      <Radio label={'自定义文本大小'} iconSize={20}  checked onChange={v => { console.log('当前状态：', v)}} labelTextClass={'text-red,text-10'}/>
      <Radio label={'文本多行展示文本多行展示文本多行展示文本多行展示文本多行展示文本多行展示文本多行展示文本多行展示文本多行展示文本多行展示文本多行展示文本多行展示文本多行展示文本多行展示文本多行展示文本多行展示'} iconSize={20}  checked onChange={v => { console.log('当前状态：', v)}}/>
   </View>
  );
}
export default memo(Demo)