//this is the shared state of modules 
movies.favMovie = "The notebook";
console.log("the fav movie of Bucky is:" + movies.favMovie);

//object factory 
var movies = require('./movies');
var BuckyMovie = movies();
BuckyMovie.favMovie = "God of wars";
console.log("the fav movie of chappie is:" + BuckyMovie.favMovie);