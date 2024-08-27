/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var targetMap = new Map()
  for (var i = 0; i < nums.length; i++) {
    var key = target - nums[i]
    if (targetMap.has(key)) {
      return [targetMap.get(key), i]
    } else {
      targetMap.set(nums[i], i)
    }
  }
}

var nums = [2, 11, 7, 15]
var target = 9
console.log(twoSum(nums, target));