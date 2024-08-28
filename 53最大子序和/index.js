/**
 * 动态规划
 * 思路：1.动态规划，将所有元素的当前利益算出来，和最大值比较
 *
 */

var maxSubArray = function (nums) {
  let dp = [];
  let max = 0;
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] < 0) {
      dp[i] = nums[i];
    } else {
      dp[i] = dp[i - 1] + nums[i];
    }
    max = Math.max(max, dp[i]);
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
