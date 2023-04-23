const launchDate = new Date("2023-06-01T12:00:00Z");

function countdown() {

  const currentDate = new Date();


  const diff = launchDate - currentDate;


  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((diff / 1000 / 60) % 60);
  let seconds = Math.floor((diff / 1000) % 60);


  document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
}


setInterval(countdown, 1000);

