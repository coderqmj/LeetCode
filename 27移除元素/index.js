var removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; i < nums.length; j++) {
    if (nums[j] != val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i
};