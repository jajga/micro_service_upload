const mysql = require('mysql');

//local mysql db connection
const connection = mysql.createConnection({
    host     : '34.93.83.22',
    user     : 'bankbaba',
    password : 'Root@1122',
    database : 'micro_service'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;