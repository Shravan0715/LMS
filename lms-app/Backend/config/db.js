// need to be done
const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',         // Replace with your MySQL username
  password: 'root', // Replace with your MySQL password
  database: 'lms_db',   // Create this database in MySQL
});

module.exports = db;