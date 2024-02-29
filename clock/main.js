document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById("btn");
  var data = document.getElementById("date");

  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  var da = new Date();
  var day = da.getDate();
  var dayyyy = da.getDay();
  var month = da.getMonth();
  var year = da.getFullYear();


  /*h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;*/


  setInterval(currenttime, 1000);
  function currenttime() {
    second++;
    if (second > 59) {
      minute++;
      second = 0;
    }
    if (minute > 59) {
      minute = 0;
      hour++;
    }
    if (hour > 23) {
      hour = 0;
      day++;
    }
    var session = "AM";
    if (hour == 0) {
      hour = 12;
    }
    if (hour > 12) {
      hour = hour - 12;
      session = "PM";
    }
    if (hour == 12) {
      session = "PM";
    }
    /* */
    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
      if (date > 31) {
        date = 1;
        month++;
      }
    }
    else if (month == 3 || month == 5 || month == 8 || month == 10) {
      if (date > 30) {
        date = 1;
        month++;
      }
    }
    if (month == 1 && year % 4 == 0) {
      if (date > 29) {
        date = 1;
        month++;
      } else if (year % 4 !== 0) {
        if (date > 28) {
          date = 1;
          month++;
        }
      }
    }
    if (month > 12) {
      month = 0;
      year++;
    }

    var time = hour + ":" + minute + ":" + second + " " + session;
    document.getElementById("output").innerHTML = time;
    var d = day + " " + month + " " + year;
    document.getElementById("btn").innerHTML = d;




  }
  var sun = document.getElementById("sun");
  var mon = document.getElementById("mon");
  var tue = document.getElementById("tue");
  var wed = document.getElementById("wed");
  var thu = document.getElementById("thu");
  var fri = document.getElementById("fri");
  var sat = document.getElementById("sat");

  if (dayyyy === 0) {
    sun.style.backgroundColor = "green";
  } else if (dayyyy === 1) {
    mon.style.backgroundColor = "green";
  } else if (dayyyy === 2) {
    tue.style.backgroundColor = "green";
  } else if (dayyyy === 3) {
    wed.style.backgroundColor = "green";
  } else if (dayyyy === 4) {
    thu.style.backgroundColor = "green";
  } else if (dayyyy === 5) {
    fri.style.backgroundColor = "green";
  } else if (dayyyy === 6) {
    sat.style.backgroundColor = "green";
  }
});