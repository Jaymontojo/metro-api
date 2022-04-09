const OperatorController = require('./OperatorController');
const LineController = require('./LineController');

module.exports = {
  Query: {
    ...OperatorController.Query,
    ...LineController.Query
  },

  Mutation: {
    ...OperatorController.Mutation,
    ...LineController.Mutation
  }
};


