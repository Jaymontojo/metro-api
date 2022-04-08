const { gql } = require("apollo-server");

const typeDefs = gql`
  type Company {
    id: Int
    name_en: String!
  }

  type Line {
    id: Int
    name_en: String!
  }

  type Query {
    Companies: [Company]
    Company(name: String): Company
    Lines: [Line]
    Line(name: String): Line
  }

  input CompanyInput {
    id: Int
    name_en: String
  }

  input LineInput {
    id: Int
    name_en: String
  }

  type Mutation {
    createCompany(input: CompanyInput): String
    updateCompany(name: String! edit: CompanyInput): String
    deleteCompany(name: String): String
    createLine(input: LineInput): String
    updateLine(name: String! edit: LineInput): String
    deleteLine(name: String): String
  }
`
module.exports= typeDefs