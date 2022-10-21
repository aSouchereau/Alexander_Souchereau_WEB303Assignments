/*
    Assignment #4
    Alex Souchereau
*/

$(function () {
   
    if (!navigator.geolocation)
    {
        $('#content').prepend("<b>Please allow location services on this page...</b>");
        console.log("not enabled");
    }
    else
    {
        console.log("Getting user location...");
        navigator.geolocation.getCurrentPosition(success, fail);
    }

    function success(position) {
        console.log(position);
        let lat = parseFloat(position.coords.latitude);
        let long = parseFloat(position.coords.longitude);
        $("div#locationhere").text("Current Location: " + lat + " / " + long + " Accuracy: " + position.coords.accuracy);

        if (localStorage.getItem("position"))
        {
            let storedPosition = localStorage.getItem("position");
            console.log(storedPosition);
            $('#content').append("Previous Location: " + storedPosition);

            let storedPosArray = storedPosition.split(" / ");
            let oldLat = parseFloat(storedPosArray[0]);
            let oldLong = parseFloat(storedPosArray[1]);
            let distance = (calcDistanceBetweenPoints(lat, long, oldLat, oldLong) / 1000).toFixed(4);
            $('#content').append("<p>You travelled " + distance + "km since your last visit.");

            localStorage.setItem("position", lat + " / " + long);
        }
        else
        {
            localStorage.setItem("position", lat + " / " + long);
        }
    }



    function fail() {
        console.log("Error getting position");
    }

    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


