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

let count = 0;
export default {
  count,
  add: function(a, b) {
    count++;
    return a + b;
  }
}
// export count;
// export const add = 