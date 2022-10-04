async function audioPlayer() {
  let isPlay = false;
  var checkExist = setInterval(() => {
    const playButton = document.querySelector('.music-button');
      if (playButton) {
        clearInterval(checkExist);
        const audio = new Audio();
        audio.src = 'assets/audio/audio.mp3';
        if (localStorage.getItem('musicPlaying') === "true") {          
          isPlay = true;
          audio.play();
          playButton.classList.remove('play');
          playButton.classList.add('mute');
        }

        playMusic();

        function playMusic() {
          
          playButton.addEventListener('click', () => {
            if (isPlay) {
              pauseAudio();
              isPlay = false;
              localStorage.setItem('musicPlaying', false);
            } else {
              playAudio();
              isPlay = true;
              localStorage.setItem('musicPlaying', true);
            }
            togglePlayBtn();
          })
        }

        function playAudio() {
          audio.src = 'assets/audio/audio.mp3';
          audio.play();
        }
      
        function pauseAudio() {
          audio.pause();
        }
      
        function togglePlayBtn() {
          if (isPlay) {
            playButton.classList.remove('play');
            playButton.classList.add('mute');
          } else {
            playButton.classList.remove('mute');
            playButton.classList.add('play');
          }
        }      
      }  
  })
}

export { audioPlayer }