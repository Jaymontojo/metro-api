exports.up = async function(knex) {
  return await knex.schema
    .alterTable('lines', (table) => {
      table.integer('num_stations')
        .unsigned();
  });
};

exports.down = async function(knex) {
  return await knex.schema
    .alterTable('lines', (table) => {
      table.dropColumn('num_stations')
    });
};
