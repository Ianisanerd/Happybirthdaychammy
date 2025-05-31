// No need for 'designImages' array or 'createRandomDesignElements' function anymore
// for static design elements.

// Event listener for playing music (unchanged)
document.getElementById('playMusicBtn').addEventListener('click', function() {
    var song = document.getElementById('birthdaySong');
    if (song.paused) {
        song.play();
        this.textContent = 'Pause Song';
    } else {
        song.pause();
        this.textContent = 'Play a Birthday Song!';
    }
});

// No need to call a function for design elements on DOMContentLoaded anymore
// as they are placed directly in HTML and styled by CSS.