class LineModel {
  constructor(){
    this.db = require('../db/knex');
  };
  async getLines(){
    try{
      const lines = await this.db('lines')
        .select('*')
        .timeout(1500);
      return lines;
    } catch(err) {
      return err
    };
  };

  async getLine(){

  };
  
  async createLine(){

  };

  async updateLine(){

  };

  async deleteLine(){

  };
};

module.exports = new LineModel();