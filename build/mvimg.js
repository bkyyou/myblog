
const { exec } = require('child_process');
const { argv } = require('process');
const fs = require('fs');
const path = require('path');
const { compressOneImg } = require('./compress.js');
const colors = require('colors-console');

const arg = argv[2]
const desktopImage = `/Users/j/Desktop/${arg}.png`;
const target = "/Users/j/Desktop/my/myblog/docs/java/javaweb开发/imgs";
const targetImage = target + "/" + arg + ".jpg";
const sourceImage = `/Users/j/Downloads/${arg}.jpg`;

console.log(argv);
if (!arg) {
  console.log(colors('red', '图片必填名称'));
  process.exit();
}

if(!fs.existsSync(desktopImage)) {
  console.log(colors('red', '图片在桌面不存在'));
  return;
}

if(fs.existsSync(targetImage)) {
  console.log(colors('red', '图片名称在目标位置已经存在, 请检查'));
  return;
}

compressOneImg(desktopImage, targetImage);


// 以下是手动压缩 --start

// if(!fs.existsSync(sourceImage)) {
//   console.log('图片下载位置不存在');
//   return;
// }

// exec(`mv ${sourceImage} ${target}`);
// exec(`rm ${desktopImage}`);

// const delay = t => new Promise(res => setTimeout(res, t));

// let flag = false;
// const checkImg = async  () => {
//   flag = fs.existsSync(targetImage);
//   if (flag) {
//     console.log('文件存在');
//   } else {
//     console.log('文件不存在');
//   }
//   if (!flag) {
//     await delay(1000);
//   }
// }

// const startTime = Date.now();

// // while (!flag) {
// //   checkImg();
// //   console.log(3);
// //   if (Date.now() > startTime + 3000) {
// //     flag = true;
// //   }
// // }

// const start = async () => {
//   while (!flag) {
//     await checkImg();
//     if (Date.now() > startTime + 3000) {
//       flag = true;
//     }
//   }
// }
// // start()
// 手动压缩 --end
