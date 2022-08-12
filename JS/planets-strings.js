"use strict";

var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
var planetsArray
console.log(planetsString)

planetsArray = planetsString.split("|");
console.log(planetsArray)

planetsString = planetsArray.join("<br>");
console.log(planetsString)