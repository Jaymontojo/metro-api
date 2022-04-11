const Station = require('../entities/Stations');

module.exports = {
  Query: {
    Stations: (parent, args) => {
      return Station.getStations();
    },

    Station: (parent, args) => {
      return Station.getStation(args.name_en);
    },
  },

  Mutation: {
    createStation: (parent, args) =>{
      return Station.createStation(args.input);
    },

    updateStation: (parent, args) =>{
      return Station.updateStation(args.name_en, args.edit);
    },

    deleteStation: (parent, args) =>{
      return Station.deleteStation(args.name_en);
    },
  }
};