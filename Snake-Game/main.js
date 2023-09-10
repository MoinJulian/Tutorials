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

let food;

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
    handleGameOver();
    return;
  }

  if (x + 1 >= SIZE) {
    handleGameOver();
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

function handleGameOver() {
  statusElement.innerText = "Gameover";
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
