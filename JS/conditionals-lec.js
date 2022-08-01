console.log("working")

var username = prompt("enter your username").toLowerCase()
var password = prompt( "enter your password").toLowerCase()

var currUsername = "username"

var currPassword = "password"

if(username === currUsername && password === currPassword){
    alert("You have logged in")
}else if(username !== currUsername && password !== currPassword){
    alert("invalid credentials")
}else if(username !== currUsername){
    alert("invalid username")
}else if(password !== currPassword){
    alert("invalid password")
}else{
    alert("unexpected error")
}

var isRaining;
isRaining = confirm("Is it raining ?")
alert((isRaining)? console.log("wear a jacket, it's raining"): console.log( "nope, take a hike"));

prompt("WHat's your favorite movie").toLowerCase()

switch (favMovie){
    case "toy story":
        alert("i can't stand that movie");
        break;
    case "Lion King":
            alert("trash")
        break;
    case "back to the future":
            alert("never seen it kid")
        break;
}
