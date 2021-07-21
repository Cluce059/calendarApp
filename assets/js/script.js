
var today = moment().format("dddd MMM Do");
$("#currentDay").html(today);

//display current date and time
//use jquery to select and manipulate el
$(document).ready(function(){
    //listen for save btn click
    //save the task-item text in localstorage
    $(".saveBtn").on("click", function(){
        //console.log("click");
        //use jquery to select other items relative to click event
        var task = $(this).siblings(".description").val();
        //make var for that user-selected time block
        var time = $(this).parent().attr("id");
        //save input in local storage
        localStorage.setItem(time, task);
        //console.log(time);
        //console.log(task);
    })

    //function  to get current time relative to work day for color coding
    function time(){
    //current time    
    var rightNow = moment().hour();
    console.log(rightNow);
    //loop thru the blocks and compare them w current time
    //NOTE TO SELF i prefer loops but this .each methods will work the 
    //same might as well use the methods provided by the api...saves me from making
    //an array of each block anyway
    //select using jquery
        $(".time-block").each(function(){
        //split methods was intriduced in mod 6...already did that so assuming
        //that i can use it to breake uo this newly made string
        var block = parseInt($(this).attr("id").split("hour")[1]);
        console.log("block=" + block);
        //conditionals to decide what css styling to have based on current time
        if(block > rightNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        if(block === rightNow){
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else{
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}

    //keep items in localstorage on  page after refreshing
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    //console.log(hour9);
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour1 .description").val(localStorage.getItem("hour13"));
    $("#hour2 .description").val(localStorage.getItem("hour14"));
    $("#hour3 .description").val(localStorage.getItem("hour15"));
    $("#hour4 .description").val(localStorage.getItem("hour16"));
    $("#hour5 .description").val(localStorage.getItem("hour17"));
    //call time function
    time();
});

