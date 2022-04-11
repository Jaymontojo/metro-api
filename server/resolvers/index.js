const OperatorController = require('./Operators');
const LineController = require('./Lines');
const WardController = require('./Wards');
const StationController = require('./Stations');

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


