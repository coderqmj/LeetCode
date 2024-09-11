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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let result = [];
  dfs(root, 0, result);
  console.log(result);
  for (let i = 1; i < result.length; i++) {
    if (i % 2 !== 1) {
      result[i] = result[i].reverse();
    }
  }
  return result;
};
function dfs(root, setp, result) {
  if (root) {
    if (!result[setp]) result[setp] = [];
    result[setp].push(root.val);
    dfs(root.left, setp + 1, result);
    dfs(root.right, setp + 1, result);
  }
}
