var fs = require('fs');
fs.readFile('file.txt', function (error, data) {
    if (error) {
        console.log(error.stack);
        return
    }
    console.log(data.toString())
});
console.log('finish')