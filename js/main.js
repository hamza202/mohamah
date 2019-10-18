
function detectmob() {
    if(window.innerWidth >= 993 ) {
        $(function() {
            $("body").niceScroll({
                cursorborder: "0",
                cursorcolor:"#D59755",
                scrollspeed: 100
            });
        });
    } else {
        console.log('false')
    }
}
detectmob();
$(document).ready(function()
{
    $(".loading-overly").fadeOut(1500,
        function()
        {
            $(this).remove();
        });
});
$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 200) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});
