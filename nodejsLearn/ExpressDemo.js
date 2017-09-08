var express = require('express')
var app = new express()

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.get('/user/info', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/json'})
    var user = {
        name: 'viosonlee',
        age: 27
    }
    res.write(JSON.stringify(user))
    res.end()
})

app.post('/user/info',function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/json'})
    var user = {
        name: 'viosonlee',
        age: 26
    }
    res.write(JSON.stringify(user))
    res.end()
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})