module.exports = {
  types:`
    type Ward {
      id: Int
      name_en: String!
    }
  `,

  queries:`
    Wards: [Ward]
    Ward(name_en: String): Ward
  `,

  inputs:`
    input WardInput {
      id: Int
      name_en: String!
    }
  `,

  mutations:`
    createWard(input: WardInput): String
    updateWard(name_en: String! edit: WardInput): String
    deleteWard(name_en: String!): String
  `
}