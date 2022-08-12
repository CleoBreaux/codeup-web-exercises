"use strict";

var person = {};
console.log(typeof person)

    person.firstName = "Corey";
    person.lastName ="Osbey";
    console.log(person.firstName)
    console.log(person.lastName)

    console.log("Hello from " + person.firstName + " " + person.lastName + " ! " )

var shoppers = [
     {name: 'Cameron', amount: 180},
     {name: 'Ryan', amount: 250},
     {name: 'George', amount: 320}
];

    shoppers.forEach(function(shoppers) {
        console.log(`Hey ${shoppers.name} your total before discount is ${shoppers.amount}`)
        if (shoppers.amount > 200) {
            var discount = shoppers.amount * .12
            console.log(`your discount amount is ${discount}`)
            var newTotal = shoppers.amount - discount;
            console.log(`your new total is ${newTotal}`)
        } else {
            console.log("no discount to be found")
        }
    })
    console.log(shoppers)

var books = [
    {
        title: "The Best laid plans",
        author: {
            firstName: "Sidney",
            lastName: "Sheldon"
        }

    },
    {
        title: "Beserk",
        author: {
           firstName: "kentaru",
            lastName: "Miura"
        }
    },
    {
        title: "Naruto",
        author: {
            firstName: "Masashi",
            lastName: "Kishimoto"
        }
    },
    {
        title: "IT",
        author: {
            firstName: "Stephen",
            lastName: "King"
        }
    },
    {
        title: "Cosmic Serpent",
        author: {
            firstName: "Jeremy",
            lastName: "Marby"
        }
    }

];
        books.forEach(function(books,index){
    console.log(`book # ${index}`)
    console.log(`title: ${books.title}`)
    console.log(`Author: ${books.author.firstName} ${books.author.lastName}`)
        })





