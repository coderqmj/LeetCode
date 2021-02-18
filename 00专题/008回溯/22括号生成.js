/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = [];
  const dfs = (left, right, str) => {
      if(str.length === n*2){
          res.push(str);
          return;
      }
      if(left>0){
          dfs(left-1,right,str+'(');
      }
      if(left<right){
          dfs(left,right-1,str+')');
      }
  }
  dfs(n,n,'');
  return res;
};