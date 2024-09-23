const D = document
// const grayscaleButton = D.querySelector(".grayscaleButton")
const container = D.querySelector("body")
// const slider = D.getElementById("slider")

function randomRange(minNum, maxNum) {
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
}

function rain(fall) {
  for (i = 0; i < fall; i++) {
    let drop = D.createElement("div")
    let splash = D.createElement("div")

    let randomLeft = randomRange(0, 1600)

    drop.classList.add("drop")
    drop.style.left = randomLeft + "px"
    drop.style.top = randomRange(-1000, 1400) + "px"

    if (i % 2 === 0) {
      splash.classList.add("splash")
      splash.style.bottom = Math.floor(Math.random() * 100) + "px"
      splash.style.left = randomLeft + "px"
      splash.style.animation =
        "splashing " + randomRange(0.2, 0.7) + "s linear infinite"
      container.appendChild(splash)
    }

    container.appendChild(drop)
  }
}

window.onload = function () {
  rain(80)
}
