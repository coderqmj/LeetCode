/**
 * @description: 快排  TC:O(n)  SC:O(logn)
 * @author: JunLiangWang
 * @param {*} nums 给定数组
 * @param {*} k    返回第k大元素
 * @return {*}
 */
/**
 * 本方案使用快速排序，快速排序的核心思想其实很简单，
 * 通过不断递归二分数组，直到仅为一个元素无法再分，
 * 直接返回由一个元素组成的数组，然后回溯阶段不断将
 * 两个有序数组合并为一个有序数组，最终即完成排序
 */
function findKthLargest(nums, k) {
  function recursion(left, right) {
    // 仅为一个元素无法再分，直接返回由一个元素组成的数组
    if (left == right) {
      // console.log("first");
      // console.log("left", left);
      // console.log("right", right);
      // console.log("[nums[left]]", [nums[left]]);
      return [nums[left]];
    }
    // 否则，继续二分
    let middle = Math.floor((left + right) / 2);
    // console.log("left", left);
    // console.log("right", right);
    // console.log("middle", middle);
    // console.log("nums", nums);
    // 返回 合并 二分后两个有序数组
    const recursion1 = recursion(left, middle);
    const recursion2 = recursion(middle + 1, right);
    console.log("recursion1", recursion1);
    console.log("recursion2", recursion2);
    return mergeSortedArray(recursion1, recursion2);
  }
  // 返回结果
  return recursion(0, nums.length - 1)[k - 1];
}
/**
 * @description: 合并两个有序数组
 * @author: JunLiangWang
 * @param {*} arr1 有序数组1
 * @param {*} arr2 有序数组2
 * @return {*}
 */
function mergeSortedArray(arr1, arr2) {
  // console.log("arr1", arr1);
  // console.log("arr2", arr2);
  let mergeArray = [],
    i = 0,
    j = 0;
  // 遍历两数组，将较大元素放入数组中
  while (arr1[i] != undefined && arr2[j] != undefined) {
    if (arr1[i] > arr2[j]) {
      mergeArray.push(arr1[i]);
      i++;
    } else {
      mergeArray.push(arr2[j]);
      j++;
    }
  }
  // 把剩余元素push到新数组中
  if (arr1[i] != undefined)
    for (; i < arr1.length; i++) mergeArray.push(arr1[i]);
  else for (; j < arr2.length; j++) mergeArray.push(arr2[j]);
  // console.log("mergeArray", mergeArray);
  // 返回合并后的数组
  return mergeArray;
}

// [3,2,1,5,6,4]

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
