const toggleButton = document.getElementById('toggle-audio-evercast');
const audioControls = document.getElementById('evercastPlayerNormal');
const evercastMain = document.getElementById('evercastPlayerNormal')

toggleButton.addEventListener('click', () => {
     if (evercastMain.style.display === 'none') {
         audioControls.style.display = 'block';
         toggleButton.innerText = 'Hide Evercast Player';
     } else {
        evercastMain.style.display = 'none';
        toggleButton.innerText = 'Show Evercast Player';
    }
});

const audioUrlPostInputA = document.getElementById('submitEvercastUrlStreamer1')
const audioUrlPassThroughSubmit = document.getElementById('passUrlSubmit1')

audioUrlPassThroughSubmit.addEventListener('click', () => {
    const AudioSrc = audioUrlPostInputA.setAttribute('src', 'AUDIO_SRC_FILE');
    function cs_change_music(music) {
        audioControls.onpause();
        audioControls.setAttribute('src', audioUrlPostInputA.innerText)
        audioControls.load();
        audioControls.onplay();
    }
})