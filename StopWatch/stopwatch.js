// script.js
let timer;
let centiseconds = 0; // 100分の1秒を表します

function start() {
    document.getElementById('startBtn').disabled = true;
    document.getElementById('stopBtn').disabled = false;
    document.getElementById('resetBtn').disabled = false;
    
    timer = setInterval(function() {
        centiseconds++;
        displayTime();
    }, 10); // 100分の1秒ごとに更新
}

function stop() {
    document.getElementById('startBtn').disabled = false;
    document.getElementById('stopBtn').disabled = true;
    
    clearInterval(timer);
}

function reset() {
    stop();
    document.getElementById('resetBtn').disabled = true;
    centiseconds = 0;
    displayTime();
}

function displayTime() {
    let minutes = Math.floor(centiseconds / 6000);
    let seconds = Math.floor((centiseconds % 6000) / 100);
    let centiSeconds = centiseconds % 100;

    let minuteStr = minutes.toString().padStart(2, '0');
    let secondStr = seconds.toString().padStart(2, '0');
    let centiSecondStr = centiSeconds.toString().padStart(2, '0');

    document.getElementById('time').textContent = minuteStr + ':' + secondStr + ':' + centiSecondStr;
}
