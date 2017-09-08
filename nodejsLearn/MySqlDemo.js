var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
})

function log(error, result, method) {
    if (error) {
        console.log("错误" + error.stack)
        return
    }
    console.log('--------------------------' + method + '----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
}

connection.connect()

//查
var sql = 'SELECT * FROM websites'
connection.query(sql, function (error, result) {
    log(error, result, "查")
})

//增
var addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)'
var addSqlParams = ['菜鸟工具', 'https://c.runoob.com', '123', 'CN']
connection.query(addSql, addSqlParams, function (error, result) {
    log(error, result, "增")
})

//改
var updateSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?'
var updateParams = ['菜鸟工具', 'http:m.baidu.com', 6]
connection.query(updateSql, updateParams, function (error, result) {
    log(error, result, "改")
})

//删
var delSQL = 'DELETE FROM websites WHERE Id = 6'
connection.query(delSQL, function (error, result) {
    log(error, result, "删")
})
connection.end()
