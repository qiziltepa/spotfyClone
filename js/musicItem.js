var audio=document.createElement('audio');
var div=document.getElementById('audio');
div.appendChild(audio);
audio.setAttribute('controls','');
audio.setAttribute('src','./src/doxxim_telbalarcha_33.mp3');
var playPause=document.getElementById('pause')
var timer=document.getElementById('timeRange');
audio.play();
playPause.innerText='pause'
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
        var timeNow=document.getElementById('timeNow'),
timeTotal=document.getElementById('timeTotal')
timeNow.innerText=`${Math.floor(audio.currentTime/60)}`+":"+sec;    
timeTotal.innerText=`${Math.floor(audio.duration/60)}`+":"+`${Math.ceil(audio.duration%60)}`;
}
setInterval(() => {
    runner();
}, 1000);
function back(){
    history.back();
}