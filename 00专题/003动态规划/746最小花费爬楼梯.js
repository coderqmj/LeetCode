/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let dp = []
  if(cost.length < 2) return 0;
  dp[2] = Math.min(cost[0],cost[1]);
  dp[3] = Math.min(cost[1],cost[2]+dp[2])
  for(let i = 4;i<=cost.length;i++) {
    dp[i] = Math.min(dp[i-2]+cost[i-2],dp[i-1]+cost[i-1])
  }
  return dp[cost.length]
};

console.log(minCostClimbingStairs([1,0,0,1]))