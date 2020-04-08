$(document).ready(function () {
    $("a.open-link").click(function () {
        $("div.pop-chat").toggleClass("active");
        $("div.pop-chat1").removeClass("active");
        $("div.pop-chat2").removeClass("active");
    })
    $("a.open-link1").click(function () {
        $("div.pop-chat1").toggleClass("active");
        $("div.pop-chat").removeClass("active");
        $("div.pop-chat2").removeClass("active");
    })
    $("a.open-link2").click(function () {
        $("div.pop-chat2").toggleClass("active");
        $("div.pop-chat").removeClass("active");
        $("div.pop-chat1").removeClass("active");
    })
})