import { secondScreenStatus } from './config'
export type secondScreenType = string | any;
// 字母
const isAlphabet = (s: string) => /[ABCDEFGHJKLMNPQRSTUVWXYZ]/.test(s);

//数字
const isNumber = (s: string) => /[0-9]/.test(s);
// 特殊字符
const isSpecialCharacters = (s: string) => /[港澳学警领挂使]/.test(s);

const judgeInput = (s: string, onlyAllows: secondScreenType): boolean => {
  console.log('===onlyAllows',s, isNumber(s), onlyAllows, onlyAllows === secondScreenStatus.NumberOnly);
  if (onlyAllows === secondScreenStatus.AllowAll) {
    return isAlphabet(s) || isNumber(s);
  } else if (onlyAllows === secondScreenStatus.AlphabetOnly) {
    return isAlphabet(s);
  } else if (onlyAllows === secondScreenStatus.NumberOnly) {
    return isNumber(s);
  } else if (onlyAllows === secondScreenStatus.AllowSpecialCharaters) {
    return isAlphabet(s) || isNumber(s) || isSpecialCharacters(s);
  } else if (onlyAllows === secondScreenStatus.NoNumberOnly) {
    return !isNumber(s);
  } else if (onlyAllows === secondScreenStatus.DisableAll){
    return false;
  }else if (typeof onlyAllows === 'string') {
    return onlyAllows.indexOf(s) !== -1;
  }else{
    return false;
  }
};
const mergeAndRemoveDuplicates = (stringsArray: any[]): string => {
  const mergedSet = new Set();
  stringsArray.forEach((str) => {
    if (str) {
      str.split('').forEach((word: string) => mergedSet.add(word));
    }
  });
  return Array.from(mergedSet).join('');
};
// 检测是否有英文字母超过两个
const isTwoOrMoreAbcVehicle = (plate: string) =>
  (plate.slice(2, 7).match(/[A-Za-z]/g) || []).length > 1;

// 替换字母部分
const removeLetters = (plate: string) =>
  plate.replace(/[A-Za-z]/g, '');
export {
  judgeInput,
  mergeAndRemoveDuplicates,
  isTwoOrMoreAbcVehicle,
  removeLetters,
}