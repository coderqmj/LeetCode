/**
 * 缓存相同参数的 promise
 * @param func
 */
export default function memorize(targetFunc) {
  const func = targetFunc;
  func.cache = func.cache || {};
  return async (...args) => {
    // 这里的key就是一个签名档，也就是被缓存函数的参数
    const key = JSON.stringify(args);
    if (key in func.cache) {
      return func.cache[key];
    }
    func.cache[key] = (() => func(...args))(); // 这里是执行函数和缓存其Promise
    return func.cache[key].catch((e) => {
      delete func.cache[key];
      throw e;
    });
  };
}
