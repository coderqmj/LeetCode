// 输入：两个数字x，y
// 输出：一个只包含字母a和字母b的随机字符串
// 要求：①字符串中必须有x个a，y个b ②输出的字符串中不能出现aaa和bbb
function generateRandomString(x, y) {
  // 构建基础字符串
  let baseString = "";
  while (x > 0 || y > 0) {
    if (x > 0) {
      baseString += "a";
      x--;
    }
    if (y > 0) {
      baseString += "b";
      y--;
    }
  }

  // 打乱字符串顺序
  let arr = baseString.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // 交换元素
  }

  // 返回打乱后的字符串
  return arr.join("");
}

// 示例
console.log(generateRandomString(10, 20)); // 输出可能是 "babaa"、"aabab" 等
