var date = moment();
var time = moment();
var currentTime = date.format('LTS');

var currentDate = date.format('dddd, MMMM Do - Y');
console.log(currentDate); // "10/02/2022"
document.getElementById('currentDay').innerHTML = currentDate;

//create a function to get the time
function setTime () {
var currentTime = date.format('LTS');
console.log(currentTime);
document.getElementById('currentTime').innerHTML = currentTime;
}
// console.log(currentTime);
// document.getElementById('currentTime').innerHTML = currentTime;


// set interval to run setTime function every second
window.setInterval(setTime, 1000);
