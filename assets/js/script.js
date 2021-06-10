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

// declare the id of timeblocks id's
var idArr = ['#8', '#9', '#10', '#11', '#12', '#13', '#14', '#15', '#16', '#17'];

// declare current hour and format to same form as eventHour
var currentHour = parseInt(moment().format('H'));

// create a function to iterate thru all event blocks
for (let i = 0; i < idArr.length; i++) {
    var findTB = $(idArr[i]);

    // declare a var that selects the hour from each time-block and format it
    var eventHour = findTB.siblings('.hour').text().trim();
    eventHour = parseInt(moment(eventHour, 'h:mm A').format('H'));

    // setting conditions to change the colors of time-blocks
    if (currentHour === eventHour) {
        findTB.addClass('present').removeClass('past future');
    } else if (currentHour > eventHour) {
        findTB.addClass('past').removeClass('present future');
    } else {
        findTB.addClass('future').removeClass('past present');
    };
}

// end color changing based on time

// start save on local storage
var saveButton = function () {
var text = $(this).siblings('.time-block').text().trim();
var idCount = $(this).siblings('.time-block').attr('id');
var timeBlock = {text,idCount};
eventList = [];
eventList.push(timeBlock);
localStorage.setItem('events', JSON.stringify(eventList));
    console.log(localStorage);
}

 $('.saveBtn').on('click', saveButton);

// end save on local storage
