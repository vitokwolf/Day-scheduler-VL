// renders current date and time in the jumbotron
setInterval(function () {
    var currentDate = moment().format('dddd, MMM/DD/YYYY, hh:mm:ss a ');
    $('#current-day').text(currentDate);
}, 1000);
// end of current time and date in the jumbotron

// on click change time-block into textarea to add events
$(".col-10").on('click', function () {
    //  var to select the existing text
    var text = $(this).text().trim();
    // var to create new textarea
    var textP = $("<textarea>")
        .addClass("textInput")
        .text(text);
        // add textarea to the dom
    $(this).children('p').replaceWith(textP);
    textP.trigger("focus");
});
// change textarea back to p when clicked anywhere else
$(".col-10").on("blur", "textarea", function () {
    var text = $(this).val().trim();
    var p = $("<p>")
        .addClass("textInput")
        .text(text);
    $(this).replaceWith(p);
});
