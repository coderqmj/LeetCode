/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
  if(nums.length == 0) return 0;
  if(nums.length == 1) return nums[0];
  let dp = [];
  let max =0;
  dp[0] = nums[0]
  dp[1] = Math.max(dp[0],nums[1])
  for(let i = 2;i<nums.length;i++){
    dp[i] = nums[i]+dp[i-2] > dp[i-1]? nums[i]+dp[i-2] : dp[i-1]
  }
  for(let i=0;i<dp.length;i++){
    max = Math.max(max,dp[i])
  }
  return max
};

console.log(massage([2,7,9,3,1]))