/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let key = target - nums[i]
    if(map.has(key)) {
      return [i, map.get(key)]
    }else {
      map.set(nums[i], i)
    }
  }
};

console.log(twoSum([3,3], 6))