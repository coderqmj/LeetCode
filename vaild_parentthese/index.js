/**
 * 
 */
// var valid = function(s){
//   var stack = []
//   length = s.length;
//   if (length==0) return true
//   for(i=0; i<length;i++){
//     if(s[i]=='(' || s[i]=='{' || s[i]=='['){
//       stack.push(s[i])
//     }else{
//       if(stack[stack.length-1]=='('&& s[i] ==')' ) stack.pop()
//       else if(stack[stack.length-1]=='['&& s[i] ==']' ) stack.pop()
//       else if(stack[stack.length-1]=='{'&& s[i] =='}' ) stack.pop()
//       else return false
//     }
//   }
//   return stack.length == 0 
// }
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const length = s.length;
  let stack = [];
  stack.push(s[0])
  if(stack[0] === ')' ||stack[0] === '}'|| stack[0] === ']' ) return false
  if(length === 0) return true
  for(let i = 1; i< length ; i++) {
    if(s[i] === '(' || s[i] === '{' ||s[i] === '[') stack.push(s[i])
    else if (s[i] === ')' && stack[stack.length-1] === '(' ) stack.pop()
    else if (s[i] === ']' && stack[stack.length-1] === '[' ) stack.pop()
    else if (s[i] === '}' && stack[stack.length-1] === '{' ) stack.pop()
    else return false
  }
  return stack.length === 0
};
console.log(isValid('[](}'))
