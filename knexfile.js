const env = require('dotenv')

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/people_movies'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
