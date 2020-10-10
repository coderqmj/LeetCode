// 暴力递归
function changeMoney(n) {
  if (n < 1) return Number.POSITIVE_INFINITY;
  if (n === 25 || n === 20 || n === 5 || n === 1) return 1;
  let min1 = Math.min(changeMoney(n - 25), changeMoney(n - 20));
  let min2 = Math.min(changeMoney(n - 5), changeMoney(n - 1));
  return Math.min(min1, min2) + 1;
}

// 记忆化搜索
function changeMoney1(n) {
  if (n < 1) return Number.POSITIVE_INFINITY;
  let dp = [];
  if (n === 25 || n === 20 || n === 5 || n === 1) return 1;
  let min1 = Math.min(changeMoney(n - 25), changeMoney(n - 20));
  let min2 = Math.min(changeMoney(n - 5), changeMoney(n - 1));
  return Math.min(min1, min2) + 1;
}



// 递推，自底向上
function changeMoney2(n) {
  if (n < 1) return -1;
  let dp = [];
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    let min = Number.MAX_VALUE;
    if (i >= 1) min = Math.min(dp[i - 1], min);
    if (i >= 5) min = Math.min(dp[i - 5], min);
    if (i >= 20) min = Math.min(dp[i - 20], min);
    if (i >= 25) min = Math.min(dp[i - 25], min);
    dp[i] = min + 1;
  }
  return dp[n];
}

// 输出具体方案，币种
function changeMoney3(n) {
  if (n < 1) return -1;
  let coins = [];
  let dp = [];
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    let min = Number.MAX_VALUE;
    if (i >= 1 && dp[i - 1] < min) {
      min = dp[i - 1];
      coins[i] = 1;
    }
    if (i >= 5 && dp[i - 5] < min) {
      min = dp[i - 5];
      coins[i] = 5;
    }
    if (i >= 20 && dp[i - 20] < min) {
      min = dp[i - 20];
      coins[i] = 20;
    }
    if (i >= 25 && dp[i - 25] < min) {
      min = dp[i - 25];
      coins[i] = 25;
    }
    dp[i] = min + 1;
  }
  let res = [];
  res[0] = dp[n];
  while (n>0) {
    res.push(coins[n])
    n -= coins[n];
  }
  return res;
}
console.log(changeMoney3(19))