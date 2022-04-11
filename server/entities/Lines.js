class LineModel {
  constructor(){
    this.db = require('../../db/knex');
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

  async getLine(lineNameEN){
    try{
      const lines = await this.db('lines')
        .select('*')
        .where('name_en', lineNameEN)
        .timeout(1500);
      return lines[0];
    } catch(err) {
      return err;
    };
  };
  
  async createLine(input){
    try {
      await this.db('lines')
        .insert(input)
        .timeout(1500);
      return "Successfully Created!";
    } catch(err){
      return err;
    };
  };

  async updateLine(lineNameEN, edit){
    try{
      await this.db('lines')
        .where("name_en", lineNameEN)
        .update(edit)
        .timeout(1500);
      return 'Successfully Updated!';
    } catch(err) {
      return err;
    };
  };

  async deleteLine(lineNameEN){
    try{
      await this.db('lines')
        .where('name_en', lineNameEN)
        .del()
        .timeout(1500);
        return 'Successfully Deleted!';
    } catch(err) {
      return err;
    };
  };
};

module.exports = new LineModel();