// wait for DOM to load before running JS
$(function() {

  //TODO: Display Current Date
  //TODO: Convert to RickDate

  //First, take the current year (which is often shortened to the last base-36 digit)
  //Then the month
  //Then the date\
// Create two variable with the names of the months and days in an array

var rickstr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var jimstr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy";

setInterval( function() {
  var seconds = new Date().getSeconds();
  $(".tensecond").html(Math.floor(seconds/10 % 10));
  $(".second").html(seconds % 10);
  $(".rick .second").html(jimstr.charAt(seconds));
    },1000);

setInterval( function() {
  var minutes = new Date().getMinutes();
  $(".tenminute").html(Math.floor(minutes/10 % 10));
  $(".minute").html(minutes % 10);
  $(".rick .minute").html(jimstr.charAt(minutes));
    },1000);

setInterval( function() {
  var hours = new Date().getHours();
  $(".tenhour").html(Math.floor(hours/10 % 10));
  $(".hour").html(hours % 10);
  $(".rick .hour").html(rickstr.charAt(hours));
    }, 1000);

setInterval( function() {
  var days = new Date().getDate();
  $(".tenday").html(Math.floor(days/10 % 10));
  $(".day").html(days % 10);
  $(".rick .day").html(rickstr.charAt(days));
    }, 1000);

  setInterval( function() {
  var months = new Date().getMonth();
  months++;
  $(".tenmonth").html(Math.floor(months/10 % 10));
  $(".month").html(months % 10);
  $(".rick .month").html(rickstr.charAt(months));
    }, 1000);

  setInterval( function() {
  var years = new Date().getFullYear();
  $(".thousandyear").html(Math.floor(years/1000 % 10));
  $(".hundredyear").html(Math.floor(years/100 % 10));
  $(".tenyear").html(Math.floor(years/10 % 10));
  $(".year").html(years % 10);
  $(".rick .hundredyear").html(rickstr.charAt(Math.floor(years/Math.pow(36,2) % 36)));
  $(".rick .tenyear").html(rickstr.charAt(Math.floor(years/36 % 36)));
  $(".rick .year").html(rickstr.charAt(years % 36));
    }, 1000);
});