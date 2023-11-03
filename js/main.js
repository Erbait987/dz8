function anim() {
  const body = document.body,
    startX = -100,
    startY = -100,
    w = document.documentElement.offsetWidth,
    h = document.documentElement.offsetHeight;

  body.addEventListener("mousemove", function (evt) {
    let posX = Math.round((evt.clientX / w) * startX);
    let posY = Math.round((evt.clientY / h) * startY);
    body.style.backgroundPosition = posX + "px " + posY + "px";
  });
}
anim();
