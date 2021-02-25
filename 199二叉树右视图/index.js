/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if(!root) return [];
  let res = [];
  dfs(root, 0, res);

  function dfs(root, step, res) {
     if(root) {
         if(res.length === step){  // 数组长度和step相等，说明是右视图
             res.push(root.val)
         }
         dfs(root.right, step+1, res);  // 必须是从右边开始，左边的话就是左视图了
         dfs(root.left, step+1, res);
     }
  }
  return res;
};