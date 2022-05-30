const str1 = require('./str.json');
const str2 = require('./str2.json');


const arr = [];

str1.data.records.forEach(val => {
  str2.data.records.forEach(value => {
    if (val.ruleSpecialRateId === value.ruleSpecialRateId) {
      arr.push(val.ruleSpecialRateId)
    }
  })
})

console.log(arr)