/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
// const pathSum = (root, sum) => {
//   // 1. 设置结果集
//   const result = [];
//   // 2. 深度优先搜索：root -> 树；path -> 路径；treeSum -> 当前路径和
//   const recursion = (root, path, treeSum) => {
//     // 2.1 终止条件
//     if (!root) return;
//     // 2.2 路径添加一个元素
//     path.push(root.val);
//     // 2.3 计算当前路径总和
//     treeSum += root.val;

//     // 2.4 如果没有左子树和右子树（叶子节点）结果等于目标结果
//     if (!root.left && !root.right && treeSum === sum) {
//       result.push(path.slice());
//     } else {
//       // 2.6 进一步递归左子树和右子树
//       recursion(root.left, path, treeSum);
//       recursion(root.right, path, treeSum);
//     }
//     // 2.7 回溯
//     path.pop();
//   };
//   recursion(root, [], 0);

//   // 3. 返回结果
//   return result;
// };

var pathSum = function(root, targetSum) {
  if(!root) return []
  let res = [];
  dfs(root, [], 0);
  return res;
  function dfs(root, path, pathSum) {
    // 1.递归基
    if(!root) return;
    // 2.添加元素
    path.push(root.val);
    pathSum += root.val;
    // 3.条件成立
    if(!root.left && !root.right && pathSum === targetSum) {
      res.push(path.slice())
    }else {
      // 进入递归
      dfs(root.left, path, pathSum);
      dfs(root.right, path, pathSum);
    }
    // 4.撤销选择
    path.pop();
  }
};
