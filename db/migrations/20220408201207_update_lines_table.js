exports.up = async function(knex) {
  return await knex.schema
    .alterTable('lines', (table) => {
      table.integer('operator_id')
        .unsigned()
        .notNullable();
      table.foreign('operator_id')
        .references('id')
        .inTable('companies')
        .onDelete('cascade');
  });
};

exports.down = async function(knex) {
  return await knex.schema
    .alterTable('lines', (table) => {
      table.dropColumn('operator_id')
    });
};
