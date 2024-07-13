/**
 * 最长连续序列
 * https://leetcode.cn/problems/longest-consecutive-sequence/?envType=study-plan-v2&envId=top-100-liked
 * 示例 1：
 * 输入：nums = [100,4,200,1,3,2]
  输出：4
  解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
  示例 2：
  输入：nums = [0,3,7,2,5,8,4,6,0,1]
  输出：9
 * 要求时间复杂度On
/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function (nums) {
//   if (!nums.length) return 0;
//   const sortArr = nums.sort((a, b) => a - b);
//   const uniqueArray = [...new Set(sortArr)];
//   const maxArr = [];
//   let finallyMax = 1;
//   let max = 1;
//   uniqueArray.forEach((item, index) => {
//     if (index > 0) {
//       if (item === uniqueArray[index - 1] + 1) {
//         max++;
//         console.log("if", item, max);
//       } else {
//         console.log("else", item);
//         maxArr.push(max);
//         finallyMax = Math.max(max, finallyMax);
//         max = 1;
//       }
//     }
//   });
//   finallyMax = Math.max(max, finallyMax);
//   return finallyMax;
// };

var longestConsecutive = function (nums) {
  if (!nums.length) return 0;
  const uniqueArray = new Set(nums);
  let res = 1;
  for (let i = 0; i < nums.length; i++) {
    if (!uniqueArray.has(nums[i] - 1)) {
      let x = nums[i];
      while (uniqueArray.has(x + 1)) {
        x++;
      }
      res = Math.max(res, x - nums[i] + 1);
    }
  }
  return res;
};
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
