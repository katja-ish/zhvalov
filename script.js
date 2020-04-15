const wheels = document.querySelectorAll(".wheel");
const nuts = document.querySelectorAll(".nut");
const nutsArr = ["macadamia", "gretsky", "peanut", "fist"];
let move = 0;

function step() {
  wheels.forEach(wheel => {
    wheel.style.transform = `rotate(${move++ % 360}deg)`;
  });

  window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);

const addNut = value => {
  nuts.forEach(n => {
    // n.className = "nut";
    if (Math.random() < 0.5) {
      n.classList.toggle(value);
    }
  });
};

document.addEventListener("click", e => {
  const nut = nutsArr[Math.floor(Math.random() * nutsArr.length)];

  addNut(nut);
});
