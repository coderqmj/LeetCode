/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

//  性能非常差
var longestCommonSubsequence = function(text1, text2) {
  if(text1.length===0 || text2.length === 0) return 0;
  var lsc = function(text1,i,text2,j) {
    if(i === 0|| j ===0) return 0
    if(text1[i-1] === text2[j-1]) {
      return lsc(text1,i-1,text2,j-1) + 1
    }
    return Math.max(lsc(text1,i-1,text2,j),lsc(text1,i,text2,j-1))
  }
  return lsc(text1,text1.length,text2,text2.length)
};

var longestCommonSubsequence1 = function(text1, text2) {
  if(text1.length===0 || text2.length === 0) return 0;
  let dp = new Array();
  for(let i = 0;i<=text1.length;i++) {
    dp[i] = new Array()
    for(let j = 0;j<=text2.length;j++) {
      dp[i][j] = 0;
    }
  }

  for(let i = 1;i<=text1.length;i++) {
    for(let j = 1;j<=text2.length;j++) {
      if(text1[i-1] === text2[j-1]) {
        dp[i][j] = dp[i-1][j-1]+1
      }else {
        dp[i][j] = Math.max(dp[i][j-1],dp[i-1][j])
      }
    }
  }
  return dp[text1.length][text2.length]
};


console.log(longestCommonSubsequence1("abcdefd","aced"))