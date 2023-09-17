import { Box } from "./objects/Box.js";
import { Rectangle } from "./objects/Rectangle.js";
import { Player } from "./objects/Player.js";
import { clearCanvas } from "./canvas.js";
import { timer } from "./objects/Timer.js";

const p = new Player({
  pos: [100, 100],
  size: [40, 40],
  color: "red",
});

const r = new Rectangle({
  pos: [400, 400],
  size: [100, 10],
  color: "blue",
});

const objects = [p, r];

p.vel = [0.2, -0.5];

timer.update = (deltaTime) => {
  clearCanvas();
  objects.forEach((obj) => obj.update(deltaTime));
  objects.forEach((obj) => obj.draw());
};

timer.start();
