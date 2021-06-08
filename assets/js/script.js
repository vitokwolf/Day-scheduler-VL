// renders current date and time in the jumbotron
setInterval(function () {
    var currentDate = moment().format('dddd, MMM/DD/YYYY, hh:mm:ss a ');
    $('#current-day').text(currentDate);
}, 1000);
// end of current time and date in the jumbotron

// start edit events in time-blocks 
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
// end edit events in time-blocks

// start color changing based on time

// declare a var that selects the hour from html
var eventHour = $('.hour').text().trim();
// format the time to a simpler form
eventHour = parseInt(moment(eventHour,'h:mm A').format('H'));
// declare current hour and format to same form as eventHour
var currentHour = parseInt(moment().format('H'));
// setting conditions to change the colors of time-blocks
var eventsBlock = $('.time-block');

if(currentHour === eventHour) {
    eventsBlock.addClass('present').removeClass('past future');
} else if (currentHour > eventHour ) {
    eventsBlock.addClass('past').removeClass('present future');
} else {
    eventsBlock.addClass('future').removeClass('past present');
};

// end color changing based on time