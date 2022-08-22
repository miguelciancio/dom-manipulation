// Variables for buttons

const startStopBtn = window.document.querySelector('#startStopBtn');
const resetBtn = window.document.querySelector('#resetBtn');

// Variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading zero

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for set interval & timerstatus

let timerInterval = null;
let timerStatus = "stopped";

// Stop Watch Function

function stopWatch() {

    seconds++;

    if(seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1) {
            minutes = 0;
            hours++
        };
    };

    if(seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    };

    if(minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }

    if(hours < 10) {
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }

    let displayTimer = window.document.getElementById('timer').innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;
};


// Start & Stop button Event Listener - Capturing the click's action.

startStopBtn.addEventListener('click', function(){
    if(timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        startStopBtn.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "started";
    } else {
        window.clearInterval(timerInterval);
        startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "stopped";
    }
});


// Reset button Event Listener - Capturing the click's action.

resetBtn.addEventListener('click', function() {
    if(timerStatus === "started") {
        window.clearInterval(timerInterval);

        seconds = 0;
        minutes = 0;
        hours = 0;

        window.document.getElementById('timer').innerText = "00:00:00";

        startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "stopped";
    } else {
        window.clearInterval(timerInterval);
    
        seconds = 0;
        minutes = 0;
        hours = 0;
        
        window.document.getElementById('timer').innerText = "00:00:00";
    };
});