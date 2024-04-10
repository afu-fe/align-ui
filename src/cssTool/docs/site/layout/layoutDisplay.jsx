// nomobile
import React from 'react'

import '../index.css'
import { tailwind } from '../../../../utils/tool'
const Index = () => {
  const opArr = [
    {
      key: 'flex',
    },
    {
      key: 'none',
    },
  ]
  return (
    <div className="table-box" style={{ width: '100%', position: 'relative' }}>
      {opArr.map((ele, index) => (
        <React.Fragment key={index}>
          {index === 0 ? (
            <li key="header">
              <span className="header">Stylename</span>
              <span className="header">RN-Properties</span>
            </li>
          ) : null}
          <li key={ele.key}>
            <span className="name">{ele.key}</span>
            <span className="value">
              {Object.keys(tailwind(ele.key))[0]}:{' '}
              {tailwind(ele.key)[Object.keys(tailwind(ele.key))[0]]}
            </span>
          </li>
        </React.Fragment>
      ))}
    </div>
  )
}

export default Index
