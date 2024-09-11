function findNums() {
  let result = [];
  for(let i =1000; i<990000;i++) {
    if(i.toString() === i.toString().split('').reverse().join('')) {
      result.push(Number(i))
    }
  }
  return result.length;
}

console.log(findNums())
console.log(typeof (10000).toString().split('').reverse().join(''))