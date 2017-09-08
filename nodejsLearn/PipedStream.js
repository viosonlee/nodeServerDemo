var fs = require('fs')
var str = ''
var readStream = fs.createReadStream('file.txt')
var writeStream = fs.createWriteStream('output.txt')
readStream.pipe(writeStream)
readStream.on('data', function (chunk) {
    str += chunk
})
readStream.on('end', function () {
    console.log(str)
})
readStream.on('error', function (error) {
    console.log(error.stack)
})
console.log('执行完成')