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
              <span className="header">不支持</span>
            </li>
          ) : null}
          <li key={index}>
            <span className="name">overlay-{ele}</span>
            <span className="value">overlayColor: {colorbase[ele]}</span>
            <span className="novalue">ios</span>
          </li>
          <li key={index}>
            <span className="name">overlay-{ele}-`Number`</span>
            <span className="value">overlayColor: {addOpacity(colorbase[ele], 'Number')}</span>
            <span className="novalue">ios</span>
          </li>
        </>
      ))}
    </div>
  );
};

export default Index;
