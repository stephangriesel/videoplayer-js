const video = document.getElementById('video');
console.log(video);
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
const mute = document.getElementById('mute');
const unmute = document.getElementById('unmute');

// Play & pause video
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Update play/pause icon
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

// Update mute/unmute icon
function updateMuteIcon() {
    console.log("update mute icon clicked");
    // if muted
    // show mute icon
    // if unmuted 
    // show unmuted icon
}

// Update Progress & Timestamp
function updateProgress() {
    console.log("current time: " + video.currentTime);
    console.log("video duration: " + video.duration);
    progress.value = (video.currentTime / video.duration) * 100;

    // Get minutes 
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }

    // Get seconds
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`
}

// Time progress
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

// Stop Video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

// Unmute Video
function unmuteVideo() {
    console.log("unmute video")
    video.muted = false;
}

// Mute Video
function muteVideo() {
    console.log("mute video")
    video.muted = true;
}

// Event listener

// Video Status
video.addEventListener('click', toggleVideoStatus);

// Play/Pause Icon
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);

// Mute/Unmute Icon
mute.addEventListener('click', updateMuteIcon);

// Mute/Unmute 
unmute.addEventListener('click', unmuteVideo);
mute.addEventListener('click', muteVideo);

// Update Time
video.addEventListener('timeupdate', updateProgress);

// Play/Stop Video
play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);

// Video Progress
progress.addEventListener('change', setVideoProgress);