$("p").css("font-size", '20px').css('color', 'red')
$("h1").css('color','pink')
$(".invisible").css("visibility","hidden")
$('#showButton').click(function (){
    $('dd').toggleClass(".invisible").css("visibility","visible")
});
// $("dd").addClass("invisible");
// $(".invisible").css("visibility", 'hidden')
// $(document).toggleClass('dd').on()
