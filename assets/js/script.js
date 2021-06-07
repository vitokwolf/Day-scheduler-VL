// renders current date and time in the jumbotron
setInterval(function () {
    var x = moment().format('dddd, MMM/DD/YYYY, hh:mm:ss a ');
    $('#current-day').text(x);
}, 1000);

