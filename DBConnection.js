// Calling in mySQL package.
var mysql = require('mysql');

// Settings for database connection.
var connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root'
  password : '0017',
  database : 'employee_db'
});

// Establish connection, or else throw error.
connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected!`);
    afterConnection();
});

module.exports = connection;