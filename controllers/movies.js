// controllers/movies.js
const MovieDb = require('moviedb-promise');

const moviedb = new MovieDb(process.env.SECRET_KEY);

module.exports = (app) => {
  // Index
  app.get('/', (req, res) => {
    const params = {
      query: '',
      language: 'en', // ISO 639-1 code
    };

    const queryString = req.query.term;
    params.query = queryString;

    // Check if the user has input a movie search term
    if (queryString) {
      moviedb.searchMovie(params)
        .then((response) => {
          res.render('movies/movies-index', {
            movies: response.results,
          });
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

  // MOVIE DETAIL
  app.get('/movies/:id', (req, res) => {
    const params = {
      query: '',
      language: 'en', // ISO 639-1 code
    };

    const queryString = req.query.term;
    params.query = queryString;

    // Check if the user has input a movie search term
    if (queryString) {
      moviedb.searchMovie(params)
        .then((response) => {
          res.render('movies/movies-index', {
            movies: response.results,
          });
        })
        .catch(console.error);
      // Show a list of the most recent movies ias default
    } else {
      moviedb.movieInfo(req.params.id)
        .then((movie) => {
          res.render('movies/movies-show', { movie });
        })
        .catch((err) => {
          if (err) {
            console.log('Error getting movie details', err.message);
          }
        });
    }
  });
};