function quickSort(arr) {
  if(arr.length === 1) return arr;
  let left = [];
  let right = [];
  let currentItem = arr.splice(0,1);
  for (let i = 0; i < arr.length; i++) {
    if(currentItem < arr[i]) {
      right.push(arr[i])
    }else {
      left.push(arr[i])
    }    
  }

  return quickSort(left).concat(currentItem,quickSort(right));
  // return [...quickSort(left),currentItem,...quickSort(right)]
}

console.log(quickSort([6,11,8,2,9,4,1,5,7,10,3]))

// function quickSort(arr) {
//   if(arr.length<=1){
//     return arr
//   }
//   let left = [];
//   let right = [];
//   current = arr.splice(0,1)
//   for(let i = 0;i<arr.length;i++) {
//     if(arr[i]<current) {
//       left.push(arr[i])
//     }else {
//       right.push(arr[i])
//     }
//   }

//   return quickSort(left).concat(current,quickSort(right)); 
// }