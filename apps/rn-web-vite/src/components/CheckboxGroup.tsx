import React, { memo, useState } from 'react'
import { CheckboxGroup, View } from 'align-ui';
const options = new Array(6).fill(0).map((_, index) => ({
  value: index + 1,
  label: `选项${index + 1}`,
}))
const Demo: React.FC = () => {
  const [value, setValue] = useState(true)
  return (
    <View containerClass={'flex-col,mb-30'}>
      <View containerClass={'mt-10,mb-5'}>单选</View>
      <CheckboxGroup 
        options={options}
        onChange={v => {
              console.log('当前状态：', v)
        }}/>
      <View containerClass={'mt-10,mb-5'}>多选</View>
      <CheckboxGroup
        multiple
        options={options}
        onChange={v => {
              console.log('当前状态：', v)
        }}/>
      <View containerClass={'mt-10,mb-5'}>可以横向滑动</View>
      <CheckboxGroup
        direction={'horizontal'}
        multiple
        options={options}
        onChange={v => {
              console.log('当前状态：', v)
        }}/>
   </View>
  );
}
export default memo(Demo)