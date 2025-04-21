const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const timer = document.getElementById('timer');

const workInput = document.getElementById('work-duration');
const breakInput = document.getElementById('break-duration');
const cycleCountDisplay = document.getElementById('cycle-count');

const alertSound = new Audio('alarm-327234.mp3');

let workDuration = parseInt(workInput.value);
let breakDuration = parseInt(breakInput.value);

let minutes = workDuration;
let seconds = 0;
let isWorkSession = true;
let timerId = null;
let completedCycles = 0;

function updateDisplay(min, sec) {
    timer.innerHTML = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function updateCycleDisplay() {
    cycleCountDisplay.innerText = `Completed Cycles: ${completedCycles}`;
}

function startTimer() {
    timerId = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
            clearInterval(timerId);
            isWorkSession = !isWorkSession;

            if (isWorkSession) {
                completedCycles++;
                updateCycleDisplay();
            }

            workDuration = parseInt(workInput.value);
            breakDuration = parseInt(breakInput.value);
            minutes = isWorkSession ? workDuration : breakDuration;
            seconds = 0;

            updateDisplay(minutes, seconds);
            alertSound.play()
            startTimer();
        } else {
            if (seconds === 0) {
                seconds = 59;
                minutes--;
            } else {
                seconds--;
            }

            updateDisplay(minutes, seconds);
        }
    }, 1000);
}

start.addEventListener('click', () => {
    if (timerId) return;

    workDuration = parseInt(workInput.value);
    breakDuration = parseInt(breakInput.value);

    if (minutes === 0 && seconds === 0) {
        minutes = isWorkSession ? workDuration : breakDuration;
    }

    updateDisplay(minutes, seconds);
    saveToLocalStorage();
    
    startTimer();

});

stop.addEventListener('click', () => {
    clearInterval(timerId);
    timerId = null;
});

reset.addEventListener('click', () => {
    clearInterval(timerId);
    timerId = null;

    workDuration = parseInt(workInput.value);
    breakDuration = parseInt(breakInput.value);

    minutes = workDuration;
    seconds = 0;
    isWorkSession = true;
    completedCycles = 0;

    updateDisplay(minutes, seconds);
    updateCycleDisplay();
    saveToLocalStorage();
});

function saveToLocalStorage(){
    const settings = {
        workDuration,
        breakDuration,
        completedCycles,
    };
    localStorage.setItem('pomodoroSettings', JSON.stringify(settings))
}
