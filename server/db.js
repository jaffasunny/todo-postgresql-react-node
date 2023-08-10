const Pool = require("pg").Pool;
require("dotenv").config();

console.log(typeof process.env.DB_PASSWORD);

const pool = new Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT,
	database: process.env.DB_NAME,
});

module.exports = pool;
