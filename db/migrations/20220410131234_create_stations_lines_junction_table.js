exports.up = async function(knex) {
  return await knex.schema
    .createTable('stations_lines', (table) => {
      table.integer('station_id')
        .unsigned
        .notNullable
      table.integer('line_id')
        .unsigned
        .notNullable;
      table.primary(['station_id', 'line_id'], 'station_line_pk');
      table.foreign('station_id')
        .references('id')
        .inTable('stations')
        .onDelete('cascade');
      table.foreign('line_id')
        .references('id')
        .inTable('lines')
        .onDelete('cascade');
    })
};

exports.down = async function(knex) {
  return await knex.schema
    .dropTables('stations_lines');
}
