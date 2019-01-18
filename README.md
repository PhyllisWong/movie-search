# Movie Search
REST API built with Node, Express, Handlebars, and MongoDb.

### About
This web application uses MovieDb API to search for movies. Users will see a selection of misc movies that are currently playing in theaters. If the user would like to see specific movies, they need to type it in the search field. When a user clicks on a movie poster, it will take them to a detailed view of the movie with a description, release date, and popularity rating.

### Features
+ Search movies
+ Display movies
+ Get details about movies


### Install
````
git clone https://github.com/PhyllisWong/movie-search
npm install mocha --save
npm install
````

### .env 

You will need some variables that are located in the .env file. That data will be sent in the email.


### Start
````
nodemon server.js
````

The API runs on port ````3000```` by default.


### Testing
The tests for each version of the API can be found in ````vx/test````, and each route has its own test file. Functions used for testing the validity of each response can be found in ````validators.js````, and various settings in ````settings.js````.

To run the tests:

````
npm test
````

### Running in production
Both [forever](https://github.com/foreverjs/forever) and [pm2](https://github.com/Unitech/pm2) are great for keeping the API alive (and load balancing in the case of pm2).


### Author
[John J Czaplewski](https://github.com/jczaplew), with inspiration and assistance from [Puneet Kishor](http://punkish.org) and [Shanan Peters](http://strata.geology.wisc.edu).

### Funding
Development supported by NSF CAREER EAR-1150082 and NSF ICER-1440312.

### License
CC-BY for all code unique to this API.
