var request = require('request');
request('http://www.btmag.net/api/live.php', function (error, response, body) {
    if (!error) {
        var stringify = JSON.parse(body);
        console.log(stringify)
    } else {
        console.log('fail')
    }
});