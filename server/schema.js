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

  input CompanyInput {
    id: Int
    name_en: String
  }

  type Mutation {
    createCompany(input: CompanyInput): String
    updateCompany(name: String! edit: CompanyInput): String
    deleteCompany(name: String): String
  }
`
module.exports= typeDefs