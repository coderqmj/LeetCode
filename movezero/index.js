// // 函数表达式
// let moveZero; //undefined
// moveZero = (nums) => {
//   let notZeroArr = [],
//     zeroArr = [];
  
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == 0) {
//       zeroArr.push(0);
//     } else {
//       notZeroArr.push(nums[i]);
//     }
//   } 

//   return notZeroArr.concat(zeroArr);
// }
// console.log(moveZero([0,1,0,3,12]));
// // console.log('fdfdf')
// 函数表达式
         
var moveZeroes = function (nums) {
    // 定义一个慢指针
    var index = 0;
  
    for (var i = 0; i< nums.length; i++) {
      
      var num = nums[i]; //当前的每个值
      // 如果是0  index 不增加， 它就比i慢
      // 如果是0 留在nums数组中, index 做为下标， index++
      if (num != 0) {
        nums[index++] = num;
        // index++;
      }
      //0 length-index
     }
    for (var i = index; i < nums.length; i++) {
      nums[index++] = 0;
    }
  
  }

const nums = [0,1,0,3,17];
moveZeroes(nums);
console.log(nums);
