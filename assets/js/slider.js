let slickSliders = [];
let renderSlickSlider = function (className,
                                  defaultSlidesQty,
                                  mobileQty,
                                  arrows,
                                  qtyToScroll,
                                  centerMode,
                                  dotMode,
                                  onlyMobile
) {
    let windowWidth = $(window).outerWidth();
    if (-1 < slickSliders.indexOf(className)) {
        $(className).slick('unslick');
    }

    onlyMobile = (undefined === onlyMobile || null === onlyMobile)
        ? false : onlyMobile;
    if (onlyMobile && 768 < windowWidth) {
        return;
    }

    mobileQty = (undefined === mobileQty || null === mobileQty)
        ? 2 : mobileQty;
    qtyToScroll = (undefined === qtyToScroll || null === qtyToScroll)
        ? 1 : qtyToScroll;
    arrows = (undefined === arrows || null === arrows)
        ? false : arrows;
    centerMode = (undefined === centerMode || null === centerMode)
        ? false : centerMode;
    dotMode = (undefined === dotMode || null === dotMode)
        ? false : dotMode;

    if (991 > windowWidth && false === onlyMobile) {
        defaultSlidesQty = 3;
    }
    if (767 > windowWidth && false === onlyMobile) {
        defaultSlidesQty = 2;
    }
    let varW = true;
    if (1200 > windowWidth) {
        varW = false;
    }
    if (560 > windowWidth) {
        defaultSlidesQty = mobileQty;
        varW = false;
    }
    $(className).slick({
        dots: dotMode,
        arrows: arrows,
        slidesToShow: defaultSlidesQty,
        slidesToScroll: qtyToScroll,
        // adaptiveHeight: false,
        speed: 200,
        focusOnSelect: false,
        centerMode: centerMode,
        variableWidth: varW,
        infinite: true,


        /*   dots: true,
           infinite: true,
           speed: 500,
           slidesToShow: 5,
           centerMode: true,
           variableWidth: true*/
    });
    slickSliders.push(className)
};

$(function () {
    renderSlickSlider('.center', 7, 1, false, 1, false, false);


    $(window).resize(function () {
        renderSlickSlider('.center', 7, 1, false, 1, false, false);



    });

});


/*add slick current */


jQuery(document).ready(function () {
    // This button will increment the value
    $('[data-quantity="plus"]').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(0);
        }
    });
    // This button will decrement the value till 0
    $('[data-quantity="minus"]').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(0);
        }
    });
});

/*asdasdasdasd_____________________________________*/

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

// var deadline = "3 29 2019 00:00:00 GMT+0300"; //for Ukraine
// var deadline = new Date(Date.parse(new Date()) + 2 * 12 * 60 * 60 * 1000);
var deadline = 'Tue Mar 05 2019 17:00:00 GMT+0100 (W. Europe Standard Time)';
// for endless timer
initializeClock('clockdiv', deadline);
/*asdasdasdasd_____________________________________*/

