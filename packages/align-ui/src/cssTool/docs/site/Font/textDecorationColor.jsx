import React from 'react';
import '../index.css';
import { colorbase } from '../../../config/index';
import { addOpacity } from '../../../utils/index';
const Index = () => {
  const opArr = [
    {
      key: 'flex',
      value: { display: 'flex' },
    },
    {
      key: 'none',
      value: { display: 'none' },
    },
  ];
  const colorArr = Object.keys(colorbase);
  return (
    <div className="table-box" style={{ width: '100%', position: 'relative' }}>
      {colorArr.map((ele, index) => (
        <>
          {index == 0 ? (
            <li>
              <span className="header">Stylename</span>
              <span className="header">RN-Properties</span>
            </li>
          ) : null}
          <li key={index}>
            <span className="name">text-decorate-{ele}</span>
            <span className="value">textDecorationColor: {colorbase[ele]}</span>
          </li>
          <li key={index}>
            <span className="name">text-decorate-{ele}-`Number`</span>
            <span className="value">
              textDecorationColor: {addOpacity(colorbase[ele], 'Number')}
            </span>
          </li>
        </>
      ))}
    </div>
  );
};

export default Index;
