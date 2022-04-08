const knex = require('knex');
require('dotenv').config();
const config = require('../knexfile');

const db = knex(config);
module.exports = db;