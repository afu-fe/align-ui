import React from 'react';
import '../index.css';
import { colorbase } from '../../../config/index';
import { addOpacity } from '../../../utils/index';
const Index = () => {
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
            <span className="name">shadow-{ele}</span>
            <span className="value">shadowColor: {colorbase[ele]}</span>
          </li>
          <li key={index}>
            <span className="name">shadow-{ele}-`Number`</span>
            <span className="value">shadowColor: {addOpacity(colorbase[ele], 'Number')}</span>
          </li>
        </>
      ))}
    </div>
  );
};

export default Index;
