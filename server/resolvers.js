const db = require("../db/knex");

module.exports = {
  Query: {
    Operators: async (parent, args) => {
      try{
        const operators = await db('operators')
          .select('*')
          .timeout(1500);
        return operators;
      } catch(err) {
        return err
      };
    },

    Operator: async (parent, args) => {
      try{
        const operators = await db('operators')
          .select('*')
          .where('name_en', args.name)
          .timeout(1500);
        return operators[0];
      } catch(err) {
        return err
      };
    },

    Lines: async (parent, args) => {
      try{
        const lines = await db('lines')
          .select('*')
          .timeout(1500);
        return lines;
      } catch(err) {
        return err
      };
    },

    Line: async (parent, args) => {
      try{
        const lines = await db('lines')
          .select('*')
          .where('name_en', args.name)
          .timeout(1500);
        return lines[0];
      } catch(err) {
        return err
      };
    },
  },

  Mutation: {
    createOperator: async(parent, args) =>{
      try {
        await db('operators')
          .insert(args.input)
          .timeout(1500);
        return "Successfully Created!";
      } catch(err){
        return err;
      };
    },

    updateOperator: async(parent, args) =>{
      try{
        await db('operators')
          .where("name_en", args.name)
          .update("name_en", args.edit.name_en)
        return 'Successfully Updated!'
      } catch(err) {
        return err
      };
    },

    deleteOperator: async(parent, args) =>{
      try{
        await db('operators')
          .where('name_en', args.name)
          .del();
          return 'Successfully Deleted!'
      } catch(err) {
        return err
      };
    },

    createLine: async(parent, args) =>{
      try {
        await db('lines')
          .insert(args.input)
          .timeout(1500);
        return "Successfully Created!";
      } catch(err){
        return err;
      };
    },

    updateLine: async(parent, args) =>{
      try{
        await db('lines')
          .where("name_en", args.name)
          .update("name_en", args.edit.name_en)
        return 'Successfully Updated!'
      } catch(err) {
        return err
      };
    },
  },
};