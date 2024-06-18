import React, { Component, useState } from 'react';
import { Toast, View, Button } from 'align-ui';

function Demo() {
  const [msgdata, setMsgdata] = React.useState({
    msg: '',
    type: 0,
    iconType: '',
    image: '',
  });
  const [iconType, seticonType] = useState('');
  return (
    <>
      <View containerClass={'text-8,mb-5,text-black,din'}>Toast 轻提示</View>
      <View containerClass="flex-col,h-300">
        <Button
          onClick={() => {
            setMsgdata({
              msg: '这是一条提示信息',
              type: '',
              iconType: '',
              image: '',
            });
          }}
        >
          提示信息
        </Button>
        <Button
          onClick={() => {
            setMsgdata({
              msg: '文本信息+Icon',
              type: '',
              iconType: 'success',
              image: '',
            });
          }}
        >
          文本信息+Icon
        </Button>
        <Button
          onClick={() => {
            setMsgdata({
              msg: '文本信息+image',
              type: '',
              iconType: '',
              image: 'https://xqimg.imedao.com/1811de0356b43273fe4a0066.png',
            });
          }}
        >
          文本信息+image
        </Button>
        <Toast content={msgdata.msg} iconType={msgdata.iconType} image={msgdata.image} />
      </View>
    </>
  );
}
export default Demo;