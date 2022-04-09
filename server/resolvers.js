const Operator = require('../models/OperatorModel');
const Line = require('../models/LineModel');

module.exports = {
  Query: {
    Operators: (parent, args) => {
      return Operator.getOperators();
    },

    Operator: (parent, args) => {
      return Operator.getOperator(args.name_en);
    },

    Lines: async (parent, args) => {
      return Line.getLines();
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
    createOperator: (parent, args) =>{
      return Operator.createOperator(args.input);
    },

    updateOperator: (parent, args) =>{
      return Operator.updateOperator(args.name_en, args.edit);
    },

    deleteOperator: (parent, args) =>{
      return Operator.deleteOperator(args.name_en);
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