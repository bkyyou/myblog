// console.log(111, process.env.npm_package_name);
// const vue = require('vue');
// console.log('vue', vue);

// function createConstructor(subClass, superClass) {
//   const _subClass = function() {
//     subClass.call(this);
//     subClass.prototype = new superClass;
//   }
//   return _subClass;
// }

// new subClass()

// function inheritObject(p) {
//   function Fun() {};
//   Fun.prototype = p;
//   return new Fun();
// }

// function inheritPrototype(subClass, superClass) {
//   const p = inheritObject(superClass.prototype);
//   p.constructor = subClass;
//   subClass.prototype = p;
// }

// function SuperClass(name) {
//   this.name = name;
//   this.colors = ['red', 'blue', 'green'];
// }
// SuperClass.prototype.getName = function() {
//   console.log(this.name);
// }

// function SubClass(name, time) {
//   SuperClass.call(this, name);
//   this.time = time;
// }

// let count = 0;
// export default {
//   count,
//   add: function(a, b) {
//     count++;
//     return a + b;
//   }
// }
// export count;
// export const add = 

const fs = require('fs');
const path = require('path');

// const targetFile = path.join(__dirname, '../docs/.vuepress/dist/index.html');

console.log(parseInt("3c", 16));
console.log(110 .toString(2));
// console.log(fs.readFileSync(targetFile));


async function fun() {
    // const res = await fun2().then(res => {
    //     console.log(res);
    //     return 3
    // })
    try {
        const res = await fun2()
        console.log('res', res);
    } catch (error) {
        console.log('error', error);
    }
    // console.log(res);
}
function fun2() {
    // return new Promise((resolve, reject) => {
    //     reject(1)
    // }).then(() => {

    // }, () => {
    //     return 4
    // })
    return new Promise((resolve, reject) => {
        reject(1)
    }).then(() => {

    }).catch(res => {
        console.log(res, 'catch');
        return 22
    }).then(res => {
        console.log(res);
        return 33
    })
}

fun()