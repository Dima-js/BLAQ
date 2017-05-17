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
    $("#booking").submit(function(event) {
        event.preventDefault();
        $(".wrap_booking").addClass("active");
    });

/* tabs*/
    $(document).ready(function(){
        $(".tabs_apps").lightTabs();
    });

    (function($){
        jQuery.fn.lightTabs = function(options){

            var createTabs = function(){
                tabs = this;
                i = 0;

                showPage = function(i){
                    $(tabs).children("div").children("div").hide();
                    $(tabs).children("div").children("div").eq(i).show();
                    $(tabs).children("ul").children("li").removeClass("active");
                    $(tabs).children("ul").children("li").eq(i).addClass("active");
                    $(tabs).children("li").children("button").removeClass("active");
                    $(tabs).children("li").children("button").eq(i).addClass("active");

                }

                showPage(0);

                $(tabs).children("ul").children("li").each(function(index, element){
                    $(element).attr("data-page", i);
                    i++;
                });

                $(tabs).children("ul").children("li").click(function(){
                    showPage(parseInt($(this).attr("data-page")));
                });
            };
            return this.each(createTabs);
        };
    })(jQuery);

});



