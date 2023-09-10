const mainElement = document.querySelector("main");
const statusElement = document.getElementById("status");

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

let snake = [
  [0, 0],
  [1, 0],
];

let food = [6, 12];

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
  const [x, y] = snake.at(-1);
  const [_, ...other] = snake;
  switch (direction) {
    case "right":
      if (x + 1 >= SIZE) {
        handleGameOver();
        return;
      }

      snake = [...other, [x + 1, y]];
      break;
    case "left":
      if (x - 1 < 0) {
        handleGameOver();
        return;
      }

      snake = [...other, [x - 1, y]];
      break;
    case "up":
      if (y - 1 < 0) {
        handleGameOver();
        return;
      }

      snake = [...other, [x, y - 1]];
      break;
    case "down":
      if (y + 1 >= SIZE) {
        handleGameOver();
        return;
      }

      snake = [...other, [x, y + 1]];
      break;
  }
}

function handleGameOver() {
  statusElement.innerText = "Gameover";
  clearInterval(interval);
}

function generateFood() {
  if (food) {
    const [x, y] = food;
    const cell = document.getElementById(x + "," + y);
    cell.classList.remove("food");
  }
  const x = Math.floor(Math.random() * SIZE);
  const y = Math.floor(Math.random() * SIZE);
  food = [x, y];

  const cell = document.getElementById(x + "," + y);
  cell.classList.add("food");
}

generateFood();

function loop() {
  drawSnake();
  updateSnake();
}

window.addEventListener("keydown", (e) => {
  handleInput(e.key);
});

function handleInput(key) {
  switch (key) {
    case "ArrowLeft":
      direction = "left";
      break;
    case "ArrowRight":
      direction = "right";
      break;
    case "ArrowDown":
      direction = "down";
      break;
    case "ArrowUp":
      direction = "up";
      break;
    case " ":
      restartGame();
      break;
  }
}

function restartGame() {
  direction = "right";

  snake = [
    [0, 0],
    [1, 0],
  ];

  clearInterval(interval);

  statusElement.innerText = "";

  interval = setInterval(loop, 500);

  generateFood();
}

interval = setInterval(loop, 500);
