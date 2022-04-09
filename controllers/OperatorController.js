const Operator = require('../models/OperatorModel');

module.exports = {
  Query: {
    Operators: (parent, args) => {
      return Operator.getOperators();
    },

    Operator: (parent, args) => {
      return Operator.getOperator(args.name_en);
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
  }
};