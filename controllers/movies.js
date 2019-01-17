/* eslint-disable no-console */
// controllers/movies.js
const MovieDb = require('moviedb-promise');
const moviedb = new MovieDb(process.env.SECRET_KEY);

module.exports = (app) => {
  app.get('/', (req, res) => {
    let params = {
      query: '',
      language: 'en', // ISO 639-1 code
    };

    const queryString = req.query.term;
    params.query = queryString;

    // Check if the user has input a movie search term
    if (queryString) {
      moviedb.searchMovie(params)
        .then((response) => {
          res.render('movies/movies-index', { movies: response.results });
        })
        .catch(console.error);
    // Show a list of the most recent movies ias default
    } else {
      moviedb.miscNowPlayingMovies()
        .then((response) => {
          res.render('movies/movies-index', {
            movies: response.results,
          });
        })
        .catch(console.error);
    }
  });
};
