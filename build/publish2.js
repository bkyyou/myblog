const Client = require('ssh2-sftp-client'); // 用了连接服务器进行文件or文件夹相关操作
const fs = require('fs');
// const shell = require('shelljs');
const readline = require('readline-sync')

// 可以通过 scp 直接传输
// scp -r dist/* root@10.18.254.252:/data/nginx/html/business/demo

// 因为ssh2-sftp-client需要连接远程服务器，所以我们需要告知这个包，连服务器的ip端口用户名密码
const config = {
  host: '1.116.142.138',
  port: '22',
  username: '', // root
  password: '',
  // 当然也可以使用私有Key
  // privateKey: fs.readFileSync('/path/to/private/key.pem').toString()
};

const allPath = {
  remoteName: '/tmp/test_nodejs_upload_dir', // 上传到服务器的位置
  locaPath:'../docs/.vuepress/components' // 本地打包文件的位置
}

config.username = readline.question('username:');
config.password = readline.question('password:',{hideEchoBack: true});


async function uploadLocalFolder(localFolderPath, remoteFolderPath) {
  const sftp = new Client(); // 实例化用于调用其自带的方法
  try {
    // console.log('删除本地文件')
    // await shell.rm('-rf', localFolderPath);
    // await fs.rename('./dist', './equipment', (err) => {
    //   if (err) throw err;
    //   console.log('文件夹名称已更改！');
    // });
    console.log('连接服务器...')
    await sftp.connect(config); // 使用上述配置连接远程服务器
    console.log('连接服务器成功')
    console.log('旧的文件夹删除...')
    try {
      await sftp.rmdir(remoteFolderPath, true); // 把旧的equipment删除掉
      console.log('旧的文件夹删除成功')
    } catch (err) {
      console.log(err)
      console.log('旧的文件夹删除失败')
    }
    console.log('新的文件夹开始上传')
    await sftp.uploadDir(localFolderPath, remoteFolderPath); // 新的equipment删除掉
    console.log('新的文件夹上传成功')
    // throw new Error('错错错错错.......') // 模拟报错
  } catch (err) {
    console.error(err)
  } finally {
    await sftp.end();
    console.log('脚本执行完毕')
  }
}

// 使用示例
uploadLocalFolder(allPath.locaPath, allPath.remoteName);