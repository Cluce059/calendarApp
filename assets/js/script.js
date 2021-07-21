var dayEl = document.querySelector("#schedule-day-wrapper");
var hourEl = document.querySelector("#hour-col");
var taskEl = document.querySelector("#task-item");
var taskNameEl = document.querySelector("#task-name");
var saveButtonEl = document.querySelector("#save-btn");
var tasks = [];
var now = moment().format("dddd MMM Do");
$("#currentDay").html(now);

//display current date and time
//use jquery to select and manipulate el
$(document).ready(function(){
    //listen for save btn click
    //save the task-item text in localstorage
    $(".save-btn").on("click", function(){
        //use jquery to select other items relative to click event
        var task = $(this).siblings(".task-name").val();
        //make var for that user-selected time block
        var time = $(this).parent().attr("id");
        //save input in local storage
        localStorage.setItem(time, task);
    });

    //function  to get current time relative to work day for color coding
    function time(){
        var rightNow = moment().hours();
    //loop thru the blocks and compare them w current time
    //NOTE TO SELF i prefer loops but this .each methods will work the 
    //same might as well use the methods provided by the api...saves me from making
    //an array of each block anyway
    //select using jquery
    $(".hour-block").each(function(){
        //split methods was intriduced in mod 6...already did that so assuming
        //that i can use it to breake uo this newly made string
        var block = parseInt($(this).attr("id").split("hour")[1]);
        //conditionals to decide what css styling to have based on current time
        if(block === rightNow){
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        if(block < rightNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else{
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    });
}

    //keep items in localstorage on  page after refreshing
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));
    //call time function
    time();

});

