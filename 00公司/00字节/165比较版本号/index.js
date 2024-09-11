var compareInt = function(arr1,arr2){
  let len = Math.max(arr1.length,arr2.length)
  while(arr1.length < len) arr1.push(0)
  while(arr2.length < len) arr2.push(0)
  for(let i = 0; i < len; i++){
      if(arr1[i] > arr2[i]) return 1
      else if(arr1[i] < arr2[i]) return -1
  }
  return 0
}
var compareVersion = function(version1, version2) {
  let v1 = version1.split('.')
  let v2 = version2.split('.')
  v1 = v1.map((item)=>Number.parseInt(item))
  v2 = v2.map((item)=>Number.parseInt(item))
  return compareInt(v1,v2)
};