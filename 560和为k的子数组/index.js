/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const mp = new Map();
  mp.set(0, 1);
  let count = 0;
  let pre = 0;
  for (const x of nums) {
    pre = pre + x;
    if (mp.has(pre - k)) {
      count += mp.get(pre - k);
    }
    if (mp.has(pre)) {
      mp.set(pre, mp.get(pre) + 1);
    } else {
      mp.set(pre, 1);
    }
  }
  return count;
};

subarraySum([1, 2, 3], 3);
