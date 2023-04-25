/*const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('min');
const Seconds = document.getElementById('sec');

const nowDate = new Date().getFullYear();
const myDate = new Date(`06/24/2023`);

function countDown() {
    const nowTime = new Date();
    const space = myDate - nowTime;
    const day = Math.floor(space / 1000 / 60 / 60 / 24);
    const hour = Math.floor(space / 1000 / 60 / 60) % 24;
    const min = Math.floor(space / 1000 / 60) % 60;
    const sec = Math.floor(space / 1000) % 60;

    Days.innerHTML = day;
    Hours.innerHTML = hour < 10 ? '0' + hour : hour;
    Minutes.innerHTML = min < 10 ? '0' + min : min;
    Seconds.innerHTML = sec < 10 ? '0' + sec : sec;
    
}
setInterval(countDown, 1000);*/

const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('min');
const Seconds = document.getElementById('sec');
const countdownBtn = document.getElementById('countdown-btn');
const dateInput = document.getElementById('date-input');

function countDown() {
  const nowTime = new Date();
  const space = myDate - nowTime;
  const day = Math.floor(space / 1000 / 60 / 60 / 24);
  const hour = Math.floor(space / 1000 / 60 / 60) % 24;
  const min = Math.floor(space / 1000 / 60) % 60;
  const sec = Math.floor(space / 1000) % 60;

  Days.innerHTML = day;
  Hours.innerHTML = hour < 10 ? '0' + hour : hour;
  Minutes.innerHTML = min < 10 ? '0' + min : min;
  Seconds.innerHTML = sec < 10 ? '0' + sec : sec;
}

let myDate;

countdownBtn.addEventListener('click', () => {
  const inputDate = dateInput.value;
  if (inputDate) {
    myDate = new Date(inputDate);
    setInterval(countDown, 1000);
  }
});
