const express = require('express')
const app = express()
const bodyParser = require('body-parser')


const movies = require('./routes/movies')
const actors = require('./routes/actors');
const directors = require('./routes/directors');

// app.set('views', path.join(__/dirname, 'views'))
app.set ('view engine', 'hbs')

app.get('/', (req, res) => {
  res.redirect('/movies')
})

app.use('/', movies)
app.use('/', actors)
app.use('/', directors)


module.exports = app
