$(document).ready(function() {
    $('.new-msg').click(function() {
        var animation = $(this).attr("data-animation");
        $('#new-msg').toggleClass('animated');
        $('#new-msg').toggleClass(animation);
    });
    $('.pend-msg').click(function() {
        var animation = $(this).attr("data-animation");
        $('#pend-msg').toggleClass('animated');
        $('#pend-msg').toggleClass(animation);
    });
    $('.cls-msg').click(function() {
        var animation = $(this).attr("data-animation");
        $('#cls-msg').toggleClass('animated');
        $('#cls-msg').toggleClass(animation);
    });
    $('.inb').click(function() {
        var animation = $(this).attr("data-animation");
        $('#inb').toggleClass('animated');
        $('#inb').toggleClass(animation);
    });
    $('.upost').click(function() {
        var animation = $(this).attr("data-animation");
        $('#upost').toggleClass('animated');
        $('#upost').toggleClass(animation);
    });
    $('.ppost').click(function() {
        var animation = $(this).attr("data-animation");
        $('#ppost').toggleClass('animated');
        $('#ppost').toggleClass(animation);
    });
})