/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function(nums) {
  let left;
  let right;
  let odd = 0;
  let even = 0;
  for(let i =1;i<nums.length;i++){
    left = i-1;
    right = i+1;
    let leftStep = 0;
    let rightStep =0;
    if(left>=0){
      leftStep = Math.max(nums[i]-nums[left]+1,0)
    }
    if(right<=nums.length-1){
      rightStep = Math.max(nums[i]-nums[right]+1,0)
    }
    if(i%2==1){
      odd += Math.max(rightStep,leftStep)
    }else{
      even += Math.max(rightStep,leftStep)
    }
  }

  return Math.min(odd,even)
};