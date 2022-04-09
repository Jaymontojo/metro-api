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

  createOperator() {

  };

  updateOperator() {

  };

  deleteOperator() {

  }
}

module.exports = new OperatorModel();