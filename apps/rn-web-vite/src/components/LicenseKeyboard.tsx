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