import React from 'react';
import '../index.css';
import { tailwind } from '../../../../utils/tool';
const Index = () => {
  const Arr = [
    {
      key: 'start',
      type: 'start',
    },
    {
      key: '-start',
      type: 'start',
    },
    {
      key: 'top',
      type: 'top',
    },
    {
      key: '-top',
      type: 'top',
    },
    {
      key: 'bottom',
      type: 'bottom',
    },
    {
      key: '-bottom',
      type: 'bottom',
    },
    {
      key: 'left',
      type: 'left',
    },
    {
      key: '-left',
      type: 'left',
    },
    {
      key: 'right',
      type: 'right',
    },
    {
      key: '-right',
      type: 'right',
    },
  ];
  const opacityArr = [
    {
      key: '1/2',
      value: '50%',
    },
    {
      key: '1/3',
      value: '33.3%',
    },
    {
      key: '2/3',
      value: '66.6%',
    },
    {
      key: '1/4',
      value: '25%',
    },
    {
      key: '2/4',
      value: '50%',
    },
    {
      key: '3/4',
      value: '75%',
    },
    {
      key: 'full',
      value: '100%',
    },
    {
      key: `Number`,
      value: `Number * 2`,
    },
  ];
  return (
    <div className="table-box" style={{ width: '100%', position: 'relative' }}>
      <li>
        <span className="header">Stylename</span>
        <span className="header">RN-Properties</span>
      </li>
      {Arr.map((its, index) => (
        <div>
          {opacityArr.map((item, ind) => {
            const value = tailwind(`${its.key}-${item.key}`);
            return (
              <li key={index}>
                <span className="name">
                  {its.key}-{item.key}
                </span>
                {item.key == 'Number' ? (
                  <span className="value">
                    {its.type}: {its.key.indexOf('-') >= 0 ? '-' : ''}
                    {item.value}
                  </span>
                ) : (
                  <span className="value">
                    {Object.keys(value)[0]}: {value[Object.keys(value)[0]]}
                  </span>
                )}
              </li>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Index;
