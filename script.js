// Global variables
const timeDiv = document.querySelector(".watch .time");
const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");
const btnReset = document.getElementById("reset");

let seconds = 0;
let interval = null;

// Event listeners
btnStart.addEventListener("click", start);
btnStop.addEventListener("click", stop);
btnReset.addEventListener("click", reset);
// Update the timer
function timer() {
    seconds++;

    // Formatting 
    let hrs = Math.floor(seconds / 3600); // 3600secs in 1 hour
    let mins = Math.floor((seconds - (hrs * 3600)) / 60); // 60secs in 1 min
    let secs = seconds % 60; // sec=0 until 60, when 61, sec=1

    // Adding 0
    if (secs < 10) secs = "0" + secs;
    if (mins < 10) mins = "0" + mins;
    if (hrs < 10) hrs = "0" + hrs;

    // Timer
    timeDiv.innerText = `${hrs}:${mins}:${secs}`;
};

function start() {
    if (interval) {
        return
    };
    // +1 every 1sec = 1000msecs
    interval = setInterval(timer, 1000);
};
function stop() {
    clearInterval(interval);
    // +0 every 1 sec = stop
    interval = null;
};
function reset() {
    // All in stop()
    stop();
    // seconds to initialValue
    seconds = 0;
    // innerText to initialValue
    timeDiv.innerText = "00:00:00";
};