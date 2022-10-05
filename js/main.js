// WEB303 Assignment 2
$(document).ready(function () {
    $("#prospect").click(function (e) { 
        $("#content").load('prospect.html').css("display", "block");
    });

    $("#convert").click(function (e) {
        $("#content").load('convert.html').css("display", "block");
    });

    $("#retain").click(function (e) {
        $("#content").load('retain.html').css("display", "block");
    });
});