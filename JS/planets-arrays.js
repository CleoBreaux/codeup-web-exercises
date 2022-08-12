"use strict";

var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune',];
console.log(planets)

planets.unshift('The Sun');
console.log(planets)

planets.push('Pluto');
console.log(planets)

planets.shift('The Sun');
console.log(planets)

planets.pop('Pluto');
console.log(planets)

var index = planets.indexOf('Earth');
console.log(index)

planets.reverse();
console.log(planets)

planets.sort();
console.log(planets)