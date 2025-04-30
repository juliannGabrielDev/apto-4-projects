// Selector de medio
const selectorBtns = document.querySelectorAll(".media-selector .btn");
const contents = document.querySelectorAll(".media-player .content");

// Video
const video = document.getElementById("video");
const videoPlayBtn = document.getElementById("video-play-btn");
const videoBackBtn = document.getElementById("video-back-btn");
const videoFordwardBtn = document.getElementById("video-fordward-btn");

// Audio
const audio = document.getElementById("audio");
const audioPlayBtn = document.getElementById("audio-play-btn");
const audioPrevBtn = document.getElementById("audio-prev-btn");
const trackCover = document.querySelector(".img-wrapper .track-cover");
const audioProgressBar = document.getElementById("audio-progress-bar");
const audioTimestamp = document.getElementById("audio-timestamp");
const audioDuration = document.getElementById("audio-duration");

// Atajos de teclado
const keys = document.querySelectorAll(".keyboard-shortcuts .key");

// LÓGICA SELECTOR DE MEDIO ============================================================
// Manejar el cambio entre la pestaña de audio y video
const handleSelector = (button, index) => {
    selectorBtns.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    contents.forEach(content => content.classList.remove("active"));
    contents[index].classList.add("active");
}

selectorBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    handleSelector(btn, index);
    /*
    Al cambiar a la pestaña audio si el video está en repoducción
    - Pausar el video
    - Actualizar el icono del botón
    */
    if (selectorBtns[0].classList.contains("active") && !video.paused) {
        video.pause();
        videoPlayBtn.innerHTML = "<img class='' src='media/img/player-play.svg' alt='Pause'>";
    }
}));

// LÓGICA AUDIO ============================================================
audioPlayBtn.addEventListener("click", () => {
    (audio.paused) ? audio.play() : audio.pause();
});

audioPrevBtn.addEventListener("click", () => audio.currentTime = 0);

audio.addEventListener("play", () => {
    trackCover.classList.add("spin");
    audioPlayBtn.innerHTML = "<img src='media/img/player-pause.svg' alt='Pausar'>";
});
audio.addEventListener("pause", () => {
    trackCover.classList.remove("spin");
    audioPlayBtn.innerHTML = "<img src='media/img/player-play.svg' alt='Reproducir'>";
});
audio.addEventListener("ended", () => {
    audioPlayBtn.innerHTML = "<img src='media/img/rotate-clockwise.svg' alt='Volver a reproducir'>";
});
audioProgressBar.addEventListener("input", () => {
    audio.currentTime = audioProgressBar.value;
});
audio.addEventListener("timeupdate", () => {
    audioProgressBar.max = audio.duration;
    audioProgressBar.value = audio.currentTime;
    audioTimestamp.innerText = formatTime(audio.currentTime);
});

audio.addEventListener("loadedmetadata", () => {
    audioDuration.innerText = formatTime(audio.duration);
});
const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
};

// LÓGICA VIDEO ============================================================
videoPlayBtn.addEventListener("click", () => {
    video.paused ? video.play() : video.pause();
});
video.addEventListener("play", () => {
    videoPlayBtn.innerHTML = "<img src='media/img/player-pause.svg' alt='Pausar'>";
    videoBackBtn.style.display = videoFordwardBtn.style.display = "block";
    if (audio.play) audio.pause();
});
video.addEventListener("pause", () => {
    videoPlayBtn.innerHTML = "<img src='media/img/player-play.svg' alt='Reproducir'>";
});
// Al finalizar el video
video.addEventListener("ended", () => {
    videoPlayBtn.innerHTML = "<img src='media/img/rotate-clockwise.svg' alt='Volver a reproducir'>";
    videoBackBtn.style.display = videoFordwardBtn.style.display = "none";
});
// Botones de retroce y avance
videoBackBtn.addEventListener("click", () => video.currentTime -= 10);
videoFordwardBtn.addEventListener("click", () => video.currentTime += 10);

// Lógica Atajos de teclado -------------------------------------------------------
window.addEventListener("keydown", e => {
    e.preventDefault();
    if (selectorBtns[0].classList.contains("active")) {
        shortcuts(e, audio, audioPlayBtn);
    } else {
        shortcuts(e, video, videoPlayBtn);
    }
});
const shortcuts = (e, media, PlayBtn) => {
    if (e.code === "Space" || e.code === "KeyK") {
        (media.paused) ? media.play() : media.pause();
        PlayBtn.classList.toggle("paused");
    } else if (e.code === "KeyJ") {
        media.currentTime -= 10
    } else if (e.code === "KeyL") {
        media.currentTime += 10;
    } else if (e.code === "KeyM") {
        media.muted = !media.muted;
    }
}