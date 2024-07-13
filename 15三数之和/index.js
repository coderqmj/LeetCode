/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break; // 最左边的数字都大于0，说明相加肯定大于0
    // 如果遍历的数据，后面和前一个是一样的，则需要再往下遍历，否则第二次找到的会重复
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    //
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      let n2 = nums[start];
      let n3 = nums[end];
      if (nums[i] + nums[start] + nums[end] === 0) {
        res.push([nums[i], nums[start], nums[end]]);
        while (n2 === nums[start]) start++;
        while (n3 === nums[end]) end--;
      } else if (nums[i] + nums[start] + nums[end] < 0) {
        start++;
      } else {
        end--;
      }
    }
  }
  return res;
};

threeSum([-1, 0, 1, 2, -1, -4]);
