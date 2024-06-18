import React, { Component, useState } from 'react';
import { Button, Modal } from 'align-ui';

function Demo() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        打开弹窗
      </Button>
      <Modal
        visible={visible}
        title="我是标题"
        description="我是对话框正文，支持多行，建议显示文案在三行以内，折行后文案左对齐展示"
        onCancel={() => {
          console.log('cancel');
          setVisible(false);
        }}
        onOk={() => {
          console.log('ok');
          setVisible(false);
        }}
      ></Modal>
    </>
  );
}
export default Demo;