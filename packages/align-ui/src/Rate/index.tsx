import * as React from 'react';
import { View, Image } from 'react-native';

import { tailwind } from '../utils/tool';
export interface RateProps {
  containerClass?: string;
  score?: number;
  size?: number;
  count?: number;
}
const _Rate: React.FC<RateProps> = ({
  containerClass = '',
  score = 5,
  size = 12,
  count = 5,
}) => {
  return (
    <View style={[tailwind(`flex-shirnk-0,relative,${containerClass}`)]}>
      <View style={[tailwind(`flex-row,item-center,absolute,left-0,top-0,z-100,hidden`),{width: (score / count * 5 * size) }]}>
        <View style={[tailwind(`flex-row,item-center,justify-between`)]}>
          {
            [...Array(count)].map(item=>(
              <Image
                style={tailwind(`w-${size/2},h-${size/2}`)}
                source={{ uri: 'https://z.autoimg.cn/sou/user_increase/xing-active-new.png' }}
                key={item}
              />
            ))
          }
        </View>
      </View>
      <View style={[tailwind(`flex-row,item-center,justify-between,h-${size/2},w-${5 * size / 2}`)]}>
        {
          [...Array(count)].map(item=>(
            <Image
              style={tailwind(`w-${size/2},h-${size/2}`)}
              source={{ uri: 'https://z.autoimg.cn/sou/user_increase/xing-default-new.png' }}
              key={item}
            />
          ))
        }
      </View>
    </View>
  );
};

_Rate.displayName = '_Rate';

export { _Rate };
export default _Rate;
