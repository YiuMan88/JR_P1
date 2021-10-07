
var mysql = require('mysql');

exports.db_connect = function () {
    var db_connection = mysql.createConnection({
        host:'francis888.mysql.database.azure.com',
        user:"Francis@francis888",
        password:'Liangyaowen0213.',
        database:"jrp1"
        //debug    : 'true'
    });
    return db_connection;
};
