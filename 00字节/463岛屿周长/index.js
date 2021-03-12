const islandPerimeter = (grid) => {
  let land = 0; // 土地个数
  let border = 0; // 接壤边界的条数

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        land++;
        if (i < grid.length - 1 && grid[i + 1][j] == 1) {
          border++;
        }
        if (j < grid[0].length - 1 && grid[i][j + 1] == 1) {
          border++;
        }
      }
    }
  }
  return 4 * land - 2 * border;
};


function all(promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let count = 0;
    for(let i=0;i<promises.length;i++) {
      promises[i].then((value) => {
        result[i] = value;
        if(++count === promises.length) {
          resolve(result);
        }
      }, (err) => {
        reject(err)
      })
    }
  })
}

function retry(fn, times, delay) {
  let foo = function () {
    if(times === 0) {
      return;
    }else {
      fn();
      time--;
      setTimeout(() => {
        foo();
      }, delay);
    }
  }
  foo();
}