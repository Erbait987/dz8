const cvs = document.querySelector("#canvas");
const ctx = cvs.getContext("2d");

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBot = new Image();

bird.src = "../img/bird.png";
bg.src = "../img/flappyback.png";
fg.src = "../img/floor.png";
pipeUp.src = "../img/topPipe.png";
pipeBot.src = "../img/BotPipe.png";

let gap = 90;
let xPos = 10;
let yPos = 150;
let grav = 1;
let score = 0;
document.addEventListener("keydown", moveUP);
document.addEventListener("click", moveUP);

function moveUP() {
  yPos -= 25;
}

const pipe = [];
pipe[0] = {
  x: cvs.width,
  y: 0,
};

function draw() {
  ctx.drawImage(bg, 0, 0);

  for (let i = 0; i < pipe.length; i++) {
    ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
    ctx.drawImage(pipeBot, pipe[i].x, pipe[i].y + pipeUp.height + gap);

    pipe[i].x--;

    if (pipe[i].x == 125) {
      pipe.push({
        x: cvs.width,
        y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height,
      });
    }

    if (
      (xPos + bird.width >= pipe[i].x &&
        xPos <= pipe[i].x + pipeUp.width &&
        (yPos <= pipe[i].y + pipeUp.height ||
          yPos + bird.height >= pipe[i].y + pipeUp.height + gap)) ||
      yPos + bird.height >= cvs.height - fg.height
    ) {
      location.reload();
    }

    if (pipe[i].x == 5) {
      score++;
    }
  }

  ctx.drawImage(fg, 0, cvs.height - fg.height);
  ctx.drawImage(bird, xPos, yPos);

  yPos += grav;
  requestAnimationFrame(draw);

  ctx.fillStyle = "#000";
  ctx.font = "24px Verdana";
  ctx.fillText("счет:" + score, 10, cvs.height - 20);
}

pipeBot.onload = draw;
