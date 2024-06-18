/* eslint-disable no-prototype-builtins */
// export const firstScreen = [
//   ['京','津','渝', '沪','冀', '晋','辽','吉','黑'],
//   ['苏','浙','皖', '闽','赣', '鲁','豫','鄂','湘'],
//   ['粤','琼','川', '贵','云', '陕','甘','青','蒙',],
//   ['桂','宁','新', '藏','使'],
// ];
/**
  新能源车牌号规则：
  https://zh.wikipedia.org/wiki/中华人民共和国民用机动车号牌#新能源汽车号牌
 */
export const provinceSelect = [
  ['京', '津', '渝', '沪', '冀', '晋', '辽', '吉', '黑', '苏'],
  ['浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '粤', '琼'],
  ['川', '贵', '云', '陕', '甘', '青', '蒙', '桂', '宁', '新'],
  ['藏', '使'],
];
export const numberSelect = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['使', '0'],
];
export const numberAbcSelect = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ['港', '澳', '学', '警', '领', '挂'],
];
export const secondScreenStatus = {
  DisableAll: 'DisableAll',
  AllowAll: 'AllowAll',
  AlphabetOnly:  "AlphabetOnly",
  NumberOnly: 'NumberOnly',
  NoNumberOnly: 'NoNumberOnly',
  AllowSpecialCharaters: 'AllowSpecialCharaters'
}
export const AllowAll = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789';
export const AllowSpecialCharaters =
  'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789港澳学警领挂';
export const AllNumber = '0123456789';
// 新能源标识
export const newEnergyLetter = 'ABCDEFGHJK';
// 新能源汽车第8位
export const smallVehicleNewEnergy = '0123456789';
export type RulesType = {
  [key: string]: { rule: string };
};
export type ObjType = {
  [key: string]: any[]; // 或者具体的数组类型，根据你的需要
};

// 各地车辆号牌机关代号
export const rules: RulesType = {
  京: {
    rule: 'ABCDEFGHJKLMNPQRSTUWXZ',
  },
  津: {
    rule: 'ABCDEFGHJKLMNQR',
  },
  冀: {
    rule: 'ABCDEFGHJRTX',
  },
  晋: {
    rule: 'ABCDEFHJKLMNO',
  },
  蒙: {
    rule: 'ABCDEFGHJKLMO',
  },
  辽: {
    rule: 'ABCDEFGHJKLMNPV',
  },
  吉: {
    rule: 'ABCDEFGHJK',
  },
  黑: {
    rule: 'ABCDEFGHJKMNPR',
  },
  沪: {
    rule: 'ABCDEFGHJKLMN',
  },
  苏: {
    rule: 'ABCDEUFGHJKLMN',
  },
  浙: {
    rule: 'ABCDEFGHJKL',
  },
  皖: {
    rule: 'ABCDEFGHJKLMNPQRS',
  },
  闽: {
    rule: 'ABCDEFGHJKO',
  },
  赣: {
    rule: 'AMBCDEFGHJKLO',
  },
  鲁: {
    rule: 'ASRUCDEFYGVHJKLMNPQR',
  },
  豫: {
    rule: 'AVBCDEFGHJKLMNPQRSU',
  },
  鄂: {
    rule: 'AWBCDEFGHJKLMNOPQRS',
  },
  湘: {
    rule: 'ABCDEFGHJKLMNSU',
  },
  粤: {
    rule: 'ABCDEFGHJKLMNOPQRSTUVWXYZ',
  },
  桂: {
    rule: 'ABCDEFGJKLMNOPR',
  },
  琼: {
    rule: 'ABEFO',
  },
  渝: {
    rule: 'ABCDEFGH',
  },
  川: {
    rule: 'AGBCDEFHJKLMOQRSTUVWXYZ',
  },
  贵: {
    rule: 'ABCDEFGHJ',
  },
  云: {
    rule: 'ZCDEFGHJKLMNOPQRS',
  },
  藏: {
    rule: 'ABCDEFG',
  },
  陕: {
    rule: 'ABCDEFGHJKV',
  },
  甘: {
    rule: 'ABCDEFGHJKLMNP',
  },
  青: {
    rule: 'AOBCDEFGH',
  },
  宁: {
    rule: 'ABCDE',
  },
  新: {
    rule: 'ABCDEFGHJKLMNOPQRS',
  },
  使: {
    rule: AllNumber,
  },
};

export const getRuleConfig = (key: string) => {
  if (key === '使') {
    return [
      [rules[key]?.rule, AllNumber, AllNumber, AllNumber, AllNumber, AllNumber],
    ];
  } else if (key === '琼') {
    return [
      ['C', '1B345678F', AllowAll, AllowAll, AllowAll, AllowSpecialCharaters],
      ['C', 'X', 'S', AllowAll, AllowAll, AllowSpecialCharaters],
      ['D', '01234567', AllowAll, AllowAll, AllowAll, AllowSpecialCharaters],
      [
        rules[key]?.rule,
        AllowAll,
        AllowAll,
        AllowAll,
        AllowAll,
        AllowSpecialCharaters,
      ],
      [
        rules[key]?.rule,
        AllNumber,
        AllowAll,
        AllNumber,
        AllNumber,
        AllNumber,
        newEnergyLetter,
      ],
      [
        rules[key]?.rule,
        newEnergyLetter,
        AllNumber,
        AllNumber,
        AllNumber,
        AllNumber,
        AllNumber,
      ],
      [AllNumber, AllNumber, AllNumber, AllNumber, AllNumber, '领'],
    ];
  } else {
    return [
      [
        rules[key]?.rule,
        AllowAll,
        AllowAll,
        AllowAll,
        AllowAll,
        AllowSpecialCharaters,
      ],
      [
        rules[key]?.rule,
        AllNumber,
        AllowAll,
        AllNumber,
        AllNumber,
        AllNumber,
        newEnergyLetter,
      ],
      [
        rules[key]?.rule,
        newEnergyLetter,
        AllNumber,
        AllNumber,
        AllNumber,
        AllNumber,
        AllNumber,
      ],
      [AllNumber, AllNumber, AllNumber, AllNumber, AllNumber, '领'],
    ];
  }
};
// 合并配置项目
export const mergeLicensePlateRules = (obj1: ObjType, obj2: ObjType) => {
  const mergedObj: ObjType = { ...obj1 };
  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (mergedObj.hasOwnProperty(key)) {
        // 去重
        const mergedValue = mergedObj[key] || [];
        const value = obj2[key];
        value?.forEach((item) => {
          if (!mergedValue?.includes(item) && mergedValue) {
            mergedValue.push(item);
          }
        });
        mergedObj[key] = mergedValue;
      } else {
        // 新增
        mergedObj[key] = obj2[key]!; // 使用非空断言操作符 !
      }
    }
  }

  return mergedObj;
};

export const localConfig = (config: ObjType) => {
  const obj: ObjType = {};
  Object.keys(rules)?.forEach((item) => {
    obj[item] = getRuleConfig(item);
  });
  return mergeLicensePlateRules(obj, config);
};
