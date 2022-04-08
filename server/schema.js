const { gql } = require("apollo-server");

const typeDefs = gql`
  type Company {
    id: Int
    name_en: String!
  }

  type Query {
    Companies: [Company]
    Company(name: String): Company
  }
`
module.exports= typeDefs