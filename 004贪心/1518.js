/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let max = numBottles;
  let left;
  while (numBottles / numExchange >= 1) {
    left = numBottles%numExchange
    numBottles = Math.floor(numBottles / numExchange) 
    max = max + numBottles
    numBottles = numBottles + left
  }
  return max
};

console.log(numWaterBottles(15, 4))