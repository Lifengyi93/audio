var audio = document.getElementById('myaudio');
var start = document.getElementById('start');
var p = document.getElementById("length");
var span = document.getElementById('currentlength');
var timer1 = null;
var timer2 = null;

start.onclick = playPause;

var currenttime = 0;
var duration = audio.duration;
var playstep = p.offsetWidth/duration;
console.log(playstep);

var deg = 0;
var step = 1;
function rotate(){
    deg+=step;
    start.style.transform = 'rotate('+deg+'deg)';
}
function playline(){
    currenttime+= playstep;
    span.style.width = Math.ceil(currenttime)+'px';
    console.log(audio.ended);
}
function playPause(){
    if(audio.paused){
        audio.play();
        timer1 = setInterval(rotate,50);
        timer2 = setInterval(playline,1000);
        if(audio.ended){
            clearInterval(timer1);
        }
    }else{
        audio.pause();
        clearInterval(timer1);
        clearInterval(timer2);
    }

    
}