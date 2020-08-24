/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if(nums.length==1) return nums[0]
  let map = new Map()
  for(let i = 0;i<nums.length;i++){
    if(map.has(nums[i])){
      map.set(nums[i],map.get(nums[i])+1)
      if(map.get(nums[i])>nums.length/2){
        return nums[i]
      }
    }else{
      map.set(nums[i],1)
    }
  }
  // map.forEach((value,key)=>{
  //   if(max<value){
  //     res = key;
  //     max = value
  //   }
  // })

  // return res
};
console.log(majorityElement([2,2,1,1,1,2,2]))