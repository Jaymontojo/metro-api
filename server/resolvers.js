const db = require("../db/knex");

module.exports = {
  Query: {
    Companies: async (parent, args) => {
      const companies = await db
        .select('*')
        .from('companies')
        .timeout(1500);
      return companies;
    },

    Company: async (parent, args) => {
      const company = await db
        .select('*')
        .from('companies')
        .where('name_en', args.name)
        .timeout(1500);
      console.log(company)
      return company[0];
    }
  },
}