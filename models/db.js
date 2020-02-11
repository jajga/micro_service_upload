const mysql = require('mysql');

//local mysql db connection
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'dbuser',
    password : 'pass',
    database : 'mydb'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;