function findKthLargest(nums, k) {
  function sort(left, right) {
    if (left === right) return [nums[left]];
    const mid = ((left + right) / 2) | 0;
    return merge(sort(left, mid), sort(mid + 1, right));
  }
  return sort(0, nums.length - 1)[k - 1];

  function merge(leftArr, rightArr) {
    let left = 0;
    let right = 0;
    let mergeArr = [];
    while (leftArr[left] !== undefined && rightArr[right] !== undefined) {
      if (leftArr[left] > rightArr[right]) {
        mergeArr.push(leftArr[left]);
        left++;
      } else {
        mergeArr.push(rightArr[right]);
        right++;
      }
    }
    for (; left < leftArr.length; left++) {
      mergeArr.push(leftArr[left]);
    }
    for (; right < rightArr.length; right++) {
      mergeArr.push(rightArr[right]);
    }
    return mergeArr;
  }
}

// 示例使用
let nums = [3, 2, 1, 5, 6, 4];
let k = 2;
console.log(findKthLargest(nums, k)); // 输出6
