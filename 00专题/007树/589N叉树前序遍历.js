/**
 * @description n叉树前序遍历
 * @url https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/submissions/
 * @date 2022-03-10
 */

// 递归
const preorder = (root) => {
  const res = [];
  helper(root, res);
  return res;
}

const helper = (root, res) => {
  if(root === null) return;
  res.push(res.val);
  for (const ch of root.children) {
    helper(ch, res);
  }
}

// 迭代
