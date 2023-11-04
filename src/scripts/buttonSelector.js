const toggleButton = document.getElementById('toggle-audio-evercast');
const audioControls = document.getElementById('audio-evercast');
                
toggleButton.addEventListener('click', () => {
     if (audioControls.style.display === 'none') {
         audioControls.style.display = 'block';
         toggleButton.innerText = 'Hide Audio Controls';
     } else {
        audioControls.style.display = 'none';
        toggleButton.innerText = 'Show Audio Controls';
    }
});

