"use strict";

console.log("Hello from External Javascript");
alert("Welcome to my website !");
console.log();
var price = 3
var favoriteColor= prompt("What is your favorite color");
console.log('the user entered'+ favoriteColor);
alert("That's great ! " + favoriteColor + " is my favorite color too ! ");

var littleMermaid = Number (prompt(" How many days did you rent Little Mermaid ? "));
console.log(littleMermaid)
var brotherBear = Number (prompt(" How many days did you rent Brother Bear ? "));
console.log(brotherBear)
var Hercules = Number (prompt(" How many days did you rent Hercules ? "));
console.log(Hercules)
var Total = (littleMermaid + brotherBear + Hercules) * price
console.log(Total)
alert(" you owe $ " + Total + " . ")

var workGoogle = prompt("How many hours did you work for Google ?");
console.log(workGoogle * 400)
var workAmazon = prompt("How many hours did you work for Amazon ?");
console.log(workAmazon * 380)
var workFacebook = prompt("How many hours did you work for FaceBook ?");
console.log(workFacebook * 350)
var payment = Number (workAmazon + workFacebook + workGoogle);
console.log(payment)
alert(" You have earned $ " + payment + " for the week . ");

var status = confirm(" Are you a student ? ")
console.log(status)






