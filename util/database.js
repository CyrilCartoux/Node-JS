const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node_complete',
    password: '',
    port: '3308'
});

module.exports = pool.promise();