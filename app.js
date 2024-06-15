//to display the variable element
var person = {
    firstName: "Bucky",
    LastName: "Nobert",
    age: 25
};

//to show a simple output
    console.log('hello');  

//to add two number 
function addnumber(a,b){
    return a+b;
}
console.log(addnumber(7,2));

// to use a variable to pass the output 
var PrintBacon = function(){
    console.log("bacon is the best man ");
};
PrintBacon();

// for food example
function placeAnOrder(orderNumber){
    console.log("customer order:", orderNumber);

    CookedDeliverFood{function() {
        console.log("delivered food order:", orderNumber);
    }};
}

//to simulate a 5 second operation 
function cookAndDeliverFood(callback){
    setTimeout(callback, 5000);
}

//Stimulate users web request 
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);

var Bucky = {
    favFood: "bacon",
    favMovie: "chappie"
};

var Person = Bucky;
Person.favFood="salad";
console.log(Bucky.favFood);

//there is a difference between == and === this is to where the both equals shows that the statement is true and the three === shows that its a false statement 
var Bucky = {
    printFirstName: function(){
        console.log("\n I am working ");
        console.log(this == global);
    }
};
Bucky.printFirstName();

//the default calling context is global 
function doSomethingWorthLess(){
    console.log("\n I am wothless");
    console.log("this == global ");
}
doSomethingWorthLess();

//prototype 
function User{}{
    this.name="";
    this.life=100;
    this.giveLife = function giveLife(targetPlayer){
        targetPlayer.life += 1;
        console.log(this.name + "gave 1 life to " + targetPlayer.name);
    }
}

var Bucky = new User();
var wendy = new User();
Bucky.name = "Bucky";
wendy.name = "Wendy";

Bucky.giveLife{wendy};
console.log{"bucky" + Bucky.life};
console.log{"wendy" + wendy.life};

//you can add the fucntions to the objects
User.prototype.uppercut = function uppercut (targetPlayer){
    targetPlayer.life -= 3;
    console.log(this.name + "just uppercutted " + targetPlayer.name);
};

wendy.uppercut(Bucky);
console.log("bucky" +Bucky.life);
console.log("wendy" +wendy.life);

//you canadd properties to all objects 
User.prototype.magic = 60;
console.log(Bucky.magic);
console.log(wendy.magic);

// there was another file made called the movies.js that has the function we are trying to import it here 
var movies = require('/movies');
movies.avatar();
console.log(movies);

//Module 10 - shared state of the module 
require('./chappie');
require('./bucky');