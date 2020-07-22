var minSteps = function(n) {
  let dp = []
  dp[0] = 0
  dp[1] = 0
  dp[2] = 2
  for(let i=3;i<=n;i++) {
      let min = i;
      for(let j=Math.ceil(i/2);j>=2;j--) {
          if(i%j===0) {
              min = dp[j] + i/j;
              break;
          }
      }
      dp[i] = min
  }
  return dp[n]
};
console.log(minSteps(9))