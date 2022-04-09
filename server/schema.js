const { gql } = require("apollo-server");

const typeDefs = gql`
  type Operator {
    id: Int
    name_en: String!
  }

  type Line {
    id: Int
    name_en: String!
    operator_id: Int!
  }

  type Query {
    Operators: [Operator]
    Operator(name_en: String): Operator
    Lines: [Line]
    Line(name: String): Line
  }

  input OperatorInput {
    id: Int
    name_en: String!
  }

  input LineInput {
    id: Int
    name_en: String!
    operator_id: Int!
  }

  type Mutation {
    createOperator(input: OperatorInput): String
    updateOperator(name_en: String! edit: OperatorInput): String
    deleteOperator(name_en: String): String
    createLine(input: LineInput): String
    updateLine(name: String! edit: LineInput): String
    deleteLine(name: String): String
  }
`
module.exports= typeDefs