const mysql = require("mysql");
const db = require("../configs/db");
var hostname = "5-t.h.filess.io";
var database = "projectdb_answertake";
var port = "3307";
var username = "projectdb_answertake";
var password = "21dcba1445b51c25acd5c514ba0719eb5f966cd1";
module.exports = mysql.createConnection({
  host: hostname,
  user: username,
  password,
  database,
  port,
});
