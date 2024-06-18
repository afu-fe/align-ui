import { colorbase } from '../config/index';

interface StyleProps {
  [key: string]: {
    opacity: string;
    color: string;
  };
}

const STYLE_PROPS: StyleProps = {
  bg: { opacity: '__opacity_bg', color: 'backgroundColor' },
  text: { opacity: '__opacity_text', color: 'color' },
  border: { opacity: '__opacity_border', color: 'borderColor' },
  borderTop: { opacity: '__opacity_border', color: 'borderTopColor' },
  borderBottom: { opacity: '__opacity_border', color: 'borderBottomColor' },
  borderLeft: { opacity: '__opacity_border', color: 'borderLeftColor' },
  borderRight: { opacity: '__opacity_border', color: 'borderRightColor' },
  borderStart: { opacity: '__opacity_border', color: 'borderStartColor' },
  borderEnd: { opacity: '__opacity_border', color: 'borderEndColor' },
  overlay: { opacity: '__opacity_border', color: 'overlayColor' },
  shadow: { opacity: '__opacity_shadow', color: 'shadowColor' },
  'text-shadow': { opacity: '__opacity_shadow', color: 'textShadowColor' },
  'text-decorate': {
    opacity: '__opacity_shadow',
    color: 'textDecorationColor',
  },
};

const MATCH_SHORT_HEX = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
const MATCH_FULL_HEX = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

function hexToRgba(hex: string): string {
  try {
    const h = hex.replace(MATCH_SHORT_HEX, (_, r, g, b) => r + r + g + g + b + b);
    const result = MATCH_FULL_HEX.exec(h);
    if (!result) {
      return 'rgba(0, 0, 0, 1)';
    }

    const r = parseInt(result[1]!, 16);
    const g = parseInt(result[2]!, 16);
    const b = parseInt(result[3]!, 16);
    return `rgba(${r}, ${g}, ${b}, 1)`;
  } catch (e) {
    return 'rgba(0, 0, 0, 1)';
  }
}
function addOpacity(color: string, opacity: number): string {
  let c = color;
  if (color.startsWith('#')) {
    c = hexToRgba(color);
  } else if (color.startsWith('rgb(')) {
    c = color.replace(/^rgb\(/, 'rgba(').replace(/\)$/, `,1)`);
  }
  return c.replace(/, ?\d*\.?(\d+)\)$/, `,${opacity})`);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function color(
  type: keyof StyleProps,
  v: string,
  style: Record<string, string>,
  context: Record<string, any>,
): Record<string, string> {
  const extend = context.extend || {};
  const extendConfig = extend.color || {};
  const colorConfig = Object.assign({}, colorbase, extendConfig);
  // eslint-disable-next-line
  let value = v.replace(/^-/, '');
  const configValue = colorConfig[value];

  if (configValue) {
    const v = addOpacity(configValue, 1);
    if (v.startsWith('#') || v.startsWith('rgb')) {
      const colorProp = STYLE_PROPS[type];
      if (colorProp?.color) {
        style[colorProp?.color] = v;
      }
    }
  }

  if (configValue === 'transparent') {
    const colorProp = STYLE_PROPS[type];
    if (colorProp?.color) {
      style[colorProp?.color] = configValue;
    }
  }

  let shorthandOpacity: string | undefined = undefined;
  let color = null;

  if (value.includes('-')) {
    if (value.startsWith('color-')) {
      value = value.slice(6);
      const c = value.split('-');
      if (c.length > 2) {
        value = `color-${c[0]}-${c[1]}`;
        let opacity = 100;
        if (c[2] !== undefined) {
          opacity = parseInt(c[2]);
        }
        const v = colorConfig[value];
        if (!Number.isNaN(opacity) && v) {
          const cv = addOpacity(v, opacity / 100);
          const colorProp = STYLE_PROPS[type];
          if (colorProp?.color) {
            style[colorProp?.color] = cv;
          }
        }
      } else if (c.length === 2) {
        value = `color-${c[0]}`;
        let opacity = 100;
        if (c[1] !== undefined) {
          opacity = parseInt(c[1]);
        }
        const v = colorConfig[value];
        if (!Number.isNaN(opacity) && v) {
          const cv = addOpacity(v, opacity / 100);
          const colorProp = STYLE_PROPS[type];
          if (colorProp?.color) {
            style[colorProp?.color] = cv;
          }
        }
      }
    }
    const cValue = Object.keys(colorConfig).filter((item: string) => value.includes(item));
    if (cValue.length > 0) {
      const cArr = cValue.filter((item) => !isNaN(parseInt(value.replace(item, ''))));
      const key = cArr[0];
      if (key !== undefined && colorConfig[key]) {
        const v = colorConfig[key];
        let n = Math.floor(parseInt(value.replace(key, '')) || 100);
        if (parseInt(value.replace(key, '')) === 0) {
          n = 0;
        }
        const opacity = Math.abs(n);
        if (!Number.isNaN(opacity) && v) {
          const cv = addOpacity(v, opacity / 100);
          const colorProp = STYLE_PROPS[type];
          if (colorProp?.color) {
            style[colorProp?.color] = cv;
          }
        }
      }
    }
    const splitValues = value.split('-');
    if (splitValues.length === 2) {
      const [newValue, newShorthandOpacity] = splitValues;
      if (newValue) {
        color = colorConfig[newValue];
        shorthandOpacity = newShorthandOpacity;
      }
    }
  }

  if (shorthandOpacity === 'transparent') {
    const colorProp = STYLE_PROPS[type];
    if (colorProp?.color) {
      style[colorProp?.color] = 'transparent';
    }
  }

  if (shorthandOpacity && color) {
    const opacity = shorthandOpacity === 'black' ? 100 : Number(shorthandOpacity);
    if (!Number.isNaN(opacity)) {
      const v = addOpacity(color, opacity / 100);
      const colorProp = STYLE_PROPS[type];
      if (colorProp?.color) {
        style[colorProp?.color] = v;
      }
    }
  }

  if (value.includes('hsla')) {
    try {
      // eslint-disable-next-line
      const hslaConfig = value
        // eslint-disable-next-line
        .match(/\[([^hsla\[\]])*\]/g)![0]
        // eslint-disable-next-line
        .replace(/\[|\]/g, '')
        .split('/');
      if (hslaConfig.length === 0) return style;
      let H = hslaConfig[1] || '100';
      const H_ = parseInt(H);
      if (!Number.isFinite(H_)) return style;

      let S = hslaConfig[1] || '100';
      let S_ = parseInt(S);
      if (!Number.isFinite(S_)) return style;

      let L = hslaConfig[2] || '100';
      let L_ = parseInt(L);
      if (!Number.isFinite(L_)) return style;

      let A = hslaConfig[3] || '1';
      let A_ = parseInt(A);
      if (!Number.isFinite(A_)) return style;
      const colorProp = STYLE_PROPS[type];
      if (colorProp?.color) {
        style[colorProp?.color] = `hsla(${H_},${S_}%,${L_}%,${A_})`;
      }
    } catch (e) {}
  }

  if (value.startsWith('[#')) {
    value = value.slice(1, -1);
    const v = addOpacity(value, 1);
    const colorProp = STYLE_PROPS[type];
    if (colorProp?.color) {
      style[colorProp?.color] = v;
    }
  }

  if (value.startsWith('[rgb')) {
    value = value.slice(1, -1).replace(/\//g, ',');
    if (shorthandOpacity && value) {
      const opacity = Number(shorthandOpacity);
      if (!Number.isNaN(opacity)) {
        const v = addOpacity(value, opacity / 100);
        const colorProp = STYLE_PROPS[type];
        if (colorProp?.color) {
          style[colorProp?.color] = v;
        }
      }
    }
    if (value.startsWith('rgba')) {
      const a = value.slice(5, -1).split(',');
      if (a.length !== 4) return style;
      const R = a[0] || '250';
      const R_ = parseInt(R);
      if (R_ < 0 || R_ > 250) return style;
      const G = a[1] || '250';
      const G_ = parseInt(G);
      if (G_ < 0 || G_ > 250) return style;
      const B = a[2] || '250';
      const B_ = parseInt(B);
      if (B_ < 0 || B_ > 250) return style;
      const A = a[2] || '100';
      const A_ = parseInt(A);
      if (A_ < 0 || A_ > 100) return style;
      const v = addOpacity(`rgb(${R_},${G_},${B_})`, A_ / 100);
      const colorProp = STYLE_PROPS[type];
      if (colorProp?.color) {
        style[colorProp?.color] = v;
      }
    }
    const v = addOpacity(value, 1);
    const colorProp = STYLE_PROPS[type];
    if (colorProp?.color) {
      style[colorProp?.color] = v;
    }
  }

  return style;
}
