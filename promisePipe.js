/**
 *
 * @param {*} promises[]
 * return promise
 * desctiption: 串行执行promise
 */
function iteratorPromise(arr) {
  let res = Promise.resolve();

  arr.forEach(fn => {
    res = res.then(() => fn()); // 关键是 res=res.then... 这个逻辑
  });
}

let arr = [
  () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('run', Date.now());
        resolve();
      }, 2000);
    });
  },
  () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('run', Date.now());
        resolve();
      }, 2000);
    });
  },
  () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('run', Date.now());
        resolve();
      }, 2000);
    });
  },
];

iteratorPromise(arr);
