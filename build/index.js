const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../docs/.vuepress/dist/index.html');

const _index = fs.readFileSync(targetFile)
              .toString()
              .replace(/"\/myblog\/api.png"/g, '"/myblog/myblog/api.png"')
              // .replace(/"\/myblog\/huahua.png"/g, '"/myblog/myblog/huahua.png"');

fs.writeFileSync(targetFile, _index);