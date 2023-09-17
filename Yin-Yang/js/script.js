const canvas = document.querySelector("canvas");

function adjust_canvas() {
  canvas.width = canvas.height = Math.min(
    480,
    0.95 * Math.min(window.innerWidth, window.innerHeight)
  );
}

window.addEventListener("resize", () => {
  adjust_canvas();
});

window.addEventListener("DOMContentLoaded", () => {
  adjust_canvas();
});