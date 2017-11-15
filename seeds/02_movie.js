
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, title: 'Ironman', genre: 'Action', year: '2008', director_id: '10'},
        {id: 2, title: 'Moana', genre: 'Family', year: '2016', director_id: '8'},
        {id: 3, title: 'Chappie', genre: 'Action', year: '2015', director_id: '9'},
        {id: 4, title: 'Aliens', genre: 'Horror', year: '1986', director_id: '7'},
        {id: 5, title: 'Central Intelligence', genre: 'Comedy', year: '2016', director_id: '11'}
      ]);
    });
};
