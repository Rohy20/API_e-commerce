const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '968722',
    database: 'e_commerce'
}); 

module.exports = connection;