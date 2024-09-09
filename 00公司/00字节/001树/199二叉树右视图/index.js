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

// BFS
var rightSideView = function(root) {
  if(!root) return []
  let queue = [root]                        // 队列 把树顶加入队列
  let arr = []                              // 用来存储每层最后个元素值
  while(queue.length > 0){
    let len = queue.length
    while (len) {
      let node = queue.shift()               // 取出队列第一个元素
      if(len === 1) arr.push(node.val)       // 当是 当前一层的最后一个元素时，把值加入arr
      if(node.left) queue.push(node.left)    // 继续往队列添加元素
      if(node.right) queue.push(node.right)
      len--
    }
  }
  return arr
};
