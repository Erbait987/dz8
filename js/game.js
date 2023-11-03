alert(
  "Цель игры (учиться!) если выполнить (100 из 100 Учеба) то ты Выиграл игру, а если одна из характеристик падает до 0 или ниже то это смерть и игра начинается заново"
);

const health = document.getElementById("health");
const money = document.getElementById("money");
const hunger = document.getElementById("hunger");
const cheerfulness = document.getElementById("cheerfulness");
const mood = document.getElementById("mood");
const study = document.getElementById("study-mood");

const studyButton = document.getElementById("study");
const workButton = document.getElementById("work");
const eatButton = document.getElementById("eat");
const restButton = document.getElementById("rest");

let idForHealth = 100;
let idForMOney = 100;
let idForHunger = 100;
let idForCheer = 100;
let idForMood = 100;
let idForStudy = 0;
studyButton.addEventListener("click", () => {
  idForStudy++;
  idForCheer -= 10;
  idForMood -= 12;
  idForHunger -= 5;
  idForHealth -= 5;
  hunger.textContent = idForHunger;
  cheerfulness.textContent = idForCheer;
  mood.textContent = idForMood;
  health.textContent = idForHealth;

  study.textContent = `${idForStudy}/100`;
  if (parseInt(study.textContent) == 100) {
    alert("Поздравляю ты выиграл!");
  }
  healthDead();
});

workButton.addEventListener("click", () => {
  idForMOney += 30;
  idForHealth -= 10;
  idForHunger -= 20;
  idForMood -= 10;
  idForCheer -= 10;

  hunger.textContent = idForHunger;
  cheerfulness.textContent = idForCheer;
  mood.textContent = idForMood;
  health.textContent = idForHealth;
  money.textContent = idForMOney;
  healthDead();
});

eatButton.addEventListener("click", () => {
  idForHunger += 20;
  idForHealth += 15;
  idForMood += 5;
  idForMOney -= 20;
  idForCheer -= 5;
  hunger.textContent = idForHunger;
  cheerfulness.textContent = idForCheer;
  mood.textContent = idForMood;
  health.textContent = idForHealth;
  money.textContent = idForMOney;
  healthDead();
});

restButton.addEventListener("click", () => {
  idForHunger -= 12;
  idForHealth += 15;
  idForMood += 20;
  idForMOney -= 10;
  idForCheer += 20;
  hunger.textContent = idForHunger;
  cheerfulness.textContent = idForCheer;
  mood.textContent = idForMood;
  health.textContent = idForHealth;
  money.textContent = idForMOney;
  healthDead();
});

function dead() {
  idForHealth = 100;
  idForMOney = 100;
  idForHunger = 100;
  idForCheer = 100;
  idForMood = 100;
  idForStudy = 0;
  health.textContent = 100;
  money.textContent = 100;
  hunger.textContent = 100;
  cheerfulness.textContent = 100;
  mood.textContent = 100;
  study.textContent = 0;
  healthDead();
}
function healthDead() {
  if (health.textContent <= 0) {
    alert("вы не проследили за своим здоровьем теперь вы мертвы!");
    dead();
  }
  if (money.textContent <= 0) {
    alert(
      "Вы бездомный!У вас не денег! вы решили что бомжевать лучше чем учиться,вы нашли себе подобных и в один день спились до потери пульса!"
    );
    dead();
  }
  if (hunger.textContent <= 0) {
    alert(
      "вы слишком голодны чтобы продолжать учиться, вы идете до холодильника, но из за сильного голода, у вас нет сил открыть холодильник, не сумев его открыть вы падаете и умираете!"
    );
    dead();
  }
  if (cheerfulness.textContent <= 0) {
    alert(
      "вы слишком сильно утомились в последнее время, у вас нет сил ни на что,вы решаетесь пойти в магазин за продуктами и на улице спотыкаетесь об камень и намертво падаете на землю"
    );
    dead();
  }
  if (mood.textContent <= 0) {
    alert(
      "вы в сильном депрессивном состоянии, вы уже потеряли во всем смысл, и не видите дальнейшого смысла браться за учебу, и решаетесь покончить со всем,вы находите наркотик и по итогу теряете контроль над собой и вы умираете из за передозировки "
    );
    dead();
  }
}

const openBtn = document.querySelector("#open-btn");
const text = document.querySelector(".mytext");
openBtn.onclick = () => {
  text.classList.toggle("hide");
};
