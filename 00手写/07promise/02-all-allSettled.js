function myAll(promises = []) {
  return new Promise((resolve, reject) => {
    const result = [];
    promises.forEach((promise) => {
      promise
        .then((res) => {
          result.push(res);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          if (result.length === promises.length) resolve(result);
        });
    });
  });
}

function myAllSettled(promises) {
  let result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise
        .then((res) => {
          result.push({ ststus: "fullfilled", res });
        })
        .catch((err) => {
          result.push({ ststus: "reject", res: err });
        })
        .finally(() => {
          if (result.length === promises.length) resolve(result);
        });
    });
  });
}

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(111);
  }, 1000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(222);
  }, 2000);
});
const p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(333);
  }, 3000);
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(444);
  }, 0);
});
myAll([p1, p2, p3, p4])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
myAllSettled([p1, p2, p3, p4]).then((res) => {
  console.log(res);
});
