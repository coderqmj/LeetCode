/**
 * 需要最先返回的，不管是成功还是失败
 */
function myRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise
        .then((res) => {
          resolve(res);
        })
        .catch((res) => {
          reject(res);
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

// Promise.race([p1, p2, p3, p4])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(res);
//   });

myRace([p1, p2, p3, p4])
  .then((res) => {
    console.log("resolve", res);
  })
  .catch((res) => {
    console.log("reject", res);
  });
