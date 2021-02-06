var maxSubArray = function(nums) {
  let dp = []
  dp[0] = nums[0]
  let max = nums[0];
  if(nums.length === 1) return nums[0]
  for(let i =1;i<nums.length;i++) {
      if(dp[i-1]>=0) {
          dp[i] = nums[i] + dp[i-1]
          console.log("》"+dp[i])
      }else {
        dp[i] = nums[i]
        console.log(dp[i])
      }
      max = Math.max(max,dp[i])
  }
  return max
};
console.log(maxSubArray([-2,-1]))