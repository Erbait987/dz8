const audio = document.querySelector("#audio");
let stopTimer;

document.querySelector("#text").addEventListener("input", () => {
  clearTimeout(stopTimer);
  audio.play();
  stopTimer = setTimeout(() => {
    audio.pause();
  }, 500);
});
