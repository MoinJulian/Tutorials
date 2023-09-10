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

let direction = "left";

let snake = [
  [0, 0],
  [1, 0],
];

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
  console.log("lost");
  clearInterval(interval);
}

function loop() {
  drawSnake();
  updateSnake();
}

interval = setInterval(loop, 500);
