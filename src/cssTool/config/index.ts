/*
 * @Author: cuiwujie
 * @Date: 2021-08-13
 * @LastEditors: cuiwujie
 * @LastEditTime: 2022-04-06 14:52:01
 * @Description: 基础变量设置 字体大小，行高，颜色
 */

import { fontFamilyUtil } from '../utils';

interface Size {
  xs: number;
  sm: number;
  base: number;
  lg: number;
  xl: number;
  none: number;
  tight: number;
  snug: number;
  normal: number;
  relaxed: number;
  loose: number;
  [key: string]: number;
}

interface FontWeight {
  thin: string;
  extralight: string;
  light: string;
  normal: string;
  medium: string;
  semibold: string;
  bold: string;
  extrabold: string;
  black: string;
  abold: string;
  [key: string]: string;
}

interface FontFamily {
  light: string;
  regular: string;
  medium: string;
  din: string;
  semibold: string;
  [key: string]: string;
}

interface ColorDefault {
  blue_1: string;
  blue_2: string;
  blue_3: string;
  blue_4: string;
  Orange_1: string;
  Orange_2: string;
  Orange_3: string;
  Orange_4: string;
  cyan_1: string;
  cyan_2: string;
  cyan_3: string;
  cyan_4: string;
  green_1: string;
  green_2: string;
  green_3: string;
  green_4: string;
  red_1: string;
  red_2: string;
  red_3: string;
  red_4: string;
  gray_1: string;
  gray_2: string;
  gray_3: string;
  gray_4: string;
  gray_5: string;
  gray_6: string;
  gray_7: string;
  white: string;
  black: string;
  [key: string]: string;
}

interface ColorExtend {
  Extend_1: string;
  Extend_2: string;
  Extend_3: string;
  [key: string]: string;
}

interface ColorBase {
  // black: string;
  // blue: string;
  // orange: string;
  // red: string;
  // green: string;
  // purple: string;
  // yellow: string;
  // cyan: string;
  masked: string;
  title: string;
  body: string;
  desc: string;
  grey: string;
  border: string;
  underline: string;
  bg: string;
  'light-orange': string;
  'dark-orange': string;
  transparent: string;
  line: string;
}

interface FlexConfig {
  alignContentConfig: {
    center: string;
    start: string;
    end: string;
    between: string;
    around: string;
    evenly: string;
    [key: string]: string;
  };
  alignItemsConfig: {
    start: string;
    end: string;
    center: string;
    baseline: string;
    stretch: string;
    [key: string]: string;
  };
  alignSelfConfig: {
    auto: string;
    start: string;
    end: string;
    center: string;
    baseline: string;
    stretch: string;
    [key: string]: string;
  };
  justifyContentConfig: {
    start: string;
    end: string;
    center: string;
    between: string;
    around: string;
    evenly: string;
    [key: string]: string;
  };
  justifyItemsConfig: {
    start: string;
    end: string;
    center: string;
    stretch: string;
    [key: string]: string;
  };
  justifySelfConfig: {
    start: string;
    end: string;
    center: string;
    stretch: string;
    auto: string;
    [key: string]: string;
  };
  flexGrowShrinkConfig: {
    0: number;
    1: number;
    '': number;
    [key: string]: number;
  };
  flexDirectionWrapConfig: {
    row: string;
    'row-reverse': string;
    col: string;
    'col-reverse': string;
    wrap: string;
    'wrap-reverse': string;
    nowrap: string;
    [key: string]: string;
  };
  flexBoxConfig: {
    1: number;
    none: string;
  };
  flexBasisConfig: {
    0: number;
    1: number;
    '1/2': string;
    '1/3': string;
    auto: string;
    full: string;
    [key: string]: number | string;
  };
}

interface Direction {
  inherit: string;
  ltr: string;
  rtl: string;
  [key: string]: string;
}

const size: Size = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  none: 16,
  tight: 20,
  snug: 22,
  normal: 24,
  relaxed: 26,
  loose: 32,
};

const fontWeight: FontWeight = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
  abold: 'bold',
};

const fontfamily: FontFamily = {
  light: fontFamilyUtil['light'] || '',
  regular: fontFamilyUtil['regular'] || '',
  medium: fontFamilyUtil['medium'] || '',
  din: fontFamilyUtil['din'] || '',
  semibold: fontFamilyUtil['semibold'] || '',
};

const colorDefault: ColorDefault = {
  blue_1: '#0088FF',
  blue_2: '#33A0FF',
  blue_3: '#99CFFF',
  blue_4: '#E5F3FF',
  Orange_1: '#FF6600',
  Orange_2: '#FF8533',
  Orange_3: '#FFC299',
  Orange_4: '#FFEFE5',
  cyan_1: '#25C9FF',
  cyan_2: '#51D4FF',
  cyan_3: '#A8E9FF',
  cyan_4: '#E9F9FF',
  green_1: '#1CCD99',
  green_2: '#49D7AD',
  green_3: '#A4EBD6',
  green_4: '#E8FAF4',
  red_1: '#FF4434',
  red_2: '#FF695D',
  red_3: '#FFB4AE',
  red_4: '#FFECEA',
  gray_1: '#111E36',
  gray_2: '#464E64',
  gray_3: '#828CA0',
  gray_4: '#BFC5D2',
  gray_5: '#E6E9F0',
  gray_6: '#E6EBF5',
  gray_7: '#F8F9FC',
  white: '#FFFFFF',
  black: '#000000',
};

const colorExtend: ColorExtend = {
  Extend_1: '#FFE7CC',
  Extend_2: '#493422',
  Extend_3: '#2B2B2B',
};

const colorbase: ColorBase = {
  // blue: 'rgb(32,108,254)', // #206CFE
  // orange: 'rgb(255,102,0)', // #FF6600
  // red: 'rgb(252,10,10)', // #FC0A0A
  // green: 'rgb(28,205,153)', // #1CCD99
  // purple: 'rgb(118,94,238)', // #765EEE
  // yellow: 'rgb(255,204,37)', // #FFCC25
  // cyan: 'rgb(37,201,255)', // #25C9FF
  masked: '#000000',
  title: '#111E36',
  body: '#464E64',
  desc: '#828CA0',
  grey: '#BFC5D2',
  border: '#E6E9F0',
  underline: '#F0F3F8',
  bg: '#F8F9FC',
  'light-orange': '#FEEDEB',
  'dark-orange': '#FF4434',
  transparent: 'transparent',
  line: '#F1F2F6',
  ...colorDefault,
  ...colorExtend,
};

const flexConfig: FlexConfig = {
  alignContentConfig: {
    center: 'center',
    start: 'flex-start',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
  },
  alignItemsConfig: {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    baseline: 'baseline',
    stretch: 'stretch',
  },
  alignSelfConfig: {
    auto: 'auto',
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    baseline: 'baseline',
    stretch: 'stretch',
  },
  justifyContentConfig: {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
  },
  justifyItemsConfig: {
    start: 'start',
    end: 'end',
    center: 'center',
    stretch: 'stretch',
  },
  justifySelfConfig: {
    start: 'start',
    end: 'end',
    center: 'center',
    stretch: 'stretch',
    auto: 'auto',
  },
  flexGrowShrinkConfig: {
    0: 0,
    1: 1,
    '': 1,
  },
  flexDirectionWrapConfig: {
    row: 'row',
    'row-reverse': 'row-reverse',
    col: 'column',
    'col-reverse': 'column-reverse',
    wrap: 'wrap',
    'wrap-reverse': 'wrap-reverse',
    nowrap: 'nowrap',
  },
  flexBoxConfig: {
    1: 1,
    none: 'none',
  },
  flexBasisConfig: {
    0: 0,
    1: 4,
    '1/2': '50%',
    '1/3': '33.33%',
    auto: 'auto',
    full: '100%',
  },
};

const direction: Direction = {
  inherit: 'inherit',
  ltr: 'ltr',
  rtl: 'rtl',
};

export {
  colorDefault,
  colorExtend,
  colorbase,
  direction,
  flexConfig,
  fontWeight,
  fontfamily,
  size,
};
