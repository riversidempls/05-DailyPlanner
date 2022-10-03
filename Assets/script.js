




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
// Set interval to refresh date and time every second
setInterval(setDateTime, 1000);
