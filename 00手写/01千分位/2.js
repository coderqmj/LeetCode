/**
 * @param {number} number
 * 1234567.89 => 1,234,567.89
 */
function thousandNumber(number) {
  const [intPart = "", floatPart = ""] = String(number).split(".");
  // 7654321
  const reverseInt = intPart.split("").reverse().join("");
  let res = "";
  for (let i = 0; i < reverseInt.length; i++) {
    if (i % 3 === 0 && i > 0) {
      res = res + ",";
    }
    res = res + reverseInt[i];
  }
  return res.split("").reverse().join("") + (floatPart ? "." + floatPart : "");
}

console.log(thousandNumber(234567.89));
