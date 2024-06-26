/**
 * 判断元素是否在数组最后一位
 * @param length 数组长度
 * @param i 循环下标
 * @returns
 */
export const last = (length: number, i: number) => length - 1 === i;

/**移动数据*/
export const move = <T = any>(dataArray: T[], moveIndex: number, toIndex: number) => {
  const { length } = dataArray;
  if (moveIndex < 0 || moveIndex >= length || toIndex < 0 || toIndex >= length) {
    return dataArray;
  }
  const item = dataArray[moveIndex];
  const diff = moveIndex - toIndex;

  if (diff > 0) {
    return [
      ...dataArray.slice(0, toIndex),
      item,
      ...dataArray.slice(toIndex, moveIndex),
      ...dataArray.slice(moveIndex + 1, length),
    ];
  }
  if (diff < 0) {
    return [
      ...dataArray.slice(0, moveIndex),
      ...dataArray.slice(moveIndex + 1, toIndex + 1),
      item,
      ...dataArray.slice(toIndex + 1, length),
    ];
  }
  return dataArray;
};
