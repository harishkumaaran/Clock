var secondHand= document.querySelector('.second-hand');
var minuteHand= document.querySelector('.minute-hand');
var hourHand=   document.querySelector('.hour-hand');

function setdate(){
    var now= new Date();
    
    var seconds= now.getSeconds();
    var secondDegree= ((360/60)*seconds)+90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    
    var mins = now.getMinutes();
    var minsDegree = ((360/60)*mins)+90;
    minuteHand.style.transform = `rotate(${minsDegree}deg)`;

    var hours = now.getHours();
    if(hours>12)
    {
        hours=hours-12;
    }
    var hourDegree = ((360/12)*hours)+90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    console.log(hourDegree);
}

setInterval(setdate,1000);
