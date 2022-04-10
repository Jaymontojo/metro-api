module.exports = {
  types:`
    type Station {
      id: Int
      name_en: String!
    }
  `,

  queries:`
    Stations: [Station]
    Station(name_en: String): Station
  `,

  inputs:`
    input StationInput {
      id: Int
      name_en: String
    }
  `,

  mutations:`
    createStation(input: StationInput): String
    updateStation(name_en: String! edit: StationInput): String
    deleteStation(name_en: String!): String
  `
}