/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let map = new Map()
  for(let i = 0;i<nums.length;i++){
    if(map.has(nums[i])){
      map.get(nums[i])++
    }else {
      map.set(nums[i],1)
    }
  } 
  for(let i =0;i<nums.length;i++){
    max = Math.max(max,map.get(nums[i]))
  }

  return max
};

console.log(majorityElement([3,2,3]))