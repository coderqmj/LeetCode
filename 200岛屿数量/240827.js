const numIslands = (grid) => {
  const xLen = grid[0].length;
  let count = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < xLen; x++) {
      if (grid[y][x] === '1') {
        count++;
        dfs(y, x, grid)
      }
    }
  }
  return count;
}

function dfs(y, x, grid) {
  if (y < 0 || x < 0 || y >= grid.length || x >= grid[0].length || grid[y][x] === '0') return;
  grid[y][x] = '0';
  dfs(y - 1, x, grid)
  dfs(y + 1, x, grid)
  dfs(y, x - 1, grid)
  dfs(y, x + 1, grid)
}

console.log(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","1","1","0"]
]))