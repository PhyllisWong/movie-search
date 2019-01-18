# Movie Search
REST API built with Node, Express, Handlebars, and MongoDb.

## About
This web application uses MovieDb API to search for movies. Users will see a selection of misc movies that are currently playing in theaters. If the user would like to see specific movies, they need to type it in the search field. When a user clicks on a movie poster, it will take them to a detailed view of the movie with a description, release date, and popularity rating.

### Features
+ Search movies
+ Display movies
+ Get details about movies


## Install
````
git clone https://github.com/PhyllisWong/movie-search
cd movie-search
npm install
````

## Obfuscated Variables

You will need some variables that are located in the .env file. That data will be sent in the email.


## Start
````
nodemon server.js
````


## Port
The API runs on port ````3000```` by default.



### Testing
This API currently has 100% test coverage.

To run the tests:

````
npm test
````


### Author
[Phyllis Wong](https://github.com/PhyllisWong)


### License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
