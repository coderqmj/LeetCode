/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let res = [];
  for(let i =1;i<=nums.length;i++){
    if(!nums.includes(i)){
      res.push(i)
    }
  }

  return res;
};

findDisappearedNumbers([4,3,2,7,8,2,3,1])