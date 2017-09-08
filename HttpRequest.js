var http = require('http');
var queryString = require('querystring');

var postData = queryString.stringify({
    'u': 'd',
    'p': '123',
    'gameCoreVersion': '1'
});
var options = {
    hostname: '120.24.85.206',
    path: '/user/login',
    method: 'POST',
    headers: {
        'Content-Type':'application/x-www-form-urlencoded'
    }
};
var req = http.request(options, function (res) {
    console.log('Status:' + res.statusCode + '\n');
    console.log('header:' + JSON.stringify(res.headers));
    res.on('data', function (chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    });
    res.on('end', function () {
        console.log('登陆成功');
    });
});
req.on('error', function (e) {
    console.log('登录出错：' + e.message);
});
req.write(postData);
req.end();