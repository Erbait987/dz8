const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");
const audioElements = {};
const keyState = {};
const keyMap = {
  KeyA: "a",
  KeyW: "w",
  KeyS: "s",
  KeyE: "e",
  KeyD: "d",
  KeyF: "f",
  KeyT: "t",
  KeyG: "g",
  KeyY: "y",
  KeyH: "h",
  KeyU: "u",
  KeyJ: "j",
  KeyK: "k",
  KeyO: "o",
  KeyL: "l",
  KeyP: "p",
  Semicolon: ";",
};

pianoKeys.forEach((key) => {
  const keyName = key.dataset.key;
  audioElements[keyName] = new Audio(`tunes/${keyName}.wav`);
  audioElements[keyName].load();

  key.addEventListener("mousedown", () => {
    audioElements[keyName].currentTime = 0;
    audioElements[keyName].play();
    const clickedKey = document.querySelector(`[data-key="${keyName}"]`);
    clickedKey.classList.add("active");
  });

  key.addEventListener("mouseup", () => {
    const clickedKey = document.querySelector(`[data-key="${keyName}"]`);
    clickedKey.classList.remove("active");
  });
});

const handleVolume = (e) => {
  for (const key in audioElements) {
    audioElements[key].volume = e.target.value;
  }
};

const showHideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

const pressedKey = (e) => {
  const keyName = keyMap[e.code];
  if (keyName && !keyState[keyName]) {
    keyState[keyName] = true;
    audioElements[keyName].currentTime = 0;
    audioElements[keyName].play();
    const clickedKey = document.querySelector(`[data-key="${keyName}"]`);
    clickedKey.classList.add("active");
  }
};

const releasedKey = (e) => {
  const keyName = keyMap[e.code];
  if (keyName) {
    keyState[keyName] = false;
    const clickedKey = document.querySelector(`[data-key="${keyName}"]`);
    clickedKey.classList.remove("active");
  }
};

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
document.addEventListener("keyup", releasedKey);
