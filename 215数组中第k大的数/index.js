function findKthLargest(nums, k) {
  return quickSelect(nums, 0, nums.length - 1, nums.length - k);
}

function quickSelect(arr, left, right, indexToFind) {
  if (left === right) {
    return arr[left];
  }

  let pivotIndex = partition(arr, left, right);

  if (pivotIndex === indexToFind) {
    return arr[pivotIndex];
  } else if (pivotIndex < indexToFind) {
    return quickSelect(arr, pivotIndex + 1, right, indexToFind);
  } else {
    return quickSelect(arr, left, pivotIndex - 1, indexToFind);
  }
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let i = left;

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  [arr[i], arr[right]] = [arr[right], arr[i]];
  return i;
}

// 示例使用
let nums = [3, 2, 1, 5, 6, 4];
let k = 2;
console.log(findKthLargest(nums, k)); // 输出6
