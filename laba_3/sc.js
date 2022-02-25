




// document.getElementById("pausebtn").classList.add("hideBlock");



const audio = document.querySelector('.music_src');
localStorage.setItem('isPlay', '0');

function play_pause(){

  console.log(localStorage.getItem("isPlay"),localStorage.getItem("isPlay")==0);
  if (localStorage.getItem("isPlay") == 0) {
    // audio.currentTime = 0;
    audio.play();
    localStorage.setItem('isPlay', '1');

    document.getElementById("playbtn").classList.add("hideBlock")
    document.getElementById("pausebtn").classList.remove("hideBlock")
    
  }
  else
  {
    document.getElementById("playbtn").classList.remove("hideBlock")
    document.getElementById("pausebtn").classList.add("hideBlock")
    
    localStorage.setItem('isPlay', '0');
    audio.pause()
  } 
  
}

audio.addEventListener("ended", ()=>{
  audio.currentTime = 0;
  localStorage.setItem('isPlay', '0');


  document.getElementById("playbtn").classList.add("hideBlock")
  document.getElementById("pausebtn").classList.remove("hideBlock")
  

});



function StopAudio(){
  audio.currentTime = 0;
  localStorage.setItem('isPlay', '0');
  audio.pause()
}


