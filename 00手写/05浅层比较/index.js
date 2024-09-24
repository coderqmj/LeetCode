/**
 * 1.判断两个对象是否都引用同一个对象
 * 2.只有有一个不为对象或者一个为空，就比较失败，需要刷新
 * 3.取出所有的key，去比较他们的属性值
 */
function shallowEqual(objA, objB) {
  // 1.比较是否引用同一对象
  if (Object.is(objA, objB)) {
    return true;
  }

  // 比较是否为对象
  if (
    typeof objA !== "object" ||
    objA === null ||
    typeof objB !== "object" ||
    objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  for (let i = 0; i < keysA.length; i++) {
    if (
      !objB.hasOwnProperty(keysA[i]) ||
      !Object.is(objA[keysA[i]], objB[keysB[i]])
    ) {
      return false;
    }
  }

  return true;
}

// Object.is()的使用
const obj1 = {};
let obj2 = obj1;
console.log(Object.is(obj1, obj2)); // true 引用同一个对象

console.log(shallowEqual({ name: "11" }, { name: "11" }));
