const mainElement = document.querySelector("main");

for (let y = 0; y < 20; y++) {
  for (let x = 0; x < 20; x++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.id = y + "," + x;
    mainElement.appendChild(cell);
  }
}

let snake = [
  [4, 5],
  [5, 5],
  [6, 5],
];

function drawSnake() {
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.classList.remove("active");
  });
  for (const [x, y] of snake) {
    const cell = document.getElementById(y + "," + x);
    cell.classList.add("active");
  }
}

drawSnake();
