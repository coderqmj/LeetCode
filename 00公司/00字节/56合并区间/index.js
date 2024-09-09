/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if(intervals.length<2) return intervals;
  intervals.sort((a,b) => a[0] - b[0]);

  let curr = intervals[0];
  let res = [];
  for(interval of intervals) {
    if(curr[1]>=interval[0]) {
      curr[1] = Math.max(curr[1], interval[1]);
    }else {
      res.push(curr);
      curr = interval;
    }
  }
  if(curr.length !== 0) res.push(curr);
  return res;
};  

console.log([1] == [1])

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))