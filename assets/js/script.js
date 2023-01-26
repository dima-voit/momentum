// Time
// function showTime() {
//   const time = document.querySelector(".time");
//   const date = new Date();
//   const currentTime = date.toLocaleTimeString();
//   time.textContent = currentTime;
//   setInterval(showTime, 0);
// }

// showTime();

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

  setInterval(showTime, 1000)
}

showTime();
