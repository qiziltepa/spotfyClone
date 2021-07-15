var audio=document.createElement('audio');
var div=document.getElementById('audio');
div.appendChild(audio);
audio.setAttribute('controls','');
audio.setAttribute('src','./src/doxxim_telbalarcha_33.mp3');
var playPause=document.getElementById('pause')
var timer=document.getElementById('timeRange');
function listen(){
    if (audio.paused) {
        audio.play();
        playPause.innerText='pause'

        } else {
       audio.pause();
       playPause.innerText='play_arrow'
        }
}
function timeCurrent(){
    audio.currentTime=timer.value;
    timer.setAttribute('max',`${audio.duration}`)
 }



function runner(){
    var sec=`${Math.ceil(audio.currentTime)%60}`
    if(sec<10){
        sec=`0`+sec;
    }
    timer.value=`${audio.currentTime}`;
    timer.setAttribute('max',`${audio.duration}`)
    var timeNow=document.getElementById('timeNow'),
timeTotal=document.getElementById('timeTotal')
timeNow.innerText=`${Math.floor(audio.currentTime/60)}`+":"+sec;    
timeTotal.innerText=`${Math.floor(audio.duration/60)}`+":"+`${Math.ceil(audio.duration%60)}`;
}
setInterval(() => {
    runner();
    console.log(audio.duration);
}, 1000);












function back(){
    history.back();
}

var volumeMusic=document.getElementById('volume')
volumeValue=document.getElementById('volumeValue')
function volum(){
audio.volume=volumeMusic.value/100;
volumeValue.innerText=volumeMusic.value;
}
volum();