function detectmob() {
    if (window.innerWidth >= 993) {
        $(function () {
            $("body").niceScroll({
                cursorborder: "0",
                cursorcolor: "#D59755",
                scrollspeed: 100
            });
        });
    } else {
        console.log('false')
    }
}

detectmob();
$(document).ready(function () {
    $(".loading-overly").fadeOut(1500,
        function () {
            $(this).remove();
        });
});
$(window).scroll(function () {
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 200) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

//wizard
$(function () {
    var $signupForm = $('#SignupForm');

    $signupForm.validate({
        rules: {
            gender: {
                required: true,
            },
            country: {
                required: true,
            },
            nationality: {
                required: true,
            },
            re_password: {
                equalTo: "#Password"
            },
            date: {
                dateBR: {dateBR: true}
            }

        },
        messages: {
            country: "الرجاء اختر دولتك",
            nationality: "الرجاء اختر جنسيتك",
            phone: {
                maxlength: $.validator.format(" الرقم غير صحيح"),
                minlength: $.validator.format("الرقم غير صحيح"),
            }
        }
    });

    $signupForm.formToWizard({
        submitButton: 'SaveAccount',
        nextBtnClass: 'my-btn btn-4 next',
        nextBtnName: 'التالي',
        prevBtnName: 'السابق',
        prevBtnClass: 'btn btn-secondary btn-4 prev',
        buttonTag: 'button',
        validateBeforeNext: function (form, step) {
            var stepIsValid = true;
            var validator = form.validate();
            $(':input', step).each(function (index) {
                var xy = validator.element(this);
                stepIsValid = stepIsValid && (typeof xy == 'undefined' || xy);
            });
            return stepIsValid;
        },
        progress: function (i, count) {
            $('#progress-complete').width('' + (i / count * 100) + '%');
        }
    });

    $('.next').on('click',function () {
        if ($('#acc1').is(':checked')) {
            $('.if-lawyer-hide').addClass('d-none');
        }
    });
});



//sweet alert
$('.disabled-click').on('click', function () {
    $('#acc2').attr("disabled", true);
    Swal.fire({
        type: 'error',
        title: 'عذرا',
        confirmButtonText: 'اغلاق',
        confirmButtonColor: '#6c757d',
        text: 'التسجيل في الوقت الحالي متاح للمحامين فقط',
    })
});

//calendar piker
var picker = new Pikaday({
    yearRange: [1930, 2019], field: document.getElementById('datepicker'), format: 'dd/mm/yy',
    toString(date, format) {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        console.log(year);
        return `${day}/${month}/${year}`;
    },
});

//upload custom
$('.custom-file-input').bind('change', function () {
    var filename = $(this).val();
    if (/^\s*$/.test(filename)) {
        $(this).next().next('.custom-file-label').text("لم يتم اختيار صورة");
        $(this).next('.custom-file-label').text("لم يتم اختيار صورة");

    } else {
        $(this).next().next('.custom-file-label').text(filename.replace("C:\\fakepath\\", ""));
        $(this).next('.custom-file-label').text(filename.replace("C:\\fakepath\\", ""));
    }
});

//count up
$('.counter').counterUp({
    delay: 10,
    time: 1500
});

$("#new_case_form").validate({
    rules: {
        gender: {
            required: true,
        }

    },
    messages: {
        country: "الرجاء اختر دولتك",
        nationality: "الرجاء اختر جنسيتك",
        case_details:{
          minlength:  $.validator.format("يجب ادخال على الأقل {0} احرف"),
        },
        phone: {
            maxlength: $.validator.format(" الرقم غير صحيح"),
            minlength: $.validator.format("الرقم غير صحيح"),
        }
    }
});
$(document).ready(function() {

    $('input#multi-files').fileuploader({
        addMore: true,
    });

});

//number active

$(function() {
    var charLimit = 1;
    $(".inputs").keydown(function(e) {

        var keys = [8, 9, /*16, 17, 18,*/ 19, 20, 27, 105, 104 , 103, 102, 101, 100, 99, 98, 97, 96, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 144, 145];

        if (e.which == 8 && this.value.length == 0) {
            $(this).prev('.inputs').focus();
        } else if ($.inArray(e.which, keys) >= 0) {
            return true;
        } else if (this.value.length >= charLimit) {
            $(this).next('.inputs').focus();
            return false;
        } else if (e.shiftKey || e.which <= 48 || e.which >= 58) {
            return false;
        }
    }).keyup (function () {
        if (this.value.length >= charLimit) {
            $(this).next('.inputs').focus();
            return false;
        }
    });
});


//order Classification Select


$('.order-classification').on('change',function () {
    let selectTarget = $('.order-classification option:selected').val();
    if(selectTarget === "1") {
        $('.order-c-text').removeClass('d-none');
        $('.order-c-select').addClass('d-none');
    }
    else{
        $('.order-c-text').addClass('d-none');
        $('.order-c-select').removeClass('d-none');
    }
});

jQuery(document).ready(function () {
    jQuery('#stars li').on('mouseover', function () {
        var onStar = parseInt(jQuery(this).data('value'), 10);
        jQuery(this).parent().children('li.star').each(function (e) {
            if (e < onStar) {
                jQuery(this).addClass('hover');
            } else {
                jQuery(this).removeClass('hover');
            }
        });

    }).on('mouseout', function () {
        jQuery(this).parent().children('li.star').each(function (e) {
            jQuery(this).removeClass('hover');
        });
    });


    /* 2. Action to perform on click */
    jQuery('#stars li').on('click', function () {
        var onStar = parseInt(jQuery(this).data('value'), 10);
        var stars = jQuery(this).parent().children('li.star');

        for (i = 0; i < stars.length; i++) {
            jQuery(stars[i]).removeClass('selected');
        }

        for (i = 0; i < onStar; i++) {
            jQuery(stars[i]).addClass('selected');
        }

        // JUST RESPONSE (Not needed)
        var ratingValue = parseInt(jQuery('#stars li.selected').last().data('value'), 10);
        var msg = "";
        if (ratingValue > 1) {
            msg = ratingValue;
        } else {
            msg = ratingValue;
        }
        responseMessage(msg);

    });


});

function responseMessage(msg) {
    jQuery('.success-box').fadeIn(200);
    jQuery('.text-message-input').val(msg);
}
jQuery(document).ready(function () {
    $(".chat-content").scrollTop($(".chat-content")[0].scrollHeight);
});

