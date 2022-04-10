const OperatorController = require('./OperatorController');
const LineController = require('./LineController');
const WardController = require('./WardController');
const StationController = require('./StationController');

module.exports = {
  Query: {
    ...OperatorController.Query,
    ...LineController.Query,
    ...WardController.Query,
    ...StationController.Query,
  },

  Mutation: {
    ...OperatorController.Mutation,
    ...LineController.Mutation,
    ...WardController.Mutation,
    ...StationController.Mutation,
  }
};


