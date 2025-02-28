// Set up the timer
let minutes = 25;
let seconds = 0;
let isRunning = false;
let timerInterval = null;

// DOM Elements
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const startPauseBtn = document.getElementById("startPauseBtn");
const resetBtn = document.getElementById("resetBtn");
const statusText = document.getElementById("statusText");

// Start or Pause the Timer
startPauseBtn.addEventListener("click", () => {
  if (isRunning) {
    clearInterval(timerInterval);
    startPauseBtn.textContent = "Start";
  } else {
    timerInterval = setInterval(updateTimer, 1000);
    startPauseBtn.textContent = "Pause";
  }
  isRunning = !isRunning;
});

// Reset the Timer
resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  isRunning = false;
  minutes = 25;
  seconds = 0;
  minutesDisplay.textContent = formatTime(minutes);
  secondsDisplay.textContent = formatTime(seconds);
  startPauseBtn.textContent = "Start";
  statusText.textContent = "Focus";
});

// Update Timer
function updateTimer() {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(timerInterval);
      statusText.textContent = "Take a Break!";
      minutes = 25;
      seconds = 0;
      startPauseBtn.textContent = "Start";
      isRunning = false;
    } else {
      minutes--;
      seconds = 59;
    }
  } else {
    seconds--;
  }

  minutesDisplay.textContent = formatTime(minutes);
  secondsDisplay.textContent = formatTime(seconds);
}

// Format time with leading zero (e.g., 9 becomes 09)
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
