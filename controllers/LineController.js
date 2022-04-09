const Line = require('../models/LineModel');

module.exports = {
  Query: {
    Lines: (parent, args) => {
      return Line.getLines();
    },

    Line: (parent, args) => {
      return Line.getLine(args.name_en);
    },
  },

  Mutation: {
    createLine: (parent, args) =>{
      return Line.createLine(args.input);
    },

    updateLine: (parent, args) =>{
      return Line.updateLine(args.name_en, args.edit);
    },

    deleteLine: (parent, args) => {
      return Line.deleteLine(args.name_en);
    }
  }
};