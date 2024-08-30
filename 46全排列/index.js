/**
 * @param {number[]} nums
 * @return {number[][]}
 * @date 2021/02/26 17:12
 */
var permute = function (nums) {
    let res = [];
    dfs([], nums);
    return res;
    function dfs(child, nums) {
        if (child.length === nums.length) {
            res.push(child.slice());
        }
        for (let i = 0; i < nums.length; i++) {
            if (child.includes(nums[i])) continue; // 进入递归时，会存在重复元素
            child.push(nums[i]);  // 选择
            dfs(child, nums);  // 进入决策树
            child.pop();    // 撤销选择，进入下一个选择，[1,2,3] => [1,3,2]
        }
    }
};