
$(document).ready(function() {
    $("#slideshow > div:gt(0)").hide();

    var shownSlide = 0;

    function afterSlide($currentSlide) {
        console.log($currentSlide.find('li:first-child'));
    }

    function nextSlide(callback) {
        var $slideshowItems = $("#slideshow .hero-image");
        $slideshowItems.fadeOut(5000);
        var nextSlide = shownSlide + 1;

        $($slideshowItems[nextSlide]).fadeIn(5000);
        shownSlide = nextSlide;
        if ((shownSlide + 1) === $slideshowItems.length)
            shownSlide = -1;
        callback($($slideshowItems[nextSlide]));
    }

    setInterval(function () {
        nextSlide(afterSlide)
    }, 5000);
    $('#slideshow li:first-child').addClass('transparent');
    $('#slideshow li:nth-child(2)').addClass('transparent');
    $('#slideshow li:nth-last-child(3)').addClass('transparent');

});