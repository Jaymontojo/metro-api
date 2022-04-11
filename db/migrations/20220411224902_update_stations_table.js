exports.up = async function(knex) {
  return await knex.schema
    .alterTable('stations', (table) => {
      table.integer('ward_id')
        .unsigned();
      table.foreign('ward_id')
        .references('id')
        .inTable('wards')
        .onDelete('cascade');
    });
};

exports.down = async function(knex) {
  return await knex.schema
    .alterTable('stations', (table) => {
      table.dropColumn('ward_id')
    });
};
