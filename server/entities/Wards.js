class WardModel {
  constructor() {
    this.db = require('../../db/knex');
  };
  
  async getWards() {
    try{
      const wards = await this.db('wards')
        .select('*')
        .timeout(1500);
      return wards;
    } catch(err) {
      return err;
    };
  };

  async getWard(wardNameEN) {
    try{
      const wards = await this.db('wards')
        .select('*')
        .where('name_en', wardNameEN)
        .timeout(1500);
      return wards[0];
    } catch(err) {
      return err;
    };
  };

  async createWard(input) {
    try {
      await this.db('wards')
        .insert(input)
        .timeout(1500);
      return "Successfully Created!";
    } catch(err){
      return err;
    };
  };

  async updateWard(wardNameEN, edit ) {
    try{
      await this.db('wards')
        .where("name_en", wardNameEN)
        .update(edit)
        .timeout(1500)
      return 'Successfully Updated!';
    } catch(err) {
      return err;
    };
  };

  async deleteWard(wardNameEN) {
    try{
      await this.db('wards')
        .where('name_en', wardNameEN)
        .del()
        .timeout(1500)
        return 'Successfully Deleted!';
    } catch(err) {
      return err;
    };
  };
};

module.exports = new WardModel();