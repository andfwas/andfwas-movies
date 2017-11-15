exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('people_movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('people_movies').insert([
        {id: 1, person_id: '1', movie_id: '4'},
        {id: 2, person_id: '2', movie_id: '2'},
        {id: 3, person_id: '2', movie_id: '5'},
        {id: 4, person_id: '3', movie_id: '5'},
        {id: 5, person_id: '4', movie_id: '3'},
        {id: 6, person_id: '5', movie_id: '3'},
        {id: 7, person_id: '6', movie_id: '1'},
        {id: 8, person_id: '7', movie_id: '4'},
        {id: 9, person_id: '8', movie_id: '2'},
        {id: 10, person_id: '9', movie_id: '3'},
        {id: 11, person_id: '10', movie_id: '1'},
        {id: 12, person_id: '11', movie_id: '5'}
      ]);
    });
};
