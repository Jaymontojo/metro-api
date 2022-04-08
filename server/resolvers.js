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
      };
    },

    Company: async (parent, args) => {
      try{
        const company = await db('companies')
          .select('*')
          .where('name_en', args.name)
          .timeout(1500);
        console.log(company)
        return company[0];
      } catch(err) {
        return err
      };
    },

    Lines: async (parent, args) => {
      try{
        const lines = await db('lines')
          .select('*')
          .timeout(1500);
        return lines[0];
      } catch(err) {
        return err
      }
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
      try{
        await db('companies')
          .where("name_en", args.name)
          .update("name_en", args.edit.name_en)
        return 'Successfully Updated!'
      } catch(err) {
        return err
      }
    },

    deleteCompany: async(parent, args) =>{
      try{
        await db('companies')
          .where('name_en', args.name)
          .del();
          return 'Successfully Deleted!'
      } catch(err) {
        return err
      };
    },
  },
};