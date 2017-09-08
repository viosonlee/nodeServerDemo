var fs = require('fs')
var data = '测试写入'

var writeStream = fs.createWriteStream('output.txt')

writeStream.write(data, 'UTF8')

writeStream.end()
writeStream.on('finish', function () {
    console.log('写入完成')
})
writeStream.on('error', function (e) {
    console.log(e.stack)
})
console.log('执行完毕')
