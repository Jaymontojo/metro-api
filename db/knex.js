const knex = require('knex');
const config = require('../knexfile');
require('dotenv').config();

const db = knex(config);
module.exports = db;