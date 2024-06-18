/*
 * @Author: cuiwujie
 * @Date: 2021-08-13
 * @LastEditors: cuiwujie
 * @LastEditTime: 2022-04-06 14:52:01
 * @Description: RN 样式属性转换为H5
 */
interface WebStyle {
  [key: string]: { key: string; u: string } | { key: string; u: string }[]; // 添加索引签名
}
interface WebRealStyle {
  [key: string]: string; // 添加索引签名
}
function convertWeb(style: any) {
  let webRealStyle: WebRealStyle = {};
  const unit = 'px';
  const webStyle: WebStyle = {
    top: {
      key: 'top',
      u: unit,
    },
    left: {
      key: 'left',
      u: unit,
    },
    right: {
      key: 'right',
      u: unit,
    },
    bottom: {
      key: 'bottom',
      u: unit,
    },
    marginHorizontal: [
      {
        key: 'marginLeft',
        u: unit,
      },
      {
        key: 'marginRight',
        u: unit,
      },
    ],
    marginVertical: [
      {
        key: 'marginTop',
        u: unit,
      },
      {
        key: 'marginBottom',
        u: unit,
      },
    ],
    paddingHorizontal: [
      {
        key: 'paddingLeft',
        u: unit,
      },
      {
        key: 'paddingRight',
        u: unit,
      },
    ],
    paddingVertical: [
      {
        key: 'paddingTop',
        u: unit,
      },
      {
        key: 'paddingBottom',
        u: unit,
      },
    ],
    margin: {
      key: 'margin',
      u: unit,
    },
    padding: {
      key: 'padding',
      u: unit,
    },
    borderRadius: {
      key: 'borderRadius',
      u: unit,
    },
    marginLeft: {
      key: 'marginLeft',
      u: unit,
    },
    marginRight: {
      key: 'marginRight',
      u: unit,
    },
    marginTop: {
      key: 'marginTop',
      u: unit,
    },
    marginBottom: {
      key: 'marginBottom',
      u: unit,
    },
    paddingLeft: {
      key: 'paddingLeft',
      u: unit,
    },
    paddingRight: {
      key: 'paddingRight',
      u: unit,
    },
    paddingTop: {
      key: 'paddingTop',
      u: unit,
    },
    paddingBottom: {
      key: 'paddingBottom',
      u: unit,
    },
    marginStart: {
      key: 'marginLeft',
      u: unit,
    },
    marginEnd: {
      key: 'marginRight',
      u: unit,
    },
    paddingStart: {
      key: 'paddingLeft',
      u: unit,
    },
    paddingEnd: {
      key: 'paddingRight',
      u: unit,
    },
    width: {
      key: 'width',
      u: unit,
    },
    height: {
      key: 'height',
      u: unit,
    },
    minWidth: {
      key: 'minWidth',
      u: unit,
    },
    minHeight: {
      key: 'minHeight',
      u: unit,
    },
    maxWidth: {
      key: 'maxWidth',
      u: unit,
    },
    maxHeight: {
      key: 'maxHeight',
      u: unit,
    },
    borderWidth: {
      key: 'borderWidth',
      u: unit,
    },
    fontSize: {
      key: 'fontSize',
      u: unit,
    },
    lineHeight: {
      key: 'lineHeight',
      u: unit,
    },
    letterSpacing: {
      key: 'letterSpacing',
      u: unit,
    },
    borderBottomWidth: {
      key: 'borderBottomWidth',
      u: unit,
    },
    borderTopWidth: {
      key: 'borderTopWidth',
      u: unit,
    },
    borderLeftWidth: {
      key: 'borderLeftWidth',
      u: unit,
    },
    borderRightWidth: {
      key: 'borderRightWidth',
      u: unit,
    },
    borderStartWidth: {
      key: 'borderStartWidth',
      u: unit,
    },
    borderEndWidth: {
      key: 'borderEndWidth',
      u: unit,
    },
  };
  Object.keys(style).forEach((key) => {
    const value = style[key];
    const k = webStyle[key];
    if (k && Array.isArray(k)) {
      // 数组
      k.forEach((item) => {
        webRealStyle[item.key] =
          style[key] + (typeof value === 'number' && !isNaN(value) ? item?.u : '');
      });
    } else if (typeof k === 'object' && !Array.isArray(k) && k !== null) {
      // 对象
      webRealStyle[k?.key] = style[key] + (typeof value === 'number' && !isNaN(value) ? k?.u : '');
    } else {
      // 没匹配
      webRealStyle[key] = value;
    }
  });
  return webRealStyle;
}

export { convertWeb };
