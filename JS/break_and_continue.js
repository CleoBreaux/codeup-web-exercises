"use strict";

var number = prompt("enter a number between 1 and 50");
for(var i = 1; i <= 50; i++){
}
if(i % 2 !== 0) {
    console.log(`here is an odd number: ${i}`)
}else if(i % 2 !== 0 && i === number){
    console.log(`yikes! skipping number: ${number}`)
}
while(isNaN(number) || number % 2 === 0 || number >= 50 || number < 1);