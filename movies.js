module.exports = {

    printAvatar: function{} {
        console.log("Avatar");
    },
    printChappie: function{}{
        console.log("chappie");
    },
    favMovie: "the movie"
};

//function printAvatar(){
//    console.log("Avatar");
//}

//function printChappie(){
//    console.log("chappie");
//}

module.exports.avatar = printAvatar;
module.exports.chappe = printChappie;

//module 10 - shared state of modules
module.exports = {
    favMovie: ""
};

//object factory (each module can have its own description thats is why we use this method this is another way of using the modules from the previos way)
module.exports = function () {
    return{
        favMovie: ""
    }
}