
const resolvePromise = (p2, x, resolve, reject) => {
  if (p2 === x) {
    console.error('error');
    return;
  }

  // let y;
  try {
    if (x instanceof MyPromise) {
      x.then((res) => {
        resolvePromise(p2, res, resolve, reject);
      }, reject)
    } else {  
      resolve(x);
    }
  } catch (error) {
    reject(error)
  }
}

class MyPromise {
  constructor(execl) {
    // pedding  pulfulled rejected
    this.state = 'pedding';
    this.value = '';
    this.resolveCbArr = [];
    this.rejectCbArr = []; 
    
    let resolve = res => {
      if (this.state === 'pedding') {
        this.state = 'pulfulled';
        this.value = res;
        // console.log('res', res);

        this.resolveCbArr.forEach(fun => fun())        
      }
    }
    let reject = res => {
      if (this.state === 'pedding') {
        this.state = 'rejected';
        this.value = res;

        this.rejectCbArr.forEach(fun => fun())        
      }
    }

    try {
      execl(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(onFullFilled, onRejected) {
    const p2 = new MyPromise((resolve, reject) => {
      let x;
      if (this.state === 'pulfulled') {
        setTimeout(() => {
          x = onFullFilled(this.value);
          resolvePromise(p2, x, resolve, reject);
        }, 0);
      }

      if (this.state === 'rejected') {
        setTimeout(() => {
          x = onRejected(this.value);
          resolvePromise(p2, x, resolve, reject);
        }, 0);
      }

      if (this.state === 'pedding') {
        this.resolveCbArr.push(() => {
          // setTimeout(() => {
            // console.log('this.value', this.value);
            x = onFullFilled(this.value);
            resolvePromise(p2, x, resolve, reject);
          // }, 0);
        })
        this.rejectCbArr.push(() => {
          // setTimeout(() => {
            x = onRejected(this.value);
            resolvePromise(p2, x, resolve, reject);
          // }, 0);
        })
      }
    })
    return p2
  }
}

new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 3000);
})
.then(res => {
  console.log(res);
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      reject(2)
    }, 2000);
  })
}, err => {

})
.then(res => {

}, err => {
  console.log(err);
})

