/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let res = [];
  nums1.map(item => {
    nums2.includes(item) && !res.includes(item) && res.push(item)
    // if(nums2.includes(item)) {
    //   res.push(item)
    // }
  })
  return res
};

console.log(intersection([2,2], [2,2]))