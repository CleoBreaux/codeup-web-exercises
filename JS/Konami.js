$('#textfield').keydown(function() {
    console.log("A key was pushed down!");
});
$('#textfield').keyup(function (){
    console.log("")
});
// .on('keydown', function() {});

var selectKeys = "38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13";

var code = ['up', 'up', 'down', 'down','left', 'right', 'left', 'right', 'b', 'a', 'return'];

var attempt = "";

$(document).keyup(function (event){
    attempt += ' ${event.keyCode}';
    console.log(event.keyCode);
    console.log(attempt);
    if(attempt.trim() === code){
        $("body").css("background-color", "red")
        alert("You've won 30 lives!")
    }
});





