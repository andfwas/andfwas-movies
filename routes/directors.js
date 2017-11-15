var express = require('express');
var router = express.Router();
var db = require('../db/connection')

router.get('/directors', (req, res) => {
  db.select('title', 'first_name', 'last_name').from('people').innerJoin('movies', 'people.id', 'movies.director_id')
  .then((directors) => {
    res.render('directors', {directors: directors})
    console.log('Directors');
    console.log(directors)
  })
})

module.exports = router
