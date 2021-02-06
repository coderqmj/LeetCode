var foo = function(length,arr,sum) {
  let right = length -1;
  let left = 0;
  while(left<right) {
      let mid = left + (right-left)/2;
      if(arr[left]+arr[right]===sum) {
        // console.log(arr[left],arr[right])
          return [arr[left],arr[right]]
      }else if(arr[left]+arr[right]<sum) {
          left = mid;
      }else if(arr[left]+arr[right]>sum) {
          right = mid;
      }
  }
  return false;
}
