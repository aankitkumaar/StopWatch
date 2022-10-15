const starttimer = document.getElementById("start");
const stoptimer = document.getElementById("stop");
const resettimer = document.getElementById("reset");
const time = document.getElementById("timer");

let second = 0;
let interval = null;

starttimer.addEventListener(("click"),start);
stoptimer.addEventListener(("click"),stop);
resettimer.addEventListener(("click"),reset);

function timer()
{
    second++;
    let hr = Math.floor(second/3600);
    let min = Math.floor((second-(hr*3600))/60);
    let sec = second%60;
    if(sec<10) sec = "0"+sec;
    if(min<10) min = "0"+min;
    if(hr<10) hr = "0"+hr;
    time.innerHTML = `${hr} : ${min} : ${sec}`;
}

function start()
{
    if(interval) return;

    interval = setInterval(timer,1000);
}
function stop()
{
clearInterval(interval);
interval = null;
}
function reset()
{
    stop();
    second = 0;
    time.innerHTML = "00 : 00 : 00"

}

