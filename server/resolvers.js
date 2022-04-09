const Operator = require('../models/OperatorModel');

module.exports = {
  Query: {
    Operators: (parent, args) => {
      return Operator.getOperators();
    },

    Operator: (parent, args) => {
      return Operator.getOperator(args.name_en);
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
      return Operator.createOperator(args.input);
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