/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let j = 0;
  min = triangle[0][0]
  for(let i =1;i<triangle.length;i++) {
    min += Math.min(triangle[i][j],triangle[i][j+1])
    if(Math.min(triangle[i][j],triangle[i][j+1])===triangle[i][j+1]) {
      j +=1;
    }
  }
  return min
};
console.log(minimumTotal([
  [2],
 [3,4],
[6,5,7],
[4,1,8,3]
]))