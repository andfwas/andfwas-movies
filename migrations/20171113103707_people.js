
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('people', (table) => {
      table.increments()
      table.string('first_name')
      table.string('last_name')
      table.string('role')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('people')
  ])
};
