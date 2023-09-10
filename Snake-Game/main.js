const mainElement = document.querySelector("main");

const SIZE = 20;

mainElement.style.setProperty("--size", SIZE);

for (let y = 0; y < SIZE; y++) {
  for (let x = 0; x < SIZE; x++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.id = y + "," + x;
    mainElement.appendChild(cell);
  }
}

let direction = "right";

let snake = [[0, 0]];

let interval;

function drawSnake() {
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.classList.remove("active");
  });
  for (const [x, y] of snake) {
    const cell = document.getElementById(y + "," + x);
    if (cell) cell.classList.add("active");
  }
}

function updateSnake() {
  switch (direction) {
    case "right":
      const [x, y] = snake.at(-1);
      if (x + 1 >= SIZE) {
        console.log("lost");
        clearInterval(interval);
      }
      snake = [snake.slice(), [x + 1, y]];
      break;
  }
}

function loop() {
  updateSnake();
  drawSnake();
}

interval = setInterval(loop, 500);
