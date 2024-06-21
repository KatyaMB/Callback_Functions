// Setting variables to hold the intervalID
// and also a counter
let intervalID;
let counter = 0;

let startCounter = function() {
    intervalID = setInterval(function () {
        counter++;
        console.log(counter);
    } , 1000);
    return intervalID;
}

// Stopping the counter
function stopCounter() {
    clearInterval(intervalID);
}

let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');

// Callback function argument for start button
startButton.addEventListener("click", startCounter);

// Callback function argument for stop button
stopButton.addEventListener("click", stopCounter);

