$(document).ready(function() {

    let toast = $('.toast');

    setTimeout(function() {
        toast.toast({
            delay: 5000,
            animation: true
        });
        toast.toast('show');

    }, 2200);
});

$(window).bind("scroll", function() {
    let toast = $('.toast');
    toast.css("top", window.pageYOffset + 20);

});