var express = require('express');
var router = express.Router();
var db = require('../db/connection')

router.get('/actors', (req, res) => {
  db.select('first_name', 'last_name', 'title').from('movies').innerJoin('people_movies', 'movies.id', 'people_movies.movie_id').innerJoin('people', 'people.id', 'people_movies.person_id').where('role', 'actor')
  .then((actors) => {
    res.render('actors', {actors: actors})
    console.log('Actors')
    console.log(actors);
  })
})

module.exports = router
