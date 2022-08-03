"use strict";

var names = ['Leonardo', 'Michelangelo', 'Rafael', 'Donatello'];
console.log(" there are " + names.length + " names in the names array.")

for(var i = 0 ; i < names.length; i++) {
    console.log(" name at index " + i + names[i]);
}
console.log(names)

names.forEach(function(name) {
    console.log(name)
})