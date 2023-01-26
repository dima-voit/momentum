// Time
function showTime() {
  const time = document.querySelector(".time");
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  hours = hours < 10 ? "0" + hours: hours;
  minutes = minutes < 10 ? "0" + minutes: minutes;
  seconds = seconds < 10 ? "0" + seconds: seconds;

  time.children[0].innerHTML = hours;
  time.children[1].innerHTML = minutes;
  time.children[2].innerHTML = seconds;

  setTimeout(showTime, 1000);
}

showTime(showDate());

function showDate() {
  const date = document.querySelector(".date");
  const dateOptions = {
    month: "long",
    day: "numeric",
    weekday: "long"
  };
  const currentDate = new Date().toLocaleDateString('en-UK', dateOptions);
  date.innerHTML = currentDate;
}

function getDayInterval() {
  const greeting = document.querySelector(".greeting");
  let hours = new Date().getHours();
  let dayInterval;

  if (hours >= 6 && hours < 12) {
    dayInterval = "morning";
  } else if (hours >= 12 && hours< 18) {
    dayInterval = "afternoon";
  } else if (hours >= 18 && hours < 24) {
    dayInterval = "evening";
  } else {
    dayInterval = "night";
  }

  greeting.textContent = `Good ${dayInterval},`
}

getDayInterval();
