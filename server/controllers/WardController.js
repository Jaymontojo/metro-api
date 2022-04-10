const Ward = require('../models/WardModel');

module.exports = {
  Query: {
    Wards: (parent, args) => {
      return Ward.getWards();
    },

    Ward: (parent, args) => {
      return Ward.getWard(args.name_en);
    },
  },

  Mutation: {
    createWard: (parent, args) =>{
      return Ward.createWard(args.input);
    },

    updateWard: (parent, args) =>{
      return Ward.updateWard(args.name_en, args.edit);
    },

    deleteWard: (parent, args) =>{
      return Ward.deleteWard(args.name_en);
    },
  }
};