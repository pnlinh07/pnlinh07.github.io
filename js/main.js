$(function () {
    var textAnimate = eval(Jscex.compile("async", function () {
        var together = new Date();
        var year = 2020, month = 11, day = 17;
        together.setFullYear(year, month - 1, day);
        together.setHours(0);
        together.setMinutes(0);
        together.setSeconds(0);
        together.setMilliseconds(0);

        while (true) {
            timeElapse(together);
            $await(Jscex.Async.sleep(1000));
        }
    }));

    var runAsync = eval(Jscex.compile("async", function () {
        textAnimate().start();
    }));

    runAsync().start();

    // Create images for slides
    var slides = [];

    for (var i = 0; i <= 51; i++) {
        slides.push({src: 'images/ltlove_' + i +'.jpg'});
    }

    $("body").vegas({
        slides: slides,
        shuffle: true,
        delay: 2000,
        cover: true,
        overlay: 'images/overlays/05.png',
        transition: 'fade'
    });
});

function timeElapse(date) {
    var current = Date();
    var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
    var days = Math.floor(seconds / (3600 * 24));
    seconds = seconds % (3600 * 24);
    var hours = Math.floor(seconds / 3600);
    if (hours < 10) {
        hours = "0" + hours;
    }
    seconds = seconds % 3600;
    var minutes = Math.floor(seconds / 60);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    seconds = seconds % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var result = '<div class="row">'
        + '<div class="col-xs-3 countdown-con"><div class="countdown-num">' + days + '</div><div class="countdown-info">NGÀY</div></div>'
        + '<div class="col-xs-3 countdown-con"><div class="countdown-num">' + hours + '</div><div class="countdown-info">GIỜ</div></div>'
        + '<div class="col-xs-3 countdown-con"><div class="countdown-num">' + minutes + '</div><div class="countdown-info">PHÚT</div></div>'
        + '<div class="col-xs-3 countdown-con"><div class="countdown-num countdown-second">' + seconds + '</div><div class="countdown-info">GIÂY</div></div>'
        + '</div>';

    $('#js-timelove').html(result);
}