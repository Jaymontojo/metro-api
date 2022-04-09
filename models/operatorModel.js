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

  getOperator() {

  };

  createOperator() {

  };

  updateOperator() {

  };

  deleteOperator() {

  }
}

module.exports = new OperatorModel();