class StationModel {
  constructor() {
    this.db = require('../../db/knex');
  };
  
  async getStations() {
    try{
      const stations = await this.db('stations')
        .select('*')
        .timeout(1500);
      return stations;
    } catch(err) {
      return err;
    };
  };

  async getStation(stationNameEN) {
    try{
      const stations = await this.db('stations')
        .select('*')
        .where('name_en', stationNameEN)
        .timeout(1500);
      return stations[0];
    } catch(err) {
      return err;
    };
  };

  async createStation(input) {
    try {
      await this.db('stations')
        .insert(input)
        .timeout(1500);
      return "Successfully Created!";
    } catch(err){
      return err;
    };
  };

  async updateStation(stationNameEN, edit ) {
    try{
      await this.db('stations')
        .where("name_en", stationNameEN)
        .update("name_en", edit.name_en)
        .timeout(1500);
      return 'Successfully Updated!';
    } catch(err) {
      return err;
    };
  };

  async deleteStation(stationNameEN) {
    try{
      await this.db('stations')
        .where('name_en', stationNameEN)
        .del()
        .timeout(1500);
        return 'Successfully Deleted!';
    } catch(err) {
      return err;
    };
  };
}

module.exports = new StationModel();