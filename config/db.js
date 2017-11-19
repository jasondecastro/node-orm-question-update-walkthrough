const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/questions_insert_lab.sqlite', sqlite3.OPEN_READWRITE);

module.exports = db;