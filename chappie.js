//this is the shared state of modules 
var movies = require('./movies');
movies.favMovie = "The notebook";
console.log("the fav movie of chappie is:" + movies.favMovie);