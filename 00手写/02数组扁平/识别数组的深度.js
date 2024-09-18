function getArrayDepth(arr) {
  if (!Array.isArray(arr)) {
    return 0; // 如果不是数组，返回0
  }

  let maxDepth = 0;
  for (let item of arr) {
    maxDepth = Math.max(maxDepth, getArrayDepth(item));
  }

  return maxDepth + 1; // 当前层的深度加1
}

// 示例
const arr = [1, [2, [3, [4, 5]]]];
console.log(getArrayDepth(arr)); // 输出 4
