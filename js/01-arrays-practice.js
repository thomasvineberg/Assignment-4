/*eslint-env browser*/

/*

//STEP 1

var movies = ["Back to the Future", "The Thin Red Line", "King Kong", "Mulholland Drive", "No Country for Old Men"];
window.console.log(movies[1]);

//STEP 2

var movies2 = new Array(5);

movies2[0] = "Back to the Future";
movies2[1] = "The Thin Red Line";
movies2[2] = "King Kong";
movies2[3] = "Mulholland Drive";
movies2[4] = "No Country for Old Men";

window.console.log(movies2[0]);

//STEP 3

var movies3 = new Array(5);

movies3[0] = "Back to the Future";
movies3[1] = "The Thin Red Line";
movies3[2] = "King Kong";
movies3[3] = "Mulholland Drive";
movies3[4] = "Frozen";
movies3[5] = "No Country for Old Men";

window.console.log(movies3[0]);

window.console.log(movies3.length);

//STEP 4

var movies4 = ["Transformers", "Way of the Gun", "The Sound of Music", "Hombre", "High Noon"];

delete movies4[0];

window.console.log(movies4);

//STEP 5

var i;

var movies5 = ["Star Wars", "The Empire Strikes Back", "Return of the Jedi", "Attack of the Clones", "Revenge of the Sith", "The Force Awakens", "The Last Jedi"];

for (i = 0; i < movies5.length; i += 1) {
    window.console.log(movies5[i]);
}

//STEP 6

var index;

var movies6 = ["Star Wars", "The Empire Strikes Back", "Return of the Jedi", "Attack of the Clones", "Revenge of the Sith", "The Force Awakens", "The Last Jedi"];

for (index in movies6) {
    window.console.log(movies6[index]);
}

//STEP 7

var index2;

var movies7 = ["Star Wars", "The Empire Strikes Back", "Return of the Jedi", "Attack of the Clones", "Revenge of the Sith", "The Force Awakens", "The Last Jedi"];

movies7.sort();

for (index2 in movies7) {
    window.console.log(movies7[index2]);
}



//STEP 8

var i2;

var movies8 = ["Star Wars", "The Empire Strikes Back", "Return of the Jedi", "Attack of the Clones", "Revenge of the Sith", "The Force Awakens", "The Last Jedi"];

var badMovies = ["Stealth", "Warm Bodies", "I Heart Huckabees"];

window.console.log("Movies I like:");
window.console.log("");

for (i2 = 0; i2 < movies8.length; i2 += 1) {
    window.console.log(movies8[i2]);
}

window.console.log("");
window.console.log("Movies I regret watching:");
window.console.log("");

for (i2 = 0; i2 < badMovies.length; i2 += 1) {
    window.console.log(badMovies[i2]);
}


//STEP 9

var i2;

var movies8 = ["Star Wars", "The Empire Strikes Back", "Return of the Jedi", "Attack of the Clones", "Revenge of the Sith", "The Force Awakens", "The Last Jedi"];

var badMovies = ["Stealth", "Warm Bodies", "I Heart Huckabees"];

var movies = movies8.concat(badMovies);
movies.reverse();

for (i2 = 0; i2 < movies.length; i2 += 1) {
    window.console.log(movies[i2]);
}



//STEP 10

var movies8 = ["Star Wars", "The Empire Strikes Back", "Return of the Jedi", "Attack of the Clones", "Revenge of the Sith", "The Force Awakens", "The Last Jedi"];

var badMovies = ["Stealth", "Warm Bodies", "I Heart Huckabees"];

var movies = movies8.concat(badMovies);

movies = movies.pop();
window.console.log(movies);



//STEP 11


var movies8 = ["Star Wars", "The Empire Strikes Back", "Return of the Jedi", "Attack of the Clones", "Revenge of the Sith", "The Force Awakens", "The Last Jedi"];

var badMovies = ["Stealth", "Warm Bodies", "I Heart Huckabees"];

var movies = movies8.concat(badMovies);

movies = movies.shift();
window.console.log(movies);



//STEP 12

var movies8 = ["Star Wars", "The Empire Strikes Back", "Return of the Jedi", "Attack of the Clones", "Revenge of the Sith", "The Force Awakens", "The Last Jedi"];

var badMovies = ["Stealth", "Warm Bodies", "I Heart Huckabees"];

var movies = movies8.concat(badMovies);

window.console.log(movies.indexOf("Stealth"));
window.console.log(movies.indexOf("Warm Bodies"));
window.console.log(movies.indexOf("I Heart Huckabees"));

movies.splice(7, 8, "Executive Decision", "Zombieland", "The Big Lebowski");

window.console.log(movies);



//STEP 13

var employee1 = [];
employee1["id"] = 1987;
employee1["name"] = "Geordi La Forge";
employee1["title"] = "Chief Engineer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 1993;
employee2["name"] = "Jadzia Dax";
employee2["title"] = "Science Officer";
employee2["department"] = "Sciences";
employee2["isCurrent"] = false;

var employees = [employee1, employee2];

window.console.log(employees[1]["name"]);



//STEP 14

var i;

var employee1 = [];
employee1["id"] = 1987;
employee1["name"] = "Geordi La Forge";
employee1["title"] = "Chief Engineer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 1993;
employee2["name"] = "Jadzia Dax";
employee2["title"] = "Science Officer";
employee2["department"] = "Sciences";
employee2["isCurrent"] = false;

var employees = [employee1, employee2];

for (i = 0; i < employees.length; i += 1) {
    window.console.log(employees[i]["name"]);
}

*/
/*

//STEP 15

// NOT DONE YET -------------------------------------------------------------------------

var employee1 = [];
employee1["id"] = 1987;
employee1["name"] = "Geordi La Forge";
employee1["title"] = "Chief Engineer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 1993;
employee2["name"] = "Jadzia Dax";
employee2["title"] = "Science Officer";
employee2["department"] = "Sciences";
employee2["isCurrent"] = true;

var employee3 = [];
employee3["id"] = 1966;
employee3["name"] = "James Kirk";
employee3["title"] = "Captain";
employee3["department"] = "Command";
employee3["isCurrent"] = false;


var employees = [employee1, employee2, employee3];

for (var i = 0; i < employees.length; i += 1) {
    if (employees[i].isCurrent === true) {
    window.console.log(employees[i]["name"]);
    } 
}


/*


var currentEmployees = employees.filter(function (e) {
    return e.isCurrent === true;
    });
window.console.log(currentEmployees["name"]);

*/

//STEP 16

var movies = [["Fair Game", 1], ["Eastern Promises", 2], ["The Ring", 3], ["The Painted Veil", 4], ["Mother and Child", 5]];

var movieNames = movies.filter(function (item) {
    "use strict";
    return typeof item === "string";

});
var i;

for (i = 0; i < movieNames.length; i++) {
    window.console.log(movieNames[i]);
}


//window.console.log(movieNames);

/*

var i;

for (i = 0; i < movieNames.length; i += 1) {
    window.console.log(movieNames[i]);
}

*/

/*

//STEP 17

var employees = ["Jean-Luc", "William", "Beverly", "Deanna", "Tasha"];

var showEmployee = function() {    
}



function displayCar(car) {
     console.log("You own a " + car[0] + " " + car[1] + ".");
     car[0] = "Chevy";
}
var vehicle = ["Honda", "Civic"];
displayCar(vehicle);
console.log(vehicle[0]);

//STEP 18

//STEP 19

//STEP 20 */