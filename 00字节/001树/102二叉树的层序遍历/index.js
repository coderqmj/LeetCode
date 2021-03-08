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
  if(!root) return [];
  let res = [];
  help(root, 0, res);
  return res;

  function help(root, step, res) {
      if(root){
          if(!res[step]) res[step] = [];
          res[step].push(root.val);
          help(root.left, step+1, res);
          help(root.right, step+1, res);
      }
  }
};


var levelOrder = function(root) {
  if(!root) return []
  let queue = [root]
  let res = []
  while(queue.length > 0){
    let len = queue.length
    let arr = []
    while(len){
      let node = queue.shift()
      arr.push(node.val)
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
      len--
    }
    res.push(arr)
  }
  return res
};
