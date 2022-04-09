class OperatorModel {
  constructor() {
    this.db = require('../db/knex');
  }
  async getOperators() {
    try{
      const operators = await this.db('operators')
        .select('*')
        .timeout(1500);
      return operators;
    } catch(err) {
      return err
    };
  };

  async getOperator(operatorNameEN) {
    try{
      const operators = await this.db('operators')
        .select('*')
        .where('name_en', operatorNameEN)
        .timeout(1500);
      return operators[0];
    } catch(err) {
      return err
    };
  };

  async createOperator(input) {
    try {
      await this.db('operators')
        .insert(input)
        .timeout(1500);
      return "Successfully Created!";
    } catch(err){
      return err;
    };
  };

  async updateOperator(operatorNameEN, edit) {
    try{
      await this.db('operators')
        .where("name_en", operatorNameEN)
        .update("name_en", edit.name_en)
      return 'Successfully Updated!'
    } catch(err) {
      return err
    };
  };

  async deleteOperator() {

  }
}

module.exports = new OperatorModel();