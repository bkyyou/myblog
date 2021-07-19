1. inquirer

交互式命令行工具

```js
inquirer.prompt([
    {
      name: 'tip',
      type: 'confirm',
      message: '确定继续吗？',
      default: true
    }
  ])
  .then(res => {
    console.log('res', res);
  })
```

```js
const promptList = [
  {
    type: 'input',
    message: '请设置名称:',
    name: 'name'
  },
  {
    type: 'list',
    message: '请选择水果:',
    name: 'fruit',
    choices: ['苹果', 'pear', 'banana']
  },
  {
    type: 'list',
    message: '选择类型:',
    name: 'type',
    choices: ['蔬菜', 'fruit']
  }, {
    type: 'checkbox',
    message: '多选',
    name: 'links',
    choices: ['apple', 'banana', '白菜']
  }
]

inquirer.prompt(promptList).then(result => {
  console.log(result)
  inquirer
    .prompt([
      {
        type: 'confirm',
        message: '确定吗 ？',
        name: 'sure',
        default: true
      }
    ])
    .then(res => {
      if (res.sure) {
        
      }
    })
})
```

2. ora

一个优雅的终端微调器, 用于node的控制台进度美化

```js
const ora = require('ora');
const spinner = ora();

// spinner.stop()

spinner.info('编译开始')
spinner.start('正在生成umd.js文件...')

if() {
  spinner.fail('生成umd.js文件失败')
  spinner.stop()
  return
}

spinner.succeed('生成umd.js文件成功')

```

3. rimraf

以包的形式包装rm -rf命令，用来删除文件和文件夹的，不管文件夹是否为空，都可删除.

```js
rimraf.sync(targetFile)
```

4. chalk

```js
const chalk = require('chalk');
chalk.red.bgCyan.bold(
  '--------缺少文件名---------\n' +
    '  eg. npm run build demo\n' +
    '-------------------------------------------'
)

chalk.red.bold('书写有误！');
chalk.yellow.bold('')
```

5. os

```js
// 临时工作目录（临时目录中随机生成一个目录）
const workspace = path.join(os.tmpdir(), nanoid())
```

6. compressing

```js
const zipStream = new compressing.zip.Stream()
zipStream.addEntry(path.join(workspace, 'index.js'))
zipStream.addEntry(path.join(workspace, 'index.min.js'))
zipStream.pipe(fs.createWriteStream(targetFile))
zipStream.on('error', function(err) {
  spinner.fail('生成zip出现错误')
  console.log(chalk.red.bold(err.message))
  rimraf.sync(workspace)
  // console.log(err)
  process.exit()
})
zipStream.on('end', function() {
  spinner.succeed('zip包生成成功')
  // 删除临时工作目录
  rimraf.sync(workspace)

  spinner.succeed('整个编译结束')
})
```