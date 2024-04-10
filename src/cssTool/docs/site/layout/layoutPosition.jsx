import React from 'react';
import '../index.css';
import { tailwind } from '../../../../utils/tool';
const Index = () => {
  const opArr = [
    {
      key: 'static',
    },
    {
      key: 'fixed',
      du: 'android',
    },
    {
      key: 'absolute',
    },
    {
      key: 'relative',
    },
    {
      key: 'sticky',
      du: 'android',
    },
  ];
  return (
    <div className="table-box" style={{ width: '100%', position: 'relative' }}>
      <li>
        <span className="header">Stylename</span>
        <span className="header">RN-Properties</span>
        <span className="header">不支持</span>
      </li>
      {opArr.map((ele, index) => (
        <li key={index}>
          <span className="name">{ele.key}</span>
          <span className="value">
            {Object.keys(tailwind(ele.key))[0]}:{' '}
            {tailwind(ele.key)[Object.keys(tailwind(ele.key))[0]]}
          </span>
          <span className="novalue">{ele.du}</span>
        </li>
      ))}
    </div>
  );
};

export default Index;
