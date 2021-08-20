const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "andi87KELI",
  database: "imageStorage",
});
conn.connect(function (err) {
  if (err) throw err;
  console.log("Connected successfully!");
});
module.exports = conn;
