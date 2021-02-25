// var threeSumClosest = function (nums) {
//   let result = []
//   nums.sort(function (a, b) {   // 先排序
//     return a - b
//   })
//   for (let i = 0; i < nums.length - 2; i++) {
//     if (i === 0 || nums[i] !== nums[i - 1]) {  // 防止产生重复的数据，这一步非常重要！！
//       let start = i + 1, end = nums.length - 1
//       while (start < end) {
//         if (nums[i] + nums[start] + nums[end] === 0) {
//           result.push([nums[i], nums[start], nums[end]])
//           start++
//           end--
//           while (start < end && nums[start] === nums[start - 1]) { // 去重，非常重要
//             start++
//           }
//           while (start < end && nums[end] === nums[end + 1]) { // 去重非常重要
//             end--
//           }
//         } else if (nums[i] + nums[start] + nums[end] < 0) { // 小于零，left指针向右移动
//           start++
//         } else {  // 大于零，right指针向左移动
//           end--
//         }
//       }
//     }
//   }
//   return result
// };

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
      if (i === 0 || nums[i] !== nums[i - 1]) {
          let left = i + 1, right = nums.length - 1;
          while (left < right) {
              if (nums[i] + nums[left] + nums[right] === 0) {
                  res.push([nums[i], nums[left], nums[right]]);
                  left++;
                  right--;
                  while (left < right && nums[left] === nums[left - 1]) {
                      left++;
                  }
                  while (left < right && nums[right] === nums[right + 1]) {
                      right--;
                  }
              } else if (nums[i] + nums[left] + nums[right] < 0) {
                  left++;
              } else {
                  right--;
              }
          }
      }
  }
  return res;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]))