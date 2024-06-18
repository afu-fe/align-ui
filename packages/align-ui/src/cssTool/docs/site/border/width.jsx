import React from 'react';
import '../index.css';
import { tailwind } from '../../../../utils/tool';
const Index = () => {
  const opArr = [
    {
      key: 'border-0.5',
    },
    {
      key: 'border-0.5',
    },
    {
      key: 'border-t-0.5',
    },
  ];
  const opArrNumber = [
    {
      key: '',
      ketitem: 'Width',
    },
    {
      key: 't',
      ketitem: 'TopWidth',
    },
    {
      key: 'b',
      ketitem: 'BottomWidth',
    },
    {
      key: 'l',
      ketitem: 'LeftWidth',
    },
    {
      key: 'r',
      ketitem: 'RightWidth',
    },
  ];
  return (
    <div className="table-box" style={{ width: '100%', position: 'relative' }}>
      {opArr.map((ele, index) => (
        <>
          {index == 0 ? (
            <li>
              <span className="header">Stylename</span>
              <span className="header">RN-Properties</span>
            </li>
          ) : null}
          <li key={index}>
            <span className="name">{ele.key}</span>
            <span className="value">
              {Object.keys(tailwind(ele.key))[0]}:{' '}
              {tailwind(ele.key)[Object.keys(tailwind(ele.key))[0]]}
            </span>
          </li>
        </>
      ))}
      {opArrNumber.map((ele, index) => (
        <>
          <li key={index}>
            <span className="name">{ele.key ? `border-${ele.key}` : 'border'}-`Number`</span>
            <span className="value">border{ele.ketitem}:`Number` * 2</span>
          </li>
        </>
      ))}
    </div>
  );
};

export default Index;
