// OOP: Song class
class Song {
  constructor(title, duration) {
    this.title = title;
    this.duration = duration; // in seconds
  }
}

// OOP: MusicPlayer class
class MusicPlayer {
  constructor() {
    this.currentSong = null;
    this.isPlaying = false;
  }

  play(song) {
    this.currentSong = song;
    this.isPlaying = true;
    document.getElementById("song-info").textContent = `Playing: ${song.title}`;
    this.updateProgress(song.duration);
  }

  pause() {
    this.isPlaying = false;
    document.getElementById("song-info").textContent = `Paused: ${this.currentSong.title}`;
  }

  updateProgress(duration) {
    let progressBar = document.getElementById("progress");
    progressBar.style.width = "0%";

    let progress = 0;
    let interval = setInterval(() => {
      if (!this.isPlaying || progress >= 100) {
        clearInterval(interval);
        return;
      }
      progress += 100 / duration;
      progressBar.style.width = progress + "%";
    }, 1000);
  }
}

// DOM + setTimeout
const player = new MusicPlayer();
const song1 = new Song("Shape of You", 10);

document.getElementById("play-btn").addEventListener("click", () => {
  player.play(song1);

  // Notification using setTimeout
  setTimeout(() => {
    alert("Enjoy the music 🎶");
  }, 2000);
});

document.getElementById("pause-btn").addEventListener("click", () => {
  player.pause();
});
