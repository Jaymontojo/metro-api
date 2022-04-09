exports.up = async function(knex) {
  return await knex.schema.renameTable('companies', 'operators')
};

exports.down = async function(knex) {
  return await knex.schema.renameTable('operators', 'companies')
};
