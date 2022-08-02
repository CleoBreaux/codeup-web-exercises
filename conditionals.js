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
} analyzeColor(userColor)
    switch(color){
        case "red":
            return: "stop signs are red"
        case "blue":
            return "blue jays are blue"
        case "green":
            return "grass is green"
        case "orange"
            return "tangerines are orange"
        case "indigo":
            return "I dont know anything the color of indigo"
        case "violet":
            return "I dont know anything the color violet"


            function calculateTotal(luckyNum, total) {
                switch (luckyNum) {
                    case 0: return total
                    case 1: return total - (total * .10)
                    case 2: return total - (total * .25)
                    case 3: return total - (total * .35)
                    case 4: return total - (total * .50)
                    case 5: return total - total
                }
            }

    }

    var userNum = confirm("would you like to enter a number ?");
    if(userNum === true){
        var thatNumber = prompt("give me that number");
        if(isNaN(thatNumber))
            alert("this is not a number")
        if(thatNumber %2 === 0){
            alert("that number sure is even")
        }else if(thatNumber % 2 !== 0){
            alert("that number sure is odd to me")
        }
        var newNum = thatNumber + 100;
        alert(`${thatNumber} + 100 = ${newNum}`);
        if(thatNumber < 0) {
            alert("that's a negative number");
        }else if(thatNumber > 0){
            alert(`this number is positive ${thatNumber}`);

        }else if(thatNumber < 0){
            alert(`this number is negative ${thatNumber}`);
        }
    }