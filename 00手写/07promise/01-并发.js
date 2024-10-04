// // 请求列表
// const requestList = [];

// // 为了方便查看，i从1开始计数
// for (let i = 1; i <= 100; i++) {
//   requestList.push(
//     () =>
//       new Promise((resolve) => {
//         setTimeout(() => {
//           console.log("done", i);
//           resolve(i);
//         }, Math.random() * 1000);
//       })
//   );
// }

// function promiseLimit(max) {
//   let waitList = [];
//   const pool = new Set();

//   const request = function (reqFn) {
//     return new Promise((resolve, reject) => {
//       const isFull = pool.size >= max;
//       const newReq = () => {
//         reqFn()
//           .then((res) => {
//             resolve(res);
//           })
//           .catch((err) => {
//             reject(err);
//           })
//           .finally(() => {
//             pool.delete(newReq);
//             let next = waitList.shift();
//             if (next) {
//               pool.add(next);
//               next();
//             }
//           });
//       };

//       if (isFull) {
//         waitList.push(newReq);
//       } else {
//         pool.add(newReq);
//         newReq();
//       }
//     });
//   };
//   return request;
// }
// const request = promiseLimit(10);
// requestList.forEach(async (req) => {
//   const res = await request(req);
//   console.log(res);
// });
function promiseLimit(limit = 2) {
  let exceCount = 0;
  let waitList = [];
  const request = (reqFn) => {
    console.log("reqFn", String(reqFn()));
    return new Promise((resolve, rejcet) => {
      const newFn = () => {
        reqFn()
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            rejcet(err);
          })
          .finally(() => {
            exceCount--;
            let next = waitList.shift();
            if (next) {
              exceCount++;
              console.log(exceCount);
              next();
            }
          });
      };
      if (exceCount >= limit) {
        waitList.push(newFn);
      } else {
        exceCount++;
        newFn();
      }
      // console.log(waitList);
    });
  };
  return request;
}

const limit = promiseLimit(2);

const p1 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(111);
    }, 10000);
  });

const p2 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(222);
    }, 2000);
  });
const p3 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(333);
    }, 5000);
  });
const p4 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(444);
    }, 1000);
  });
const p5 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(555);
    }, 7000);
  });
const p6 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(666);
    }, 3000);
  });

// 2 => 3 => 4 => 1 => 6 => 5

for (const task of [p1, p2, p3, p4, p5, p6]) {
  limit(task).then((res) => {
    console.log(res);
  });
}
