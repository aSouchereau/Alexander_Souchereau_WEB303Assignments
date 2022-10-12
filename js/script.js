$(document).ready(function () {
    AjaxGet();
});

function GetJsonData() {
    $.getJSON("team.json", function (result) {
        $.each(result, function (index, value) { 
            $("div#team").prepend("<h2>"+value.name+"</h2>").append("<h5>"+value.position+"</h5>").append("<p>"+value.bio+"</p>");
        });
    });
} 

function AjaxGet() {
    $.ajax({
        method: "GET",
        url: "team.json",
        dataType: "json",
        beforeSend: function () {
            $("div#team").prepend("<p>Loading...</p>");
        },
        error: function () {
            $("div#team").prepend("<p>Error: Content could not be retrieved.</p>");
        },
        success: function (data) {
            setTimeout(function () {  
                $("div#team").empty();
                $.each(data, function (index, value) { 
                    $("div#team").prepend("<h2>"+value.name+"</h2>").append("<h5>"+value.position+"</h5>").append("<p>"+value.bio+"</p>");
                });
            },3000);
        }
    });
}