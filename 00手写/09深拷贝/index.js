function isObject(obj) {
  return Object.prototype.toString.call(obj).includes("Object");
}

function deepClone(originValue, map = new WeakMap()) {
  if (!isObject(originValue)) {
    return originValue;
  }
  if (map.has(originValue)) {
    return map.get(originValue);
  }
  const newObj = {};

  map.set(originValue, newObj);

  for (const key in originValue) {
    newObj[key] = deepClone(originValue[key], map);
  }

  return newObj;
}

console.log(isObject({}));

let obj = {
  name: "qmj",
  age: 18,
  book: {
    name: "333",
    count: 111,
  },
};

obj.info = obj;

let newObj = deepClone(obj);

console.log("newObj", newObj);

console.log(newObj.book === obj.book);
