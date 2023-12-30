const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const NUMBER_OF_POINTS = 100;
const POINT_SIZE = 3;
const POINT_VELOCITY = 2;
const POINT_COLOR = "#5ff";
let LINE_THRESHOLD = 100;

let points = [];

function adjustCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = POINT_COLOR;
  LINE_THRESHOLD = ((canvas.width + canvas.height)/2) * 0.08
}

window.addEventListener("resize", () => {
  adjustCanvas();
});

function loop() {
  clearCanvas();
  updatePoints();
  drawLines();
  drawPoints();
  requestAnimationFrame(loop);
}

function init() {
  adjustCanvas();
  generatePoints();
  drawPoints();
  loop();
}

document.addEventListener("DOMContentLoaded", init);

function generatePoints() {
  for (let i = 0; i < NUMBER_OF_POINTS; i++) {
    const x = randInt(0, canvas.width);
    const y = randInt(0, canvas.height);
    const r = POINT_SIZE;
    const vx = rand(-POINT_VELOCITY, POINT_VELOCITY);
    const vy = rand(-POINT_VELOCITY, POINT_VELOCITY);
    const point = { x, y, r, vx, vy };
    points.push(point);
  }
}

function drawPoint(point) {
  ctx.beginPath();
  ctx.arc(point.x, point.y, point.r, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
}

function drawPoints() {
  points.forEach(drawPoint);
}

function updatePoint(point) {
  point.x += point.vx;
  point.y += point.vy;
  boundToCanvas(point);
}

function updatePoints() {
  points.forEach(updatePoint);
}

function drawLine(p, q) {
  const dist = distance(p, q);
  if (dist > LINE_THRESHOLD) return;
  ctx.strokeStyle = computeLineColor(dist);
  ctx.beginPath();
  ctx.moveTo(p.x, p.y);
  ctx.lineTo(q.x, q.y);
  ctx.stroke();
  ctx.closePath();
}

function computeLineColor(dist) {
  const ratio = dist / LINE_THRESHOLD;
  const alpha = (1 - ratio) ** 0.75;
  const hue = 120 + 50 * ratio;
  return `hsl(${hue}deg, 100%, 50%, ${alpha})`;
}

function drawLines() {
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      drawLine(points[i], points[j]);
    }
  }
}

// utillities

function randInt(a, b) {
  return a + Math.floor((b - a) * Math.random());
}

function rand(a, b) {
  return a + (b - a) * Math.random();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function boundToCanvas(point) {
  if (point.x - point.r >= canvas.width) {
    point.x = -point.r;
  } else if (point.x + point.r <= 0) {
    point.x = canvas.width + point.r;
  }

  if (point.y - point.r >= canvas.height) {
    point.y = -point.r;
  } else if (point.y + point.r <= 0) {
    point.y = canvas.height + point.r;
  }
}

function distance(point1, point2) {
  return ((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2) ** 0.5;
}
