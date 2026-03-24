const playBtn = document.getElementById('playBtn');
const audio = document.getElementById('myAudio');
const icon = document.getElementById('icon');

playBtn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        audio.pause();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
});

// অডিও শেষ হয়ে গেলে বাটন পরিবর্তন করা
audio.onended = function() {
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
};