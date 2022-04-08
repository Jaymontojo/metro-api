const db = require("../db/knex")

module.exports = {
  Query: {
    Companies: async() => {
      const companies = await db.select('*').from('companies');
      return companies;
    }
  }
}