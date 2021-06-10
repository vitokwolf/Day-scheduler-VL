// START renders current date and time in the jumbotron
setInterval(function () {
    var currentDate = moment().format('dddd, MMM/DD/YYYY, hh:mm:ss a ');
    $('#current-day').text(currentDate);
}, 1000);
// END of current time and date in the jumbotron

// START edit events in time-blocks 
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
// END edit events in time-blocks

// START Color Changing
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

// END color changing based on time

// START save on local storage
$('.saveBtn').on('click', function () {
    // retrieve any info from localStorage
    var eventListStorage = JSON.parse(localStorage.getItem('events')) || [];
    // initialize a new array
    var eventList = [];
    // collect data from the event container
    var text = $(this).siblings('.time-block').text().trim();
    var idCount = $(this).siblings('.time-block').attr('id');
    // add the data to an object
    var timeBlock = { text, idCount };
    // add the object to the array
    eventList.push(timeBlock);
    // merge the data arrays
    eventListStorage = eventListStorage.concat(eventList);
    // save new data array to localStorage
    localStorage.setItem('events', JSON.stringify(eventListStorage));
});
// END save on local storage

// START load local storage
var loadEvents = function () {
    var eventListStorage = JSON.parse(localStorage.getItem('events')) || [];
    for (let i = 0; i < eventListStorage.length; i++) {
        var textEl = eventListStorage[i].text;
        var id = '#' + eventListStorage[i].idCount;
        $(id).children('p').text(textEl);
    }
};
loadEvents();
// END load local storage

// START auto-reload page
setTimeout(function () {
    window.location.reload(1);
}, (1000*60)*15);
// END auto-reload page 