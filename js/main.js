// WEB303 Assignment 2
$(document).ready(function () {
    $("#prospect").click(function (e) { 
        let content = $("#content");
        content.hide().text("");
        content.load('prospect.html').fadeIn(600);
    });

    $("#convert").click(function (e) {
        let content = $("#content");
        content.hide().text("");
        content.load('convert.html').fadeIn(600);
    });

    $("#retain").click(function (e) {
        let content = $("#content");
        content.hide().text("");
        content.load('retain.html').fadeIn(600);
    });
});