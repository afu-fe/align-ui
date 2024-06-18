/*
 * @Author: cuiwujie 
 * @Date: 2024-02-23 13:36:13
 * @LastEditors: cuiwujie 
 * @LastEditTime: 2024-03-05 11:25:21
 * @FilePath: /afu-ui/packages/core/src/components/View/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as React from 'react';
import type { ViewProps } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';

import { extracteTextStyle, tailwind } from '../utils/tool';
import Icon from '../Icon';
import type { IconType } from '../Icon/PropsType';

export interface _ViewProps extends ViewProps {
  containerClass?: string;
  numberOfLines?: number;
  content?: string;
  contentCss?: string;
  expandLabel?: string;
  foldLabel?: string;
  expandIconType?: IconType;
  foldIconType?: IconType;
  sizeIconType?: number;
  expandPosition?: 'right' | 'bottom';
  expandContentCss?: string;
  expandTextCss?: string;
}

const _ExpandTxt: React.ForwardRefExoticComponent<_ViewProps & React.RefAttributes<any>> =
  React.forwardRef((props: _ViewProps) => {
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
    const [Expand, setExpand] = React.useState(false);
    const [showExpand, setShowExpand] = React.useState(false);
    const [lines, setLines] = React.useState(numberOfLines);
    const lineHeight =
      (parseInt(
        contentCss
          ?.split(',')
          .filter((item) => item.indexOf('leading') > -1)?.[0]
          ?.split('-')?.[1] || '',
      ) || 12) * 2;
    return (
      <View
        style={[
          tailwind('w-full,justify-between,mt-2,px-8,relative'),
          expandPosition === 'right' && tailwind('flex-row'),
          expandPosition === 'bottom' && tailwind('flex-col'),
        ]}
        testID="RNE__ExpandTxt__view"
      >
        <View
          style={tailwind('absolute,left-0,-top-9999,-z-1')}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            if (height > lineHeight * numberOfLines) {
              setShowExpand(true);
            }
          }}
        >
          <Text style={tailwind(`text-8,leading-12,${contentCss}`)}>{content}</Text>
        </View>
        <View style={tailwind('flex-1')}>
          <Text
            style={extracteTextStyle(tailwind(`text-8,leading-12,${contentCss}`))}
            numberOfLines={lines}
            testID="RNE__ExpandTxt__text"
          >
            {content}
          </Text>
        </View>
        {showExpand ? (
          <TouchableOpacity
            style={[
              expandPosition === 'right' && tailwind('mt-2'),
              tailwind(`ml-2,flex-row,justify-center,${expandContentCss}`),
            ]}
            onPress={() => {
              setExpand(!Expand);
              setLines(!Expand ? 9999 : numberOfLines);
            }}
            testID="RNE__ExpandTxt__Expand"
          >
            <Text style={extracteTextStyle(tailwind(`text-6,leading-8,${expandTextCss}`))}>
              {!Expand ? expandLabel : foldLabel}
            </Text>
            <Icon
              type={Expand ? expandIconType : foldIconType}
              size={sizeIconType}
              containerClass={'mt-0'}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  });

_ExpandTxt.displayName = '_ExpandTxt';

export { _ExpandTxt };
export default _ExpandTxt;
