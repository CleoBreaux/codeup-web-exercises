"use strict";


var color = ['red', 'blue', 'green', 'orange', 'indigo','violet']
var userColor = prompt("pick a color from the rainbow")
function analyzeColor(color) {
    if(color === "red") {
        console.log("stop signs are red")
    } else if (color === "blue") {
        console.log("blue jays are blue")
    } else if (color === "green") {
        console.log("grass is green")
    } else if (color === "orange") {
            console.log("tangerines are orange")
    } else if ( color === "indigo") {
        console.log("I dont know anything that is the color indigo")
    } else if (color === "violet") {
        console.log(" I don't know anything that is the color violet.")
    }
}
analyzeColor(userColor)