var divingBoard = function (shorter, longer, k) {
  let arr = []
  for (let i = k; i >= 0; i--) {
    let j = k - i
    arr.push(i * shorter + longer * j)
  }
  return arr
};
console.log(divingBoard(1, 2, 3))