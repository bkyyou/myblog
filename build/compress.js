const {
  statSync,
  readdirSync,
  readFileSync,
  mkdirSync,
  mkdir,
  rmdirSync,
  rmdir,
  writeFileSync,
  writeFile
} = require('fs')
const {
  resolve
} = require('path')
const { execSync } = require("child_process");
const colors = require('colors-console');
const tinify = require("tinify");
tinify.key = 'x0FLDlV35RfZ6dq4VSTyHSHs318T8fwl';
const DIR_NAME = resolve(__dirname, 'images') // 未压缩之前的存放地址
const NEW_DIR_NAME = resolve(__dirname, 'new_images') // 压缩之后的图片地址
/**
* 
* @param {String} path  未压缩之前的存放地址
* @param {String} newFilePath 压缩之后的图片地址
*/
const compressDir = (path, newFilePath) => {
  const files = readdirSync(path) // 读取文件目录
  if (files.length > 0) {
      files.map(item => {
          let filePath = resolve(path, item) // 文件/文件夹地址
          let newPath = resolve(newFilePath, item) // 将要保存的文件/文件夹地址
          let stats = statSync(filePath) // 获取文件/文件夹的描述信息
          if (stats.isDirectory()) { // 如果是文件夹
              console.group(colors('cyan', `文件夹 ${item} 信息`));
              console.log(colors('cyan', `这是一个文件夹，地址为${filePath}`));
              console.log(colors('cyan', `新的地址为：${newPath}`));
              console.groupEnd();
              rmdir(newPath, { // 先删除，避免创建已有的文件时报错，造成阻塞
                  recursive: true // 设置该属性删除的时候将会遍历整个文件夹
              }, () => {
                  mkdir(newPath, (err) => {// 创建文件夹
                      if (err) throw err
                      console.log(colors('green', `创建成功：${newPath}`))
                      compressDir(filePath, newPath)  // 继续执行遍历文件夹，创建完整目录
                  })
              })
          } else if (stats.isFile()) { // 如果是文件
              console.group(colors('blue', `文件 ${item} 信息`));
              console.log(colors('blue', `这是一个文件，地址为${filePath}`));
              console.groupEnd();
              // 由于 
              let itemSplit = item.split('.')
              if (itemSplit[1] !== 'jpg' && itemSplit[1] !== 'png' && itemSplit[1] !== 'jpeg') { 
                  console.log(colors('red', `当前文件格式为${itemSplit[1]}，只支持压缩 jpg、png、jpeg 等！`));
                  return
              }
              const sourceData = readFileSync(filePath)
              tinify.fromBuffer(sourceData).toBuffer(function (err, resultData) {
                  if (err) throw err;
                  writeFile(newPath, resultData, (err) => {
                      if (err) throw err;
                      console.log(colors('yellow', `压缩并保存成功：${newPath}`));
                  });
              });
          }
      })
  }
}
// compressDir(DIR_NAME, NEW_DIR_NAME)

// const filePath = `/Users/j/Desktop/test/4.9.png`;
// const targetPath = `/Users/j/Desktop/test/4.9.jpg`;
function compressOneImg(filePath, targetPath) {
  const sourceData = readFileSync(filePath);
  tinify.fromBuffer(sourceData).toBuffer(function (err, resultData) {
      if (err) throw err;
      writeFile(targetPath, resultData, (err) => {
          if (err) throw err;
          console.log(colors('yellow', `压缩并保存成功：${targetPath}`));
          const [error, res] = execSync(`rm ${filePath}`);
          if (error) console.log(colors('red', error));
          console.log(colors('yellow', '已删除桌面图片'));
      });
  });
}

module.exports = {
  compressOneImg,
  compressDir
};
