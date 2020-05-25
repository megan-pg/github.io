//supporting documentation https://medium.com/@aleks.roslyakov/using-css-grid-jquery-making-a-daily-scheduler-pt-i-6ba0d2b37e6f
//********OPEN CALENDER ************* */
//Generate current day
// the code from moment.js for day and time generation
$(document).ready(function () {
    var today = moment().format('MMMM Do YYYY, h:mm:ss a')
    console.log(moment)
    var date = $(".time-block");
    console.log(date)
    date.text(today);
})


//**********TIMEBLOCKS FOR THAT DAY ************ */
//8AM through 6PM
//text enter field
//save buttons
//for loop for to generate a row for every hour between 08:00 and 18:00 (aka 6pm because moment and time need 24 hour clocks to understand the time unit)
//once the for loop cycles through every hour until it hits 18:00, it will stop generateing rows
for (var i = 8; i <= 18; i++) {
    var hourTime = moment(i, "HH:mm:ss").format("h:mm:ss a");
    var timeDisplay;
    if (localStorage.getItem(moment(i, "HH:mm:ss").format("h:mm:ss"))) {
        timeDisplay = localStorage.getItem(moment(i, "HH:mm:ss").format("h:mm:ss"));
    } else {
        timeDisplay = "";
    }
    //Trying to append per https://api.jquery.com/append/ and Class activities like the movie activity and drinks activity
    //textarea doesn't need a function because it is predefined
    $("#date-field").append(`
    <div class="row">
    <div class="hour">${hourTime}</div>
    <textarea event = ${hourTime} class="textarea">${""}</textarea>
    <button class="saveBtn">Save</button>
    </div>
`)
}
//current hour color
//past hour color
//future hour color


//******************ENTER AND EDIT THE EVENT TO THE CALENDER******* */

//append text to timeblock
//Delete appended text Function


//************SAVE THE EVENT TO CALENDAR and LOCAL STORAGE ********* */
//Save Button appends the entered text to the timeblock
//on click save button to push to local storage
//Save button sends the entered text to local storage
$(document).on("click", ".saveBtn", function () {
    console.log("click")
    event = "";

    var listOfThings = $(this).attr('save-event');

    var enteredText = "#textarea" + listOfThings;
    var event = $(enteredText).val();

    var toDosArray = [listOfThings]

    localStorage.setItem("text", JSON.stringify(toDosArray));

});