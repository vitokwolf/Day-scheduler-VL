// renders current date and time in the jumbotron
setInterval(function () {
    var x = moment().format('MM/DD/YYYY hh:mm:ss');
    $('#currentDay').text(x);
}, 1000);


