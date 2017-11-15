var express = require('express');
var router = express.Router();
var db = require('../db/connection')

router.get('/movies', (req, res) => {
  db.select().table('movies')
  .then((movies) => {
    res.render('movies', {movies: movies})
    console.log('Movies');
    console.log(movies)
  })
})

module.exports = router
