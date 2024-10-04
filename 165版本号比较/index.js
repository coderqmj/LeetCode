/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const v1 = version1.split(".");
  const v2 = version2.split(".");

  let maxLen = Math.max(v1.length, v2.length);

  for (let i = 0; i < maxLen; i++) {
    let v1Value = Number(v1[i]) || 0;
    let v2Value = Number(v2[i]) || 0;
    if (v1Value < v2Value) {
      return -1;
    } else if (v1Value > v2Value) {
      return 1;
    } else {
      // 相等
      continue;
    }
  }

  return 0;
};
