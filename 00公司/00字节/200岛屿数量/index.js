/**
 * @param {character[][]} grid
 * @return {number}
 * @data 2021 02 26 00:10
 */
var numIslands = function(grid) {
  let count = 0;
  // 1.先从左到右，从上到下遍历所有元素
  for(let i =0;i<grid.length;i++) {
    for(let j = 0;j<grid[0].length;j++) {
      if(grid[i][j]=== '1') { // 等于1，就遍历他的上下左右，及它上下左右为1的上下左右，直到和第一个遇见的1关联的1都变为0
        count++;
        dfs(i,j,grid)
      }
    }
  }
  return count;

  /**
   * @description 将和1关联的上下左右的1都变为0，碰到0则跳出递归
   */
  function dfs(i, j, grid) {
    if(i<0 || j<0 || i>=grid.length || j>=grid[0].length|| grid[i][j]=== '0') return;
    grid[i][j] = '0';
    dfs(i, j+1, grid);
    dfs(i, j-1, grid);
    dfs(i-1, j, grid);
    dfs(i+1, j, grid);
  }
};

console.log(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]))
