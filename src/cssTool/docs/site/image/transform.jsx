import React from 'react';
import '../index.css';
import { tailwind } from '../../../../utils/tool';
const Index = () => {
  const opArr = [
    {
      key: 'rotate-0',
    },
    {
      key: 'rotate-90',
    },
    {
      key: '-rotate-90',
    },
    {
      key: '-rotate-20',
    },
  ];
  return (
    <div className="table-box" style={{ width: '100%', position: 'relative' }}>
      {opArr.map((ele, index) => {
        const v = tailwind(ele.key);
        return (
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
                {Object.keys(v)[0]}: {JSON.stringify(v[Object.keys(v)[0]])}
              </span>
            </li>
          </>
        );
      })}
    </div>
  );
};

export default Index;
