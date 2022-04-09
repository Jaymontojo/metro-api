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

    Lines: (parent, args) => {
      return Line.getLines();
    },

    Line: (parent, args) => {
      return Line.getLine(args.name_en);
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

    createLine: (parent, args) =>{
      return Line.createLine(args.input);
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