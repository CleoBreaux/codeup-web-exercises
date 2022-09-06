// $('.codeup').css('border', '1px solid #FE2D00');
// $('li').css('font-size','20px');
// $("li, p,h1 ").css('background-color', '#FEF600');
// $(function() {
// alert($('h1').html())
// });
// $('h1').css('background-color','red'

$('#heading').click(function() {
    $('#heading').css('background-color', 'red')
    console.log("My Heading was clicked!");
});
// end of click
$('.codeup').dblclick(function () {
    $('.codeup').css('font-size', '18px')
    console.log("My paragraph was double clicked!");
});
// end of double click

// $('#list').hover(function (){
//     $('#list').css('color', 'red')
//     $('#list').css('color', 'black')
//     });

$('#list').mouseenter(function (){
 $('#list').css('color', 'red')
});

$('#list').mouseleave(function (){
    $('#list').css('color', 'black')
});

