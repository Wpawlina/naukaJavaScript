(function (window,document){
    const video = document.querySelector('#video');
    const playPauseButton = document.querySelector('#play-pause');
    const progressPauseInput = document.querySelector('#progress-input');
    const videoProgress = document.querySelector('#video-progress');
    const muteButton = document.querySelector('#mute');
    const videoControls=document.querySelector('#controls');
    const videoContainer=document.querySelector('#video-container');
    const fullScreenButton=document.querySelector('#fullscreen');
    const fullScreenSupported=!!document.fullscreenEnabled;
    function playPauseClicked(){
        if(video.paused){
            video.play();
        }else{
            video.pause();
            
        }
    }
    function updatePlayPauseButton(){
        if(video.paused){
            playPauseButton.innerHTML='<i class="fas fa-play"></i>';
        }
        else
        {
            playPauseButton.innerHTML='<i class="fas fa-pause"></i>';
        }

    }
    function muteButtonClicked(){
        if(video.muted){
            video.muted=false;
            muteButton.innerHTML='<i class="fas fa-volume-mute"></i>';
        }else{
            video.muted=true;
            muteButton.innerHTML='<i class="fas fa-volume-up"></i>';
        }
    }
    function updateVideoProgress(){
        progressPauseInput.value=(video.currentTime/video.duration)*100;
        let minutes=Math.floor(video.currentTime/60);
        if (minutes<10){
            minutes=`0${minutes}`;
        }
        let seconds=Math.floor(video.currentTime%60);
        if (seconds<10){
            seconds=`0${seconds}`;
        }
        videoProgress.innerHTML=`${minutes}:${seconds}`;

    }

    function seekVideo(){

        let seekToTime=(progressPauseInput.value/100)*video.duration;
        if (seekToTime<0 || seekToTime>video.duration){
           return
        }
        video.pause();
        video.currentTime=seekToTime;
        var timer=setInterval(function(){
            if(video.paused && video.readyState==4){
                clearInterval(timer);
                video.play();
            }
        },100);
    }
    function handleFullScreen(){
        if(!fullScreenSupported)
        {
            return;
        }

        if(document.fullscreenElement){
            document.exitFullscreen();
            fullScreenButton.innerHTML='<i class="fas fa-expand"></i>';
        }else{
            document.documentElement.requestFullscreen();
            fullScreenButton.innerHTML='<i class="fas fa-compress"></i>';
        }
    }

    function init()
    {
        console.log('start');
        video.controls=false;
        playPauseButton.addEventListener('click',playPauseClicked);
        video.addEventListener('play',updatePlayPauseButton);
        video.addEventListener('pause',updatePlayPauseButton);
        muteButton.addEventListener('click',muteButtonClicked);
        video.addEventListener('timeupdate',updateVideoProgress);
        progressPauseInput.addEventListener('change',seekVideo);
        if(fullScreenSupported){
            fullScreenButton.addEventListener('click',handleFullScreen);
        }
        else
        {
            fullScreenButton.style.display='none';
        }
        
    


    }
    window.onload=init;

})(window, document);