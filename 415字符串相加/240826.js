/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * 输入：num1 = "11", num2 = "123"
 * 输出："134"
 * 输入：num1 = "456", num2 = "77"
 * 输出："533"
 */

// 解析：1.长度没对齐需要在前面补0
// 2.然后个位对个位相加，看是否有进位，有就在下次相加时带上进位
// 3.需注意，遍历完返回时，需判断最后一次相加是否有进位，比如55+55，有进位返回时需要'1'+res;
var addStrings = function (num1, num2) {
  while (num1.length < num2.length) {
    num1 = '0' + num1;
  }
  while (num1.length > num2.length) {
    num2 = '0' + num2;
  }
  let isUp = false;
  let addIndex = num1.length - 1;
  let res = ''

  while (addIndex >= 0) {
    let sum = (Number(num1[addIndex]) + Number(num2[addIndex])) + (isUp ? 1 : 0);
    isUp = sum > 9;
    res = sum % 10 + res;
    addIndex--
  }
  return isUp ? '1' + res : res
};

console.log(addStrings("456", '77'))