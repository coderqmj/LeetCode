/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  let map = new Map()
  let num1 = [...nums]
  let res = [];
  num1.sort((a,b) => a - b)
  for(let i =0;i<nums.length;i++){
    if(map.has(num1[i])){
      map.set(num1[i],map.get(num1[i]))
    }else{
      map.set(num1[i],i)
    }
  }

  for(let i =0;i<nums.length;i++){
    res.push(map.get(nums[i]))
  }
  return res;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))