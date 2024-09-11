/**
 * ['aaafsd', 'aawwewer', 'aaddfff'] => 'aa'
 */
function commonPrefix(strings) {
  if (!strings.length) return "";
  let prefix = strings[0];
  for (let i = 1; i < strings.length; i++) {
    while (strings[i].indexOf(prefix) !== 0) {
      // 如果当前字符串不是前缀，那就需要从后面开始缩短字符串，让长度减1
      prefix = prefix.slice(0, -1); // 意思减去最后一个字符
      if (prefix === "") return "";
    }
  }
  return prefix;
}

// console.log("aaddfff".indexOf("ff"));

// console.log("11111223".slice(0, -1));
console.log(commonPrefix(["aaafsd", "aawwewer", "aaddfff"]));
