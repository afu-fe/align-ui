import React from 'react';
import '../index.css';
const Index = () => {
  const Arr = [
    { key: 'mx', value: 'marginHorizontal', type: '' },
    { key: 'my', value: 'marginVertical', type: '' },
    { key: 'ml', value: 'marginLeft', type: '' },
    { key: 'mt', value: 'marginTop', type: '' },
    { key: 'mb', value: 'marginBottom', type: '' },
    { key: 'mr', value: 'marginRight', type: '' },
    { key: 'ms', value: 'marginStart', type: '' },
    { key: 'me', value: 'marginEnd', type: '' },
    { key: '-mx', value: 'marginHorizontal', type: '-' },
    { key: '-my', value: 'marginVertical', type: '-' },
    { key: '-ml', value: 'marginLeft', type: '-' },
    { key: '-mt', value: 'marginTop', type: '-' },
    { key: '-mb', value: 'marginBottom', type: '-' },
    { key: '-mr', value: 'marginRight', type: '-' },
    { key: '-ms', value: 'marginStart', type: '-' },
    { key: '-me', value: 'marginEnd', type: '-' },
  ];
  const opacityArr = [
    { key: 'xs', value: 12 },
    { key: 'sm', value: 14 },
    { key: 'base', value: 16 },
    { key: 'lg', value: 18 },
    { key: 'xl', value: 20 },
    { key: '`Number`', value: 'Number * 2' },
  ];
  return (
    <div className="table-box" style={{ width: '100%', position: 'relative' }}>
      <li>
        <span className="header">Stylename</span>
        <span className="header">RN-Properties</span>
      </li>
      {Arr.map((item, index) => (
        <div>
          {opacityArr.map((ele, ind) => (
            <li key={index}>
              <span className="name">
                {item.key}-{ele.key}
              </span>
              <span className="value">
                {item.value}: {item.type}
                {ele.value}
              </span>
            </li>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Index;
