/**
 */
/**
 * https://leetcode.cn/problems/multiply-strings/
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";
  const result = new Array(num1.length + num2.length).fill(0);
  console.log(result);
  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      const mul = Number(num1[i]) * Number(num2[j]);
      const p1 = i + j;
      const p2 = i + j + 1;
      const sum = mul + result[p2];
      console.log("p2", p2);
      console.log("result[p2]", result[p2]);
      console.log("sum", sum);
      result[p1] += Math.floor(sum / 10);
      result[p2] = sum % 10;
    }
  }
  console.log("res", result);
  let finallyStr = "";
  result.forEach((num) => {
    if (!num && !finallyStr) {
    } else {
      finallyStr = finallyStr + String(num);
    }
  });
  return finallyStr ? finallyStr : "0";
};

multiply("9", "99");
