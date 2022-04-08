exports.up = async function(knex) {
  return await knex.schema
    .createTable('lines', (table) => {
      table.increments('id');
      table.string('name_en', 255).notNullable;
    })
};

exports.down = async function(knex) {
  return await knex.schema
    .dropTable('lines');
};
