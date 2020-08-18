/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let result = Array(Math.max(num1.length, num2.length)).fill(0)
  num1 = num1.split('')
  num2 = num2.split('')
  let i = num1.length - 1;
  let j = num2.length - 1;
  while (i >= 0 && j >= 0) {
    if ((num1[i] + num2[j]) < 10) {
      result[i] = result[i] + num1[i] + num2[j]
    } else {
      result[i] = (num1[i] + num2[j]) - 10
      result[i - 1]++;

    }
    j--;
    i--;
  }

  if (i === -1) {
    for (let k = 0; k < j + 1; k++) {
      result[k] = num2[k]
    }
  } else if (j === -1) {
    for (let k = 0; k < j + 1; k++) {
      result[k] = num2[k]
    }
  }

  return result
};

