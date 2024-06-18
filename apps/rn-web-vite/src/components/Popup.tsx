import React, { Component, useState } from 'react';
import { View, Popup, Text, Button } from 'align-ui';

function Demo() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState();
  return (
    
    <View containerClass={'relative,h-full,w-full,flex-col'}>
      <View>弹出位置</View>
      <View>
        <Button
          type="primary"
          onClick={() => {
            setVisible(true)
            setPosition('center')
          }}
        >Popup 居中弹出</Button>
        <Button
          type="primary"
          onClick={() => {
            setVisible(true)
            setPosition('left')
          }}
        >Popup 左侧弹出</Button>
        <Button
          type="primary"
          onClick={() => {
            setVisible(true)
            setPosition('top')
          }}
        >Popup 顶部弹出</Button>
        <Button
          type="primary"
          onClick={() => {
            setVisible(true)
            setPosition('right')
          }}
        >Popup 右侧弹出</Button>
        <Button
          type="primary"
          onClick={() => {
            setVisible(true)
            setPosition('bottom')
          }}
        >Popup 底部弹出</Button>
      </View>
      <Popup
        visible={visible}
        position={position}
        onPressOverlay={()=>{
          setVisible(false)
        }}
      >
        <View containerClass={'bg-white, px-5,py-5'}>Popup 弹出按钮Popup 弹出按钮Popup 弹出按钮Popup 弹出按钮</View>
      </Popup>
      <View>弹出位置</View>
    </View>
  );
}
export default Demo;