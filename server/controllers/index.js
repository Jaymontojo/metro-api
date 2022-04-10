const OperatorController = require('./OperatorController');
const LineController = require('./LineController');
const WardController = require('./WardController');

module.exports = {
  Query: {
    ...OperatorController.Query,
    ...LineController.Query,
    ...WardController.Query,
  },

  Mutation: {
    ...OperatorController.Mutation,
    ...LineController.Mutation,
    ...WardController.Mutation,
  }
};


