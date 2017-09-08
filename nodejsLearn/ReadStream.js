var fs = require('fs');
var str = ''
var readerStream = fs.createReadStream('file.txt')
readerStream.setEncoding('UTF8')
readerStream.on('data', function (chunk) {
    str += chunk
})
readerStream.on('end', function () {
    console.log(str)
})
readerStream.on('error', function (error) {
    console.log(error.stack)
})
console.log('执行完毕')

