/**
 * @param {number[]} nums
 * @return {number}
 */
// var findLengthOfLCIS = function(nums) {
//   let dp = []
//   dp[0] = 1 
//   for(let i =1;i<nums.length;i++) {
//     if(nums[i]-nums[i-1]>0){
//       dp[i] = dp[i-1]+1
//     }else{
//       dp[i] = 1;
//     }
//   }
//   console.log(dp)
//   return dp.sort((a,b) => a - b)[dp.length-1]
// };
var findLengthOfLCIS = function(nums) {
  if(nums.length<1) return 0
  let count = 1;
  let max = 1;
  for(let i =1,len =nums.length ;i<len;i++) {
    if(nums[i]>nums[i-1]){
      count++
      max = Math.max(max,count)
    }else{
      count = 1
    }
  }
  return max
};
console.log(findLengthOfLCIS([1,3,5,4,2,3,4,5]))