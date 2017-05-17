$(document).ready(function () {
    $('.popup-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $(document).on('click', '.close-modal', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});
// $(document).ready(function () {
//
//     $(".btn-booking").click(function(){
//         $(".wrap_content").addClass("active");
//         $(".wrap_booking").addClass("active");//добовляем класс
//     });
//     $(".remodal-overlay").click(function(){
//         $(".wrap_content").removeClass("active");
//         $(".wrap_booking").removeClass("active");
//     });
//     $(".remodal-close").click(function(){
//         $(".wrap_content").removeClass("active");
//         $(".wrap_booking").removeClass("active");//добовляем класс
//     });
//     $(".btn-m").click(function(){
//         $("main").addClass("active1");
//         $(".wrap_booking").addClass("active");//добовляем класс
//     });
    // $(".remodal-overlay").click(function(){
    //     $("main").removeClass("active1");
    //     $(".wrap_booking").parent().removeClass("active");
    // });

// });


