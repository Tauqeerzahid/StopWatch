
var min =0;
var sec = 0;
var msec =0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;

function timer(){
    msec++
    msecHeading.innerHTML = msec;
    if(msec>100)
    {
        sec++
        secHeading.innerHTML=sec;
        msec=0;
    }
    else if(sec>=60)
    {
        min++;
        sec=0;
        minHeading.innerHTML=min;
    }
}

function start()
{
    interval = setInterval(timer,10) 
    disableBtn()
}
function stop()
{
    clearInterval(interval);
    enableBtn();
}

function Reset()
{
    min=0;
    sec=0;
    msec=0;

    minHeading.innerHTML=min;
    msecHeading.innerHTML=msec;
    secHeading.innerHTML=sec;
    stop();
    enableBtn();
}


function disableBtn() {
    document.getElementById("myBtn").disabled = true;
  }
  
  function enableBtn() {
    document.getElementById("myBtn").disabled = false;
  }
  