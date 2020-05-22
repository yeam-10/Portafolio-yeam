var slideIndex = 1;
showDivs(slideIndex);

function marcarDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("myslide");
    if (n > x.length) { slideIndex = 1 }
    if (n < x.length) {
        slideIndex = x.length
    }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x[slideIndex - 1.].style.display = "block";
}

var progressBarOptions = {
    startAngle: -1.55,
    size: 200,
    value: 0.75,
    fill: {
        color: '#ffa500'
    }
}

$('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
    //$(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
});

$('#circle-b').circleProgress({
    value: 0.25,
    fill: {
        color: '#FF0000'
    }
});

$('#circle-c').circleProgress({
    value: 0.92,
    fill: {
        color: '#008000'
    }
});