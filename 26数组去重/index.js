// var removeDuplicates = function(nums) {
//   return Array.from(new Set(nums)).length
// };
// var nums = [1,1,2]
// console.log(removeDuplicates(nums));
// console.log(nums);

var removeDuplicates = function (nums) {
  let j = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1
};