function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const inputV = document.querySelector("#controls input");
const boxes = document.getElementById("boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = inputV.value;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");

    box.style.backgroundColor = getRandomHexColor();
    box.style.width = 30 + i * 10 + "px";
    box.style.height = 30 + i * 10 + "px";
    boxes.appendChild(box);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}