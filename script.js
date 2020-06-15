let timer;
let sec = 0;
let min = 0;
let hour = 0;

let startBtn = document.getElementById('start'); 
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let timer_element = document.getElementById('timer');

startBtn.addEventListener('click', function () {
    timer = setInterval(timerHandler, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = true;
})


stopBtn.addEventListener('click', function () {
    timer = clearInterval(timer)
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = false;
})

resetBtn.addEventListener('click', function () {
    sec = 0;
    min = 0;
    hour = 0;
    timer_element.innerHTML = `00:00:00`;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;

})

function timerHandler () {
    sec++
    if (sec == 60){
        sec = 0;
        min++
    }

    if (min == 60){
        min = 0;
        hour++
    }

    displayTime();
}

function displayTime () {
    let secWithZero;
    let minWithZero;
    let hourWithZero;
    if (sec < 10){
        secWithZero = `0${sec}`
    } else {
        secWithZero = sec;
    }
    if (min < 10){
        minWithZero = `0${min}`
    } else {
        minWithZero = min;
    }
    if (hour < 10){
        hourWithZero = `0${hour}`
    } else {
        hourWithZero = hour;
    }
    timer_element.innerHTML = `${hourWithZero}:${minWithZero}:${secWithZero}`;
    }

