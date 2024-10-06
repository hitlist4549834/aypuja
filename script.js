/* script.js */
const video = document.getElementById('videoPlayer');

function playPause() {
    if (video.paused) {
        video.play();
        document.querySelector('button i').className = 'fas fa-pause';
    } else {
        video.pause();
        document.querySelector('button i').className = 'fas fa-play';
    }
}

function skip(value) {
    video.currentTime += value;
}

function changeSpeed() {
    const playbackRate = document.getElementById('playbackRate').value;
    video.playbackRate = playbackRate;
}

function downloadVideo() {
    const url = video.currentSrc;
    const a = document.createElement('a');
    a.href = url;
    a.download = 'video.mp4';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        video.requestFullscreen().catch(err => {
            alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen();
    }
}
