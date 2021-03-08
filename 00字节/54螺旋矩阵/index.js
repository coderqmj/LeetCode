/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let i = 0, 
      j = 0,
      res = [],
      row = matrix.length -1,  // 行数
      col = matrix[0].length - 1;  // 列数
  let turn = col === 0 ? 'down' : 'right';  // 列为0只能向下走，否则向右边走
  // 初始化上下左右边界，上边界 i=0, 下边界i=行数row，左边界j=0，右边界j=列数col
  let boundl = 0,
      boundr = col;
      boundu = 0,
      boundd = row;
  // 循环次数为行数*列数
  for(let item = 0; item < (row+1)*(col+1); item++) {
      res.push(matrix[i][j]);
      if(turn == 'right') {  // 方向往右边则，让列数向右移动
          j++;
          if(j===boundr){
              boundu++;
              turn = 'down'
          }
      }else if(turn == 'down') {
          i++;
          if(i==boundd){
              boundr--;
              turn = 'left'
          }
      }else if(turn == 'left') {
          j--;
          if(j==boundl){
              boundd--;
              turn = 'up'
          }
      }else if(turn == 'up'){
          i--;
          if(i==boundu){
              boundl++;
              turn = 'right'
          }
      }
  }
  return res;

};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))