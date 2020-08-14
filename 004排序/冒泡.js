// function bubleSort(arr) {
//   let len = arr.length;
//   let temp;
//   for(let i = 0;i<len;i++) {
//     for(let j = i+1;j<len;j++){
//       if(arr[i]>arr[j]){
//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp
//       }
//     }
//   }
//   return arr
// }

function bubleSort(arr) {
  let len = arr.length;
  for(let i = 0;i<len;i++) {
    for(let j = i+1;j<len;j++){
      if(arr[i]>arr[j]){
        [arr[i],arr[j]] = [arr[j],arr[i]]
      }
    }
  }
  return arr
}

console.log(bubleSort([1,2,8,3,5,4]))