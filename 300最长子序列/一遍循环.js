/**
 * @param {number[]} nums
 * @return {number}
 * 思路：需要一个存放扑克牌的堆，每个堆顶只能放最小的元素，堆的数量就是最大递增
 * nLogn = for循环嵌套二分
 * 二分是从top扑克牌中找到存放的堆
 */
// [10,11,2,5,3,7,101,18] , [10]
var lengthOfLIS = function (nums) {
  let top = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let left = 0;
    let right = count;
    while (left < right) {
      let mid = left + ((right - left) >> 1);
      if (top[mid] < nums[i]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    if (left === count) count++;
    top[left] = nums[i];
  }
  return count;
};
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([7, 7, 7]));
