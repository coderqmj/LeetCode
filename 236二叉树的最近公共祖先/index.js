/**
 * 思路
对于根节点 root，p、q 的分布，有两种可能：

p、q 分居 root 的左右子树，则 LCA 为 root。
p、q 存在于 root 的同一侧子树中，就变成规模小一点的相同问题。
定义递归函数
递归函数：返回当前子树中 p 和 q 的 LCA。如果没有 LCA，就返回 null。

从根节点 root 开始往下递归遍历……

如果遍历到 p 或 q，比方说 p，则 LCA 要么是当前的 p（q 在 p 的子树中），要么是 p 之上的节点（q 不在 p 的子树中），不可能是 p 之下的节点，不用继续往下走，返回当前的 p。

当遍历到 null 节点，空树不存在 p 和 q，没有 LCA，返回 null。

当遍历的节点 root 不是 p 或 q 或 null，则递归搜寻 root 的左右子树：

如果左右子树的递归都有结果，说明 p 和 q 分居 root 的左右子树，返回 root。
如果只是一个子树递归调用有结果，说明 p 和 q 都在这个子树，返回该子树递归结果。
如果两个子树递归结果都为 null，说明 p 和 q 都不在这俩子树中，返回 null。
链接：https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/solutions/241053/jsersi-lu-hao-li-jie-by-hyj8/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root) return null;
    if(root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if(left && right) {
      return root
    }
    if(left === null) return right
    return left;

};