function get(object, path, defaultValue) {
  // 将路径字符串转换为数组
  const keys = path.split('.');

  // 遍历对象的属性
  let current = object;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    // 如果当前属性不存在，则返回默认值
    if (!current.hasOwnProperty(key)) {
      return defaultValue;
    }

    // 更新当前属性值
    current = current[key];
  }

  // 返回最终的属性值
  return current;
}