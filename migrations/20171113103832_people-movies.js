
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('people_movies', (table) => {
      table.increments()
      table.integer('person_id').references('people.id')
      table.integer('movie_id').references('movies.id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('people_movies')
  ])
};
