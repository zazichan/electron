let timer;
let timeLeft = 25 * 60; // 25 minutes in seconds

document.getElementById("start-button").addEventListener("click", startTimer);

function startTimer() {
    let startButton = document.getElementById("start-button");
    startButton.disabled = true;

    timer = setInterval(function () {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        document.getElementById("timer-display").textContent = formatTime(minutes, seconds);
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            alert("Time's up! Take a break.");
            startButton.disabled = false;
            timeLeft = 25 * 60;
        }
    }, 1000);
}

function formatTime(minutes, seconds) {
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
