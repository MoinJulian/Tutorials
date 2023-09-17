import { Box } from "./objects/Box.js";
import { clearCanvas } from "./canvas.js";

const b = new Box({
  pos: [100, 100],
  size: [100, 100],
  color: "red",
});

b.draw();

b.vel = [0.1, 0];

window.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    clearCanvas();
    b.update(1000 / 60);
    b.draw();
  }
});
