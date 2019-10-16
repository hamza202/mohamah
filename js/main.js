$(function() {
    $("body").niceScroll({
        cursorborder: "0",
        cursorcolor:"#D59755",
        scrollspeed: 100
    });
});

var $document = $(document)
$document.scroll(function () {
        if ($document.scrollTop() >= 50) {
            $('.counter').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');

                $({countNum: $this.text()}).animate({
                        countNum: countTo
                    },
                    {
                        duration: 2000,
                        easing: 'linear',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            //alert('finished');
                        }
                    });
            });
        }
    }
);



$(document).ready(function()
{
    $(".loading-overly").fadeOut(1500,
        function()
        {
            $(this).remove();
        });
});
