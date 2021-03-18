const util = require("util");
const mysql = require("mysql");

const connectionString = process.env.JAWSDB_URL || {
  host: "localhost",
  user: "root",
  password: "root",
  database: "notes"
}

const connection = mysql.createConnection(connectionString);

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;
