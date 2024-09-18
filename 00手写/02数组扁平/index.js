/**
 * [[1,2],2,[3,4]]
 * return nums.flat();
 */
function flat(nums = []) {
  let res = [];
  nums.forEach((item) => {
    if (Array.isArray(item)) {
      res = res.concat(item);
    } else {
      res.push(item);
    }
  });
  return nums.flat();
}

Array.prototype.myFlat = function () {
  let arr = this;
  return arr
    .toString()
    .split(",")
    .map((item) => Number(item));
};

Array.prototype.myFlatByDepth = function (number = 1) {
  let arr = this;
  let res = [];
  arr.forEach((item) => {
    if (Array.isArray(item) && number) {
      console.log(111, item);
      number--;
      res = res.concat(item.myFlatByDepth(number));
    } else {
      res.push(item);
    }
  });

  return res;
};

console.log([1, [2, 3, [4, 5]]].myFlatByDepth(1));
console.log([1, [2, 3, [4, 5]]].flat(2));

// console.log([1, [2, 3, [4, 5]]].myFlat());

// console.log(
//   [[1, 2, [1, 2]], 2, [3, 4]]
//     .toString()
//     .split(",")
//     .map((item) => Number(item))
// );
// console.log(flat([[1, 2, [1, 2]], 2, [3, 4]]));
