//简单的服务
var http = require('http');
var url = require('url')
var util = require('util')
http.createServer(function (req, res) {
    req.setEncoding('utf-8')
    if (req.url === '/favicon.ico') {
        //去掉/favicon.ico 浏览器访问会请求一次做为网站图标
        res.end();
    } else
        var req_url = url.parse(req.url);
    if (req.method === 'GET') {
        console.log('GET')
        var pathname = req_url.pathname;
        if (pathname === '/index') {
            //通过pathNamep判断哪个接口的请求
            console.log(pathname)
            res.writeHead(200, {'Content-Type': 'text/text'});
            res.end(util.inspect(req_url, true));
        } else {
            res.end('other:' + pathname + "\n" + util.inspect(req_url, true))
        }
    } else {
        //POST
        console.log('POST')
        res.end()
    }
}).listen(9090)
    .on('error', function (e) {
        console.log(e.message);
    });
// __filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，
// 且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。
console.log(__filename)
console.log('Server running at http://localhost:9090');