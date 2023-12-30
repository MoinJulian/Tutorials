const mainElement = document.querySelector("main");
const statusElement = document.getElementById("status");

const SIZE = 20;
let speed = 150;
mainElement.style.setProperty("--size", SIZE);
let direction = "right";
let firstTime = true;
let snake = [[0, 0]];
let food;
let interval;

for (let y = 0; y < SIZE; y++) {
  for (let x = 0; x < SIZE; x++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.id = y + "," + x;
    mainElement.appendChild(cell);
  }
}

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
  let nextHead;
  switch (direction) {
    case "right":
      nextHead = [x + 1, y];
      break;
    case "left":
      nextHead = [x - 1, y];
      break;
    case "up":
      nextHead = [x, y - 1];
      break;
    case "down":
      nextHead = [x, y + 1];
      break;
  }
  if (!isValid(nextHead)) {
    handleGameover();
    return;
  }

  if (snake.some(([u, v]) => [u, v].toString() == nextHead.toString())) {
    handleGameover();
    return;
  }

  let hasFood = nextHead.toString() == food.toString();
  if (hasFood) {
    snake = [...snake, nextHead];
    generateFood();
  } else {
    snake = [...other, nextHead];
  }
}

function isValid([x, y]) {
  return x >= 0 && y >= 0 && x < SIZE && y < SIZE;
}

function handleGameover() {
  statusElement.innerText = `Gameover (Length: ${snake.length})`;
  clearInterval(interval);
}

function generateFood() {
  if (food) {
    const [x, y] = food;
    const cell = document.getElementById(y + "," + x);
    cell.classList.remove("food");
  }
  const x = Math.floor(Math.random() * SIZE);
  const y = Math.floor(Math.random() * SIZE);
  food = [x, y];
  const cell = document.getElementById(y + "," + x);
  cell.classList.add("food");
}

generateFood();

function loop() {
  writeLength();
  if (!firstTime) updateSnake();
  drawSnake();
  firstTime = false;
}

window.addEventListener("keydown", (e) => {
  handleInput(e.key);
});

function handleInput(key) {
  switch (key) {
    case "ArrowLeft":
      if (direction !== "right") {
        direction = "left";
      }
      break;
    case "ArrowRight":
      if (direction != "left") {
        direction = "right";
      }
      break;
    case "ArrowDown":
      if (direction != "up") {
        direction = "down";
      }
      break;
    case "ArrowUp":
      if (direction != "down") {
        direction = "up";
      }
      break;
    case " ":
      restartGame();
      break;
  }
}

function restartGame() {
  direction = "right";
  snake = [[0, 0]];
  clearInterval(interval);
  statusElement.innerText = "";
  firstTime = true;
  interval = setInterval(loop, speed);
  generateFood();
}

function writeLength() {
  statusElement.innerText = "Length: " + snake.length;
}

interval = setInterval(loop, speed);
