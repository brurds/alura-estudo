var mysql = require('mysql');

function createDBConnection(){
    return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'employees'
    });
}
module.exports = function(){
    return createDBConnection;
}
