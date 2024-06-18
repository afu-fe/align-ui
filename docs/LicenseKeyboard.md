---
title: LicenseKeyboard 车牌号
order: 2
nav:
  title: 组件
  path: /component
group:
  title: 基础组件
  path: /basic
  order: 0
---

# LicenseKeyboard 车牌号

车牌键盘

### 何时使用

- 当你需要输入车牌号的时候

### 基础实例

```jsx mdx:preview&background=#bebebe29
import React, { memo, useState } from 'react'
import {LicenseKeyboard } from 'align-ui';
const Demo: React.FC = () => {
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [value, setValue] = useState('');
  return (
    <div style={{'position': 'relative', height: '100%', width: '100%',}}>
      <button
        data-test-id="controlButton"
        onClick={() => setShowKeyboard(!showKeyboard)}
      >{`${showKeyboard ? 'close' : 'open'} the keyboard`}</button>

      <p data-test-id="value">{value}</p>
      <LicenseKeyboard
        visible={showKeyboard}
        done={() => setShowKeyboard(false)}
        onChange={(value: any) => setValue(value)}
        value={value}
        defalutConfig={{
          // "使": [
          //   ['ZCDEFGHJKLMNOPQRS', 'ABCDEFGHJK', '0123456789', '0123456789', '0123456789', '0123456789', '0123456789']
          // ],
          // "京": [
          //   ['ABC', 'ABC', 'ABC', 'ABC', 'ABC', 'ABC', 'ABC'],
          //   ['ZCDEFGHJKLMNOPQRS', 'ABCDEFGHJK', '0123456789', '0123456789', '0123456789', '0123456789', '0123456789']
          // ]
        }}
      />
    </div>
  );
}
export default memo(Demo)
```
### LicenseKeyboard

#### 属性

| 属性              | 类型                    | 描述                   |
| ------------------ | ----------------------- | ----------------------------- |
| visiable           | boolean                 | keyboard visible              |
| onChange           | (value: string) => void | trigger when user tap         |
| value              | string                  | controlled value              |
| done               | () => void              | trigger when keyborad dismiss |
| confirmButtonStyle | StyleVlaue     | confirm button style          |
| confirmButtonText  | string                  | confirm button text           |
| cellTextStyle      | StyleVlaue     | keycell style                 |
| cellDivStyle      | StyleVlaue     | keycell style                 |
| defalutConfig      | StyleVlaue     | expand rules                  |
