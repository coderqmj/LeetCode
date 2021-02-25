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
var levelOrder = function (root) {
  if (!root) return [];
  let res = [];
  dfs(root, 0, res);
  return res;
  function dfs(root, step, res) {
  if (root) {
      if (!res[step]) res[step] = [];
      res[step].push(root.val);
      dfs(root.left, step + 1, res);
      dfs(root.right, step + 1, res);
  }
}
};
