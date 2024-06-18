import React, { useRef, useEffect, useState } from 'react';
import { tailwind } from '../utils/tool';
import Icon from '../Icon/index.web';
import type { IconType } from '../Icon/PropsType';
/**
 * 加载失败状态
 */
export interface _ExpandProps {
  containerClass?: string;
  numberOfLines: number;
  content: string;
  contentCss: string;
  expandLabel: string;
  foldLabel: string;
  expandIconType: IconType;
  foldIconType: IconType;
  sizeIconType: number;
  expandPosition: 'right' | 'bottom';
  expandContentCss: string;
  expandTextCss: string;
}

const _ExpandTxt: React.FC<_ExpandProps> = (props: _ExpandProps) => {
  const {
    numberOfLines = 5,
    content = '',
    contentCss = '',
    expandLabel = '展开',
    foldLabel = '收起',
    expandIconType = 'fold',
    foldIconType = 'unfold',
    expandPosition = 'right',
    expandContentCss = '',
    expandTextCss = '',
    sizeIconType = 16,
  } = props;
  const [Expand, setExpand] = useState(false);
  const [showExpand, setShowExpand] = useState(false);
  const [lines, setLines] = useState(numberOfLines);
  const divRef = useRef<HTMLDivElement>(null);
  const lineHeight =
    (parseInt(
      contentCss
        ?.split(',')
        .filter((item) => item.indexOf('leading') > -1)?.[0]
        ?.split('-')?.[1] || '',
    ) || 12) * 2;
  useEffect(() => {
    if (divRef.current) {
      const height = divRef.current.clientHeight;
      if (height > lineHeight * numberOfLines) {
        setShowExpand(true);
      }
    }
  }, []);
  const rsl = tailwind(`flex-1,text-8,leading-12,${contentCss}`);
  return (
    <div
      style={tailwind(
        `flex,w-full,justify-between,mt-2,px-8,relative,${
          expandPosition === 'right' ? 'flex-row' : 'flex-col'
        }`,
      )}
    >
      <div style={tailwind('absolute,left-0,-top-9999,-z-1')} ref={divRef}>
        <span style={tailwind(`text-8,leading-12,${contentCss}`)}>{content}</span>
      </div>
      <div
        style={{
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          'word-wrap': 'break-word',
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
          '-webkit-line-clamp': lines + '',
          ...rsl,
        }}
      >
        {content}
      </div>
      {showExpand ? (
        <div
          style={tailwind(
            `flex,ml-2,flex-row,justify-center,${
              expandPosition === 'right' ? 'mt-2' : ''
            },${expandContentCss},`,
          )}
          onClick={() => {
            setExpand(!Expand);
            setLines(!Expand ? 9999 : numberOfLines);
          }}
        >
          <span style={tailwind(`text-6,leading-8,${expandTextCss}`)}>
            {!Expand ? expandLabel : foldLabel}
          </span>
          <Icon
            type={Expand ? expandIconType : foldIconType}
            size={sizeIconType}
            containerClass={'mt-0'}
          />
        </div>
      ) : null}
    </div>
  );
};

export { _ExpandTxt };
export default _ExpandTxt;
