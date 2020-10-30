/**
 * @param {number[]} nums
 * @return {number}
 */

//  1.循环
var maximumProduct = function (nums) {
  nums.sort((a, b) => a - b);
  return Math.max(nums[0]*nums[1]*nums[nums.length-1],nums[nums.length-1]*nums[nums.length-2]*nums[nums.length-3]);
};

// 线性扫描
var maximumProduct1 = function (nums) {

  let min1 = Number.MAX_VALUE, min2 = Number.MAX_VALUE;
  let max1 = Number.MIN_VALUE, max2 = Number.MIN_VALUE, max3 = Number.MIN_VALUE;
  for (let i = 0;i<nums.length;i++) {
      if (nums[i] <= min1) {
          min2 = min1;
          min1 = nums[i];
      } else if (nums[i] <= min2) {     // n lies between min1 and min2
          min2 = nums[i];
      }
      if (nums[i] >= max1) {            // n is greater than max1, max2 and max3
          max3 = max2;
          max2 = max1;
          max1 = nums[i];
      } else if (nums[i] >= max2) {     // n lies betweeen max1 and max2
          max3 = max2;
          max2 = nums[i];
      } else if (nums[i] >= max3) {     // n lies betwen max2 and max3
          max3 = nums[i];
      }
  }
  return Math.max(min1 * min2 * max1, max1 * max2 * max3);
}

console.log(maximumProduct1([2,4,3,1]))