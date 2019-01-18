// server.js
/* ************************
      DEPENDENCIES
************************ */
const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('morgan');
require('dotenv').config();

const app = express();


/* ************************
      MIDDLEWARE
************************ */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: 'hbs',
}));

app.set('view engine', 'hbs');

// Static content
app.use(express.static('./public'));

// load our routes and pass to our app
require('./controllers/movies')(app);


/* ************************
      DATABASE
************************ */
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
});
mongoose.set('debug', true);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`\n****** App listening on ${PORT} ******\n`);
});

module.exports = app;
