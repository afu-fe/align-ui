import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: 'alignVertical-auto',
      value: { textAlignVertical: 'auto' },
      du: 'ios',
    },
    {
      key: 'alignVertical-top',
      value: { textAlignVertical: 'top' },
      du: 'ios',
    },
    {
      key: 'alignVertical-bottom',
      value: { textAlignVertical: 'bottom' },
      du: 'ios',
    },
    {
      key: 'alignVertical-center',
      value: { textAlignVertical: 'center' },
      du: 'ios',
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
              <span className="header">不支持</span>
            </li>
          ) : null}
          <li key={index}>
            <span className="name">{ele.key}</span>
            <span className="value">
              {Object.keys(ele.value)[0]}: {ele.value[Object.keys(ele.value)[0]]}
            </span>
            <span className="novalue">{ele.du}</span>
          </li>
        </>
      ))}
    </div>
  );
};

export default Index;
