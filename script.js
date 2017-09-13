var slideSwitch = function(slideTo) {

    var $active = $(".bg IMG.active");

    if ( $active.length === 0 ) {
        $active = $(".bg IMG:last");
    }

    var $next = $active.next().length ? $active.next(): $(".bg IMG:first");

    $active.addClass("last-active");

    // added “slideTo” variable to allow transition to a selected slide
    // defaults to null, but if it’s >= 0, it will use this index for “$next”
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

$(document).ready(function(){

    // hide all images except first to avoid initial flicker
    $('.bg IMG').css({opacity: 0.0});
    $('.bg IMG:first').css({opacity: 1.0});

    // use setInterval to traverse list
    // var playSlideshow = setInterval(slideSwitch, 8000 );

    // create buttons to move to specific slide
    var $slideButtons = $('.ssPushContainer ul li');

    $slideButtons.click(function(){
        // stop the slideshow, to keep it from trying to overlap our transition
        // clearInterval(playSlideshow);

        // call the function using the index of the clicked button
        slideSwitch( $slideButtons.index(this) );

    });
});