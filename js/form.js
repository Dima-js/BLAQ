$(function() {
    $("#booking").submit(function(){
        $.ajax({				
            url: "",
            type: "GET",
            success: function(answer) {
                $.magnificPopup.open({
                    items: {
                        src: '#modal2', // can be a HTML string, jQuery object, or CSS selector
                        type: 'inline',
                    },
                    callbacks: {
                        //auto close
                        open: function() {
                            setTimeout(function(){
                                $('#modal2').magnificPopup('close');
                                $(".wrap_booking").removeClass("active");
                            },5000);
                        }
                    }, 
                });
            }
        })
        return false;
    })
});