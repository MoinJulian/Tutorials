import { Box } from "./objects/Box.js";
import { Player } from "./objects/Player.js";
import { clearCanvas } from "./canvas.js";
import { timer } from "./objects/Timer.js";

const b = new Player({
  pos: [100, 100],
  size: [100, 100],
  color: "red",
});

b.draw();

b.vel = [0.2, -0.5];

timer.update = (deltaTime) => {
  clearCanvas();
  b.update(deltaTime);
  b.draw();
};

timer.start();
