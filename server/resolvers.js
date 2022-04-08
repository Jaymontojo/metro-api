const db = require("../db/knex");

module.exports = {
  Query: {
    Companies: async (parent, args) => {
      try{
        const companies = await db('companies')
          .select('*')
          .timeout(1500);
        return companies;
      } catch(err) {
        return err
      }
    },

    Company: async (parent, args) => {
      const company = await db('companies')
        .select('*')
        .where('name_en', args.name)
        .timeout(1500);
      console.log(company)
      return company[0];
    }
  },
  Mutation: {
    createCompany: async(parent, args) =>{
      try {
        await db('companies')
          .insert(args.input)
          .timeout(1500);
        return "Successfully Created!";
      } catch(err){
        return err;
      }
    },
    updateCompany: async(parent, args) =>{

    },
    deleteCompany: async(parent, args) =>{

    }
  }
}