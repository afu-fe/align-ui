import React, { useState, useRef, useEffect } from 'react';
import type { FC } from 'react';
import { tailwind } from '../utils/tool';
export interface BadgeProps {
  bgClass?: string;
  textClass?: string;
  count?: number | string;
  overflowCount?: number | string;
  showDot?: boolean;
  children?: React.ReactNode;
}

const _Badge: FC<BadgeProps> = ({
  count = 0,
  children,
  showDot = false,
  bgClass,
  textClass,
  overflowCount = 99,
}) => {
  const [childBox, setChildBox] = useState({
    width: 0,
    height: 0,
  });
  const [badgeBox, setBadgeBox] = useState({
    width: 0,
    height: 0,
  });
  const divRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (divRef.current && spanRef?.current) {
      setChildBox({
        width: divRef.current.clientWidth,
        height: divRef.current.clientHeight,
      });
      setBadgeBox({
        width: spanRef.current.clientWidth,
        height: spanRef.current.clientHeight,
      });
    }
  }, []);
  return (
    <div style={tailwind('relative,min-h-0,min-w-0')}>
      <div style={tailwind('relative,min-h-0,min-w-0')} ref={divRef}>
        <div
          style={tailwind(
            `${children ? 'absolute' : 'relative'},-top-${
              badgeBox.height / 4
            },bg-Orange_1,px-2,h-7,rounded-7,flex,fleex-row,item-center,justify-center,${
              children && badgeBox.width > 0 && childBox.width > 0
                ? '-right-' + Math.min(badgeBox.width, childBox.width) / 4
                : ''
            },${showDot ? 'w-3,h-3,rounded-3,px-0' : ''},${bgClass}`,
          )}
          ref={spanRef}
        >
          {!showDot ? (
            <span style={tailwind(`text-white,text-5.5,${textClass}`)}>
              {count > overflowCount ? overflowCount + '+' : count}
            </span>
          ) : null}
        </div>
        {children}
      </div>
    </div>
  );
};

export { _Badge };
export default _Badge;
