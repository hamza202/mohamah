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
});


$('.disabled-click').on('click', function () {
    $('#acc1').attr("disabled", true);
    Swal.fire({
        type: 'error',
        title: 'عذرا',
        confirmButtonText: 'اغلاق',
        confirmButtonColor: '#6c757d',
        text: 'التسجيل في الوقت الحالي متاح للمحامين فقط',
    })
});

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
