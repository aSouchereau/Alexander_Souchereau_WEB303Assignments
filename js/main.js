// WEB303 Assignment 2
$(document).ready(function () {
    let content = $("#content");
    let xhr = new XMLHttpRequest; 


    $("#prospect").click(function () { 
        content.hide().text("");  
        xhr.open('GET', 'prospect.html', true);
        xhr.onload = function () {
            if(xhr.status >= 200 && xhr.status < 400)
            {
                content.html(xhr.responseText).fadeIn(600);
            }
        }
        xhr.send();
    });


    $("#convert").click(function () {
        content.hide().text("");
        xhr.open('GET', 'convert.html', true);
        xhr.onload = function () {
            if(xhr.status >= 200 && xhr.status < 400)
            {
                content.html(xhr.responseText).fadeIn(600);
            }
        }
        xhr.send();
    });


    $("#retain").click(function () {
        content.hide().text("");
        xhr.open('GET', 'retain.html', true);
        xhr.onload = function () {
            if(xhr.status >= 200 && xhr.status <400)
            {
                content.html(xhr.responseText).fadeIn(600);
            }
        }
        xhr.send();
    });
});