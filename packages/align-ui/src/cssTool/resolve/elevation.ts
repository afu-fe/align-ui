import { parseNumericValue } from '../utils';

const elevationConfig: Record<string, number> = {
  '0': 0,
  '10': 10,
  '20': 20,
  '30': 30,
  '40': 40,
  '50': 50,
  '60': 60,
  '70': 70,
  '80': 80,
  '90': 90,
  '100': 100,
};

export function elevation(value: string, style: Record<string, any>): Record<string, any> {
  const v = value.replace(/^-/, '');
  const configValue = elevationConfig[v];

  if (configValue !== undefined) {
    const parsedConfig = parseNumericValue(configValue.toString());
    if (parsedConfig !== null) {
      style['elevation'] = parsedConfig;
    }
  } else {
    const parsedArbitrary = parseNumericValue(v);
    if (parsedArbitrary !== null) {
      if (!isNaN(parsedArbitrary)) {
        // 添加额外的检查 parsedArbitrary !== null
        style['elevation'] = parsedArbitrary as number; // 使用类型断言将 parsedArbitrary 断言为 number 类型
      }
    }
  }

  return style;
}
