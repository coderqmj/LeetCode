// 一个数组，找出每个数组元素右侧第一个比当前数大的数的下标，时间复杂度O(N)
// 输入[1, 3, 2, 5, 4, 6, 7, 10]，输出[1, 3, 3, 5, 5, 6, 7, -1]

function findIndex(nums) {
  const stack = [[0, nums[0]]];
  const res = Array(nums.length).fill(-1);
  for(let i =1;i<nums.length;i++) {
    while(stack.length && nums[i] > stack[stack.length-1][1]) {
      res[stack[stack.length-1][0]] = i;
      stack.pop();
    }
    stack.push([i, nums[i]]);
  }
  return res;
}

console.log(findIndex([1, 3, 2, 5, 4, 6, 7, 10]))