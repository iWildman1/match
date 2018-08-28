import Timer from '../models/timer';
import { store, updateTimer } from '../store';

//Store DOM references into JS variables
let panelTimer = document.querySelector('.timer');
let panelTimerSwitch = document.querySelector('#timer-switch');
let panelTimerActivate = document.querySelector('#activate-timer');
let panelTimerDeactivate = document.querySelector('#deactivate-timer');
let timer;
let counting;

//Setup clock
if (panelTimer) {
    timer = new Timer();
    let startTime = timer.getTime().formatted;

    let output = `
        <p>${startTime}</p>
    `;
    panelTimer.innerHTML = output;
}

//Setup timer toggle switch
if (panelTimerSwitch) {
    panelTimerSwitch.addEventListener('click', function() {
        if (timer.getStatus() == true) {
            timer.setStatus(false);
            panelTimerSwitch.classList.remove('toggle-on');
            panelTimerSwitch.classList.add('toggle-off');
            

            emitTimer();
        } else {
            timer.setStatus(true);
            panelTimerSwitch.classList.remove('toggle-off');
            panelTimerSwitch.classList.add('toggle-on');

            emitTimer();
        }
    })
}

if (panelTimerActivate) {
    panelTimerActivate.addEventListener('click', function(e) {
        e.preventDefault();
        
        let minutes = timer.getMinutes();
        let seconds = timer.getSeconds();
        
        timer.setCounting(true);

        counting = setInterval(function() {
            seconds++;

            if (seconds == 60) {
                seconds = 0;
                minutes++;
            }

            timer.setMinutes(minutes);
            timer.setSeconds(seconds);

            let output = `
                <p>${timer.getTime().formatted}</p>
            `;
            panelTimer.innerHTML = output;

            emitTimer();

        }, 1000);
    })
}

if (panelTimerDeactivate) {
    panelTimerDeactivate.addEventListener('click', function(e) {
        e.preventDefault();

        clearInterval(counting);
        timer.setCounting(false);

        emitTimer();
    })
}

function emitTimer() {
    const timerObj = timer.getTimerObject();

    updateTimer(timerObj);
}