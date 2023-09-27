var saveButton = $('.saveBtn');
var timeBlock = $('.time-block');
var notif = $('#currentDay');
var saveNotif = $('<h3>');


$(document).ready(function() { 
  var today = function(){return dayjs().format('DD/MM/YYYY')};
document.getElementById("currentDay").innerText=today();
var currentHour = dayjs().format('h:mm:ss a');
var now = dayjs().hour();

var interval = setInterval(function() {
$('#currentDay').html(today() + " " + dayjs().format('hh:mm:ss A'));
},100);
interval;

saveButton.click(function () {
  saveNotif.remove();
  var ID = $(this).parent().attr('id');
  var text = $(this).siblings('textarea');
  var textContent = text.val();
  localStorage.removeItem(ID);
  localStorage.setItem(ID, textContent);
  saveNotif.text('Appointment saved!');
  notif.append(saveNotif);
})

var testTime = dayjs().hour();
function classChecker() {
  timeBlock.each(function() {

    var ID = parseInt($(this).attr('id'));
    if (ID == testTime) {
      $(this).removeClass('past present future').addClass('present');

    }
    else if (ID < testTime) {
      $(this).removeClass('past present future').addClass('past');
    }
    else {
      $(this).removeClass('past present future').addClass('future');
    }
  })
}

setInterval(classChecker, 1000);

timeBlock.each(function() {
  var ID = $(this).attr('id');
  var textContent = localStorage.getItem(ID);
  var textArea = $(this).children('textarea');
  if (textContent) {
    textArea.text(textContent);
  }
})


})