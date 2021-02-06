var arrangeCoins = function (n) {
  let i = 1
  while (i * i + i < 2*n) {
      i++
  }
  return i - 1
};
console.log(arrangeCoins(8))