$("p").css("font-size", '20px').css('color', 'red')
$("h1").css('color','pink')
$(".invisible").css("visibility","hidden")
$('#showButton').click(function (){
    $('dd').toggleClass(".invisible").css("visibility","visible")
});
// end of FaQ exercise

$('#highlightButton').click(function (){
 $(".last").toggleClass(".last").css("background-color", "yellow")
});

$("h3").click(function(){
     $("ul").each(function () {
         $(this).children().css('font-weight', 'bold')
     })
     });

$("li").on('click',function(){
   $(this).parent().children().first().css('color', 'blue')
});

