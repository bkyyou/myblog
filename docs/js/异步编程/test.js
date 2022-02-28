
const resolvePromise = (p2, x, resolve, reject) => {
  if (p2 === x) {
    return reject(
      new TypeError('Chaining cycle detected for promise #<promise>')
    )
  }

  if (x instanceof myPromise) {
    try {
      x.then(res => {
        resolvePromise(p2, res, resolve, reject);
      }, reject);


      // x.then(resolve, reject);
    } catch (error) {
      reject(error);
    }
  } else {
    resolve(x);
  }
}

class myPromise {
  constructor(executor) {
    this.state = "pedding";
    this.value = "";
    this.reason = "";
    this.onFullFilledArr = [];
    this.onRejectedArr = [];

    const resolve = (value) => {
      if (this.state === "pedding") {
        this.state = "fullFilled";
        this.value = value;

        if (this.onFullFilledArr.length > 0) {
          this.onFullFilledArr.forEach((fun) => fun(value));
        }
      }
    };

    const reject = (reason) => {
      if (this.state === "pedding") {
        this.state = "rejected";
        this.reason = reason;

        if (this.onRejectedArr.length > 0) {
          this.onRejectedArr.forEach((fun) => fun(reason));
        }
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFullFilled, onRejected) {
    // debugger
    let p2 = new myPromise((resolve, reject) => {
      let x;
      if (this.state === "fullFilled") {
        setTimeout(() => {
          try {
            x = onFullFilled(this.value);
            resolvePromise(p2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }

      if (this.state === "rejected") {
        setTimeout(() => {
          try {
            x = onRejected(this.value);
            resolvePromise(p2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }

      if (this.state === "pedding") {
        this.onFullFilledArr.push(() => {
          setTimeout(() => {
            try {
              x = onFullFilled(this.value);
              resolvePromise(p2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
        this.onRejectedArr.push(() => {
          setTimeout(() => {
            try {
              x = onRejected(this.reason);
              resolvePromise(p2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });

    return p2;
  }
}

const p2 = new myPromise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    resolve(1)
  }, 3000);
})
.then(res => {
  console.log('resolve1', res);
  return new myPromise((resolve, reject) => {
    setTimeout(() => {
      resolve('p2')
    }, 1000);
  })
}, res => {
  console.log('reject1', res)
})
p2.then(res => {
  console.log('resolve2', res)
}, res => {
  console.log('reject2', res)
})

// const p2 = new Promise((resolve, reject) => {
//   resolve(1)
// })
// .then(res => {
//   console.log('resolve1', res)
//   // setTimeout(() => {
//   //   return Promise.reject();
//   // }, 1000);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(p2)
//     }, 1000);
//   })
// }, res => {
//   console.log('reject1', res)
// })
// p2.then(res => {
//   console.log('resolve2', res)
// }, res => {
//   console.log('reject2', res)
// })


