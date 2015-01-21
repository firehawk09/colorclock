window.onload = app;

// runs when the DOM is loaded
function app() {
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        //css
        {
            url: "./dist/style.css"
        },
        //js
        {
            url: "./bower_components/jquery/dist/jquery.min.js"
        }, {
            url: "./bower_components/lodash/dist/lodash.min.js"
        }
        // {url: "./bower_components/backbone/backbone.js"}
    ).then(function() {
        document.querySelector("html").style.opacity = 1;
        // start app?
    })

/**
*   < --------------------------------------------------->
**/










    var h1s = [].slice.call(document.querySelectorAll('h1'));


    setInterval(function() {
        var d = new Date();
        var ht, mt, st;

        var h = d.getHours();
        var m = d.getMinutes();
        var s = d.getSeconds();



        if (h<=9) {ht="0"+h} else{ht=h};
        if (m<=9) {mt="0"+m} else{mt=m};
        if (s<=9) {st="0"+s} else{st=s};

        var parts = [ht, mt, st]

        h1s.forEach(function(el) {
            el.innerHTML = parts.join(":")
        })


        var redValue = Math.round((h/23)*255);
        var greenValue = Math.round((m/59)*255);
        var blueValue = Math.round((s/59)*255);

        var color = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
        // console.log(color)








        document.getElementById("body").style.backgroundColor = color;

        document.getElementById("h1").style.backgroundColor = color;



    }, 1 * 1000)


}
