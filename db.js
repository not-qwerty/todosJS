const Pool = require('pg').Pool;
require('dotenv').config();

const dev = {
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_HOSTPG_PORT,
    database: process.env.PG_DATABASE,
};

const prod = {
    connectionString: process.env.DATABASE_URL, // heroku addons
}

const pool = new Pool(process.env.NODE_ENV === 'production' ? prod : dev);

module.exports = pool;