const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const prefers_dark = window.matchMedia("(prefers-color-scheme: dark)");
let stroke_color = prefers_dark.matches ? "white" : "black";

prefers_dark.addEventListener("change", () => {
  stroke_color = prefers_dark.matches ? "white" : "black";
  draw_all();
});

function adjust_canvas() {
  canvas.width = canvas.height = Math.min(
    480,
    0.95 * Math.min(window.innerWidth, window.innerHeight)
  );
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.scale((0.96 * canvas.width) / 2, (0.96 * canvas.height) / 2);
  ctx.lineWidth = 0.015;
}

window.addEventListener("resize", () => {
  draw_all();
});

window.addEventListener("DOMContentLoaded", () => {
  draw_all();
});

function draw_all() {
  adjust_canvas();
  draw_circle({
    x: 0,
    y: 0,
    r: 1,
    fill_color: "white",
  });
  draw_circle({
    x: 0,
    y: 0,
    r: 1,
    fill_color: "black",
    ratio: 0.5,
  });
  draw_circle({
    x: 0.5,
    y: 0,
    r: 0.5,
    fill_color: "white",
    ratio: 0.5,
  });
  draw_circle({
    x: -0.5,
    y: 0,
    r: 0.5,
    fill_color: "black",
  });
  draw_circle({
    x: 0,
    y: 0,
    r: 1,
    stroke_color: stroke_color,
  });
  draw_circle({
    x: 0.5,
    y: 0,
    r: 0.125,
    fill_color: "black",
  });
  draw_circle({
    x: -0.5,
    y: 0,
    r: 0.125,
    fill_color: "white",
  });
}

function draw_circle(circle) {
  const { x, y, r, fill_color, stroke_color, ratio = 1 } = circle;
  ctx.fillStyle = fill_color;
  ctx.strokeStyle = stroke_color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, ratio * 2 * Math.PI);
  if (fill_color) ctx.fill();
  if (stroke_color) ctx.stroke();
  ctx.closePath();
}
