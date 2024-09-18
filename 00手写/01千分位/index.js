/**
 * 1112345345.666 => 1,112,345,345.666
 */

function thousandNumber(number) {
  const [integerPart = "", floatPart = ""] = number.toString().split(".");
  let numArr = [];
  const integerPartArr = integerPart.split("").reverse();

  console.log("integerPartArr", integerPartArr);
  for (let i = 0; i < integerPartArr.length; i++) {
    if (i % 3 === 0 && i > 0) {
      numArr.push(",");
    }
    numArr.push(integerPartArr[i]);
  }
  console.log("numArr", numArr);
  return floatPart
    ? numArr.reverse().join("") + "." + floatPart
    : numArr.reverse().join("");
}
console.log(thousandNumber(112345345.2222));
