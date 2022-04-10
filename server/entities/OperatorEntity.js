module.exports = {
  types:`
    type Operator {
      id: Int
      name_en: String!
    }
  `,

  queries:`
    Operators: [Operator]
    Operator(name_en: String): Operator
  `,

  inputs:`
    input OperatorInput {
      id: Int
      name_en: String
    }
  `,

  mutations:`
    createOperator(input: OperatorInput): String
    updateOperator(name_en: String! edit: OperatorInput): String
    deleteOperator(name_en: String!): String
  `
};