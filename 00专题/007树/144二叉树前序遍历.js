/**
 * @description 二叉树前序遍历
 * @url https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 * @date 2022-03-10
 */

// 版本一：递归
 var preorderTraversal = function(root) {
  const res = [];
  helper(root, res);
  return res;
};

const helper = (root, res) => {
  if(root === null) return;
  res.push(root.val);
  helper(root.left, res);
  helper(root.right, res);
}

// 版本二：递归
var preorderTraversal = function(root) {
  const res = [];
  const dfs = (root) => {
      if(root === null) return;
      res.push(root.val);
      dfs(root.left);
      dfs(root.right);
  }
  dfs(root)
  return res;
};
