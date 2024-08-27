/**
 * @param {number[]} prices
 * @return {number}
 * 1.判断当前元素是否为目前最小price
 * 2.如果当前价格大于记录的最小price，就计算收益
 * 3.如果当前价格小于最小price，那就记录下来，然后去后面找收益
 * 4.时间复杂度O(n)
 */
var maxProfit = function(prices) {
  let max = 0;
  let minPrice = prices[0]
  for(let i=1;i<prices.length;i++) {
    if(minPrice>prices[i]) {
      minPrice = prices[i]
    }else {
      max = Math.max(max, prices[i] - minPrice)
    }
  }
  return max;
};

// 
var maxProfit = function(prices) {
  let max = 0;
  let prevMin = prices[0];
  for(let i =1;i<prices.length;i++) {
      if(prevMin < prices[i]) {
          max = Math.max(max, prices[i] - prevMin);
      }
      prevMin = Math.min(prevMin, prices[i])
  }
  return max;
};

console.log(maxProfit([7,1,5,3,6,4]))