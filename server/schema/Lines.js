module.exports = {
  types:`
    type Line {
      id: Int
      name_en: String!
      operator_id: Int
      num_stations: Int
    }
  `,

  queries:`
    Lines: [Line]
    Line(name_en: String!): Line
  `,

  inputs:`
    input LineInput {
      id: Int
      name_en: String
      operator_id: Int
      num_stations: Int
    }
  `,

  mutations:`
    createLine(input: LineInput): String
    updateLine(name_en: String! edit: LineInput): String
    deleteLine(name_en: String!): String
  `
};