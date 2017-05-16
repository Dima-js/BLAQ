$(document).ready(function () {
    $(".btn-booking").click(function(){
        $(".wrap_content").addClass("active");
        $(".wrap_booking").addClass("active");//добовляем класс
    });
    $(".remodal-overlay").click(function(){
        $(".wrap_content").removeClass("active");
        $(".wrap_booking").removeClass("active");//добовляем класс
    });
    $(".remodal-close").click(function(){
        $(".wrap_content").removeClass("active");
        $(".wrap_booking").removeClass("active");//добовляем класс
    });

});


