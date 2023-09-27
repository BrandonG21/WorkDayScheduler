//Loads everything when page finishes loading
$(document).ready(function(){
  //alerts you when page finishes loading 
  alert("Page Finished Loading")
//Time and Days
var nineAm = $("#hour-9");
var tenAm = $("#hour-10");
var elevenAm = $("#hour-11");
var twelvePm = $("#hour-12");
var onePm = $("#hour-13");
var twoPm = $("#hour-14");
var threePm = $("#hour-15");
var fourPm = $("#hour-16");
var fivePm = $("#hour-17");
//Shall return What day it is the currentDay/Month/Year + Hour/MM/SS
var today = function(){return dayjs().format('DD/MM/YYYY')};
document.getElementById("currentDay").innerText=today();
var currentHour = dayjs().format('h:mm:ss a');
var now = dayjs().hour();
//Constantly updates with this interval


//interval is setting the Interval and the format
//Not doing interval; will still work meaning you can just use var interval =
//And it will still work. Commenting out var interval will just stop
var interval = setInterval(function() {
$('#currentDay').html(today() + " " + dayjs().format('hh:mm:ss A'));
},100);
interval;
//init
//gets hour




function init(){
console.log("Current Hour " + currentHour);
var init9 = JSON.parse(localStorage.getItem("09:00 am"));
nineAm.val(init9);

var init10 = JSON.parse(localStorage.getItem("10:00 am"))
tenAm.val(init10);

var init11 = JSON.parse(localStorage.getItem("11:00 am"))
elevenAm.val(init11);

var init12 = JSON.parse(localStorage.getItem("12:00 pm"))
twelvePm.val(init12);

var init1 = JSON.parse(localStorage.getItem("01:00 pm"))
onePm.val(init1);

var init2 = JSON.parse(localStorage.getItem("02:00 pm"))
twoPm.val(init2);

var init3 = JSON.parse(localStorage.getItem("03:00 pm"))
threePm.val(init3);

var init4 = JSON.parse(localStorage.getItem("04:00 pm"))
fourPm.val(init4);

var init5 = JSON.parse(localStorage.getItem("05:00 pm"))
fivePm.val(init5);
} 


function backgroundActions(){
  //Past,Present,Future
  //form control to display the data value which are bounded because they are hidden
  //Grab each ID,Split off hour- from ID, So i can compare time
  //var x = split("-,6,7");
  //x;
  $(".time-block").each(function(){
    var time = parseInt($(this).attr("id").split("-")[1]);
    now = parseInt(now);
    console.log(now)
    if(now>time){
      console.log(now>time)
        $(this).removeClass("past present future")
        $(this).addClass("past");
      } else if (now<time){
        $(this).removeClass("past present future")
        $(this).addClass("future");
      } else{
        $(this).removeClass("past present future")
        $(this).addClass("present");
      }
    }
  )
}


  //Load These When the page is done loading
  init();
  backgroundActions();
  //ButtonFunction Test
  $(".saveBtn").on("click",function(){
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    var save = localStorage;
    save.setItem(time,value)
  }
)
$('#clearDay').on('click',function(){
  localStorage.clear();
  init();
})
}

)