import React from 'react';
import { colorbase } from '../../../config/index';
import { addOpacity } from '../../../utils/index';
import '../index.css';
const Index = () => {
  const colorArr = Object.keys(colorbase);
  return (
    <div className="table-box" style={{ width: '100%', position: 'relative' }}>
      <li>
        <span className="header">Stylename</span>
        <span className="header">RN-Properties</span>
      </li>
      <li>
        <span className="name">普通颜色属性</span>
        <span className="value">普通颜色属性值</span>
      </li>
      {colorArr.map((item, index) => (
        <>
          <li>
            <span className="name">{item}</span>
            <span className="value">{colorbase[item]}</span>
            <span
              style={{
                backgroundImage: `linear-gradient(to right,${colorbase[item]}, ${colorbase[item]})`,
                width: '100px',
                height: '30px',
              }}
            ></span>
          </li>
        </>
      ))}
      <li>
        <span className="name">hsla[hh/ss/ll/aa]</span>
        <span className="value">hsla(hh,ss%,ll%.aa)</span>
      </li>
      <li>
        <span className="name">bg/text-[#RRGGBB]</span>
        <span className="value">(#RRGGBB)</span>
      </li>
      {colorArr.map((item, index) => (
        <li>
          <span className="name">{item}-`Number`</span>
          <span className="value">borderColor: {addOpacity(colorbase[item], 'Number')}</span>
          <span
            style={{ background: addOpacity(colorbase[item], 100), width: '100px', height: '30px' }}
          ></span>
        </li>
      ))}
    </div>
  );
};

export default Index;
