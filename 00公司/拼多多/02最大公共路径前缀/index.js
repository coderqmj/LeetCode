/**
 * https://juejin.cn/post/6844904137495150599
 * ['aa/bb/sd', 'aa/bb/wwewer', 'aa/bb/ddfff'] => 'aa/bb'
 */
function commonPathPrefix(paths) {
  if (!paths.length) return "";
  let maxPrefix = paths[0];
  for (let i = 1; i < paths.length; i++) {
    while (paths[i].indexOf(maxPrefix) !== 0) {
      maxPrefix = maxPrefix.slice(0, -1);
    }
  }
  return maxPrefix.slice(0, -1);
}

console.log(commonPathPrefix(["aa/bb/sd", "aa/bb/wwewer", "aa/bb/ddfff"]));
