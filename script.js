var slideSwitch = function(slideTo) {

    var $active = $(".bg IMG.active");

    if ( $active.length === 0 ) {
        $active = $(".bg IMG:last");
    }

    var $next = $active.next().length ? $active.next(): $(".bg IMG:first");

    $active.addClass("last-active");

    slideTo = ( slideTo+1 )? slideTo : null;
    if ( slideTo !== null ) {
        $next = $(".bg IMG").eq(slideTo);
    }

    $next.css({opacity: 0.0})
        .addClass("active")
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass("active last-active");
        });
};

$(document).ready(function() {


    $('.bg IMG').css({opacity: 0.0});
    $('.bg IMG:first').css({opacity: 1.0});

    // use setInterval to traverse list
    // var playSlideshow = setInterval(slideSwitch, 8000 );

    // create buttons to move to specific slide
    var $slideButtons = $('.ssPushContainer ul li');

    $slideButtons.click(function () {
        // stop the slideshow, to keep it from trying to overlap our transition
        // clearInterval(playSlideshow);

        // call the function using the index of the clicked button
        slideSwitch($slideButtons.index(this));

    });
    // znikające butony
    $("#btn1").click(function(){
        $('#btn1').hide(500);
        $('#btn2').show(500);
        $('#btn3').show(500);
     });
    $('#btn2').click(function () {
        $('#btn2').hide(500);
        $('#btn1').show(500);
        $('#btn3').show(500);

    });
    $('#btn3').click(function () {
        $('#btn3').hide(500);
        $('#btn2').show(500);
        $('#btn1').show(500);

    })
    // znikające butony koniec
});



