/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0;
  let minPrice = prices[0]
  
  // 数组解法
  for (let i = 1; i < prices.length; i++) {
    // if(prices[i]<minPrice) {
    //   minPrice = prices[i];
    // }else {
    //   maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    // }

    prices[i]<minPrice ? minPrice = prices[i] : maxProfit = Math.max(maxProfit, prices[i] - minPrice)
  }
  return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]))