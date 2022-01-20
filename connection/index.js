var mysql = require('mysql2/promise');

var con = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "admin123",
  database: "school",
});



module.exports = con;