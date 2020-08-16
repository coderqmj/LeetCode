/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let dp = Array(nums.length+1-k).fill(0)
  for(let i =0,len = dp.length;i<len;i++){
    for(let j =i;j<k+i;j++){
      dp[i] = dp[i] + nums[j]
      console.log(dp[i],i,j)
    }
    console.log(i,dp[i])
  }
  max = dp.sort((a,b)=> a -b)[dp.length-1]
  console.log(dp,max,k)
  return max/k
};

console.log(findMaxAverage([1,12,-5,-6,50,3],4))