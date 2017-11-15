
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        {id: 1, first_name: 'Sigorney', last_name: 'Weaver', role: 'actor'},
        {id: 2, first_name: 'Dwayne', last_name: 'Johnson', role: 'actor'},
        {id: 3, first_name: 'Kevin', last_name: 'Hart', role: 'actor'},
        {id: 4, first_name: 'Dev', last_name: 'Patel', role: 'actor'},
        {id: 5, first_name: 'Yo-Landi', last_name: 'Visser', role: 'actor'},
        {id: 6, first_name: 'Robert', last_name: 'Downey Jr.', role: 'actor'},
        {id: 7, first_name: 'James', last_name: 'Cameron', role: 'director'},
        {id: 8, first_name: 'Ron', last_name: 'Clements', role: 'director'},
        {id: 9, first_name: 'Neill', last_name: 'Blomkamp', role: 'director'},
        {id: 10, first_name: 'John', last_name: 'Favreau', role: 'director'},
        {id: 11, first_name: 'Rawson Marshall', last_name: 'Thurber', role: 'director'}
      ]);
    });
};
