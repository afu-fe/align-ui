/*
 * @Author: cuiwujie
 * @Date: 2020-08-13
 * @LastEditors: cuiwujie
 * @LastEditTime: 2022-04-06 14:52:01
 * @Description: 属性编辑器
 */
import ClassParser from './ClassParser';
import Cache from './cache';
import { convertWeb } from './convertWeb';

const autoTailwind = (utilities: any) => {
  const cache: Cache = new Cache();
  const extend: any = utilities?.extend || {}; // 拓展数据
  const Platform: any = utilities?.Platform || {}; // 拓展数据
  const tailwind = (classStyle: string | string[]) => {
    let style: any = {};

    // 将插入的样式合并到原有的样式表中
    if (!classStyle) {
      return style;
    }

    let separateClassNames: string[] = [];

    //如果为string类型  英文逗号分隔
    if (typeof classStyle === 'string') {
      separateClassNames = classStyle.replace(/\s+/g, ' ').split(',');
    } else if (Array.isArray(classStyle)) {
      separateClassNames = classStyle;
    }
    const parser: ClassParser = new ClassParser(separateClassNames, extend, cache, Platform);
    style = parser.parse();
    if (Platform?.OS === 'web') {
      return convertWeb(style);
    }
    return style;
  };

  return tailwind;
};

export default autoTailwind;
