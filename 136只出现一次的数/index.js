/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
          map.delete(nums[i])
      } else {
          map.set(nums[i], 1)
      }
  }
  for(let res of map.keys()) {
    return res;
  }
};

console.log(singleNumber([4,4,2,2,3]))