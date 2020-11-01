// var minSteps = function(n) {
//   let dp = []
//   dp[0] = 0
//   dp[1] = 0
//   dp[2] = 2
//   for(let i=3;i<=n;i++) {
//       let min = i;
//       for(let j=Math.ceil(i/2);j>=2;j--) {
//           if(i%j===0) {
//               min = dp[j] + i/j;
//               break;
//           }
//       }
//       dp[i] = min
//   }
//   return dp[n]
// };

/**
 * dp[i]含义：i个A所需要的步骤
 * 初始化：dp[0 || 1] = 0 dp[2] = 2
 * 状态转移：
 * @param {number[]} n 
 */
function minSteps(n) {
    let dp = [];
    dp[0] = 0;
    dp[1] = 0;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = i;
        for (let j = Math.ceil(i / 2); j > 2; j--) {
            if (i % j === 0) {
                dp[i] = dp[j] + i / j;
                break;
            }
        }
        
    }
    return dp[n];
}
console.log(minSteps(18))