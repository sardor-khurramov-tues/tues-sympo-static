var countDownDate = new Date("Nov 1, 2025 00:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = "<strong>" + days + "</strong>";
  document.getElementById("hours").innerHTML = "<strong>" + hours + "</strong>";
  document.getElementById("minutes").innerHTML = "<strong>" + minutes + "</strong>";
  document.getElementById("seconds").innerHTML = "<strong>" + seconds + "</strong>";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
