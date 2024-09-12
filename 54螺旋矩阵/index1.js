/**
 * 题目：https://leetcode.cn/problems/spiral-matrix/
 *  matrix = [[1,2,3],[4,5,6],[7,8,9]]
 *  result => [1,2,3,6,9,8,7,4,5]
 */
var spiralOrder = function (matrix) {
  let res = [];
  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let left = 0;

  while (top < bottom && left < right) {
    for (let i = left; i < right; i++) res.push(matrix[top][i]); // 添加上面
    for (let i = top; i < bottom; i++) res.push(matrix[i][right]); // 右边
    for (let i = right; i > left; i--) res.push(matrix[bottom][i]); // 下
    for (let i = bottom; i > top; i--) res.push(matrix[i][left]); // 左
    top++;
    bottom--;
    right--;
    left++;
  }

  if (top === bottom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i])
    }
  } else if (left === right) {
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][left])
    }
  }
  return res

};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))