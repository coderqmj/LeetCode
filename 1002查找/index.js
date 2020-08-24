/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  let res = [];
  let isInclude = true;
  for (let i = 0; i < A[0].length; i++) {
    for (let j = 1; j < A.length; j++) {
      isInclude = true
      if (!A[j].includes(A[0][i])) {
        isInclude = false;
        break;
      } else {
        A[j] = A[j].replace(A[0][i], '0')
      }
    }
    if (isInclude) {
      res.push(A[0][i])
      // isInclude = true
    }
  }

  console.log(A[1],A[2])
  return res
};
console.log(commonChars(
  ["bella","label","roller"]))