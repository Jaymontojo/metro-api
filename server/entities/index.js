const { gql } = require('apollo-server');
const Operator = require('./OperatorEntity');
const Line = require('./LineEntity');

const types = [];
const Query = [];
const input = [];
const Mutation= [];

const schemas = [Operator, Line];

schemas.forEach((schema) => {
  types.push(schema.types);
  Query.push(schema.queries);
  input.push(schema.inputs);
  Mutation.push(schema.mutations);
})

module.exports = gql`
  ${types.join("\n")}
  ${input.join("\n")}
  type Query{
    ${Query.join("\n")}
  }
  type Mutation {
    ${Mutation.join("\n")}
  }
`