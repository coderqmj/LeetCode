var findDuplicate = function(nums) {
  let map = new Map()
  for(let i=0;i<nums.length;i++) {
    // console.log(nums[i])
    if(map.has(nums[i])) {
      return nums[i]
    }
    map.set(nums[i])
  }
};
console.log(findDuplicate([1,3,4,2,2]))