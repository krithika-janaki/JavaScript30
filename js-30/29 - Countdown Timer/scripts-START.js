const timerDisplay = document.querySelector('.display__time-left');
console.log('timerDisplay',timerDisplay);
function timer(sec) {
    let now = (new Date()).getTime();
    let timeToBeShown = sec*1000 + now;

    const cowntdown = setInterval(() => {
        let time = Math.round((timeToBeShown - Date.now())/1000);
        time--;
        console.log(time);
        if(time <= 0) {
            clearInterval(cowntdown);
        }
        displayTimer(time);
    }, 1000)
}

function displayTimer(time) {
    const minutes = Math.round(time/60);
    const seconds = time % 60;
    timerDisplay.textContent = `${minutes} : ${seconds} `

}
console.log({navigator});
timer(200);