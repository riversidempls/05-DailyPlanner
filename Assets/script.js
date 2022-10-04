

// first color all the rows past
$(document).ready(function(){
    $("tr").addClass("row, past");
});

//next color the current hour row current
$(document).ready(function(){
    var currenthour = moment();
    var hournow = currenthour.hour();
    console.log(hournow);
    if (hournow === 8) { 
        $("#h8").addClass("row, present");
    };
    if (hournow === 9) { 
        $("#h9").addClass("row, present");
    };
    if (hournow === 10) { 
        $("#h10").addClass("row, present");
    };
    if (hournow === 11) { 
        $("#h11").addClass("row, present");
    };
    if (hournow === 12) { 
        $("#h12").addClass("row, present");
    };
    if (hournow === 13) { 
        $("#h13").addClass("row, present");
    };
    if (hournow === 14) { 
        $("#h14").addClass("row, present");
    };
    if (hournow === 15) { 
        $("#h15").addClass("row, present");
    };
    if (hournow === 16) { 
        $("#h16").addClass("row, present");
    };
    if (hournow === 17) { 
        $("#h17").addClass("row, present");
    };

});

//finally color thefuture future hours

$(document).ready(function(){
    var currenthour = moment();
    var hournow = currenthour.hour();
    console.log(hournow);
    if (hournow <= 8) { 
        $("#h8,#h9,#h10,#h11,#h12,#h13,#h14,#h15,#h16,#h17").addClass("row, future");
    };
    if (hournow <= 9) { 
        $("#h9,#h10,#h11,#h12,#h13,#h14,#h15,#h16,#h17").addClass("row, future");
    };
    if (hournow <= 10) { 
        $("#h10,#h11,#h12,#h13,#h14,#h15,#h16,#h17").addClass("row, future");
    };
    if (hournow <= 11) { 
        $("#11h,#h12,#h13,#h14,#h15,#h16,#h17").addClass("row, future");
    };
    if (hournow <= 12) { 
        $("#12h,#h13,#h14,#h15,#h16,#h17").addClass("row, future");
    };
    if (hournow <= 13) { 
        $("#13h,#h14,#h15,#h16,#h17").addClass("row, future");
    };
    if (hournow <= 14) { 
        $("#14h,#h15,#h16,#h17").addClass("row, future");
    };
    if (hournow <= 15) { 
        $("#15h,#h16,#h17").addClass("row, future");
    };
    if (hournow <= 16) { 
        $("#16h,#h17").addClass("row, future");
    };    
    if (hournow <=17) {
        $("#17h").addClass("row, future);");
    };
});



//create a function to get the date and time
function setDateTime () {
    var datetime = moment();
    var currentDate = datetime.format('dddd, MMMM Do - Y');
//console.log(currentDate); // "10/02/2022"
    document.getElementById('currentDay').innerHTML = currentDate;
    var currentTime = datetime.format('LTS');
//console.log(currentTime);
    document.getElementById('currentTime').innerHTML = currentTime;
}

// Set interval to refresh date/time and color the rows every second
setInterval(setDateTime, 1000);