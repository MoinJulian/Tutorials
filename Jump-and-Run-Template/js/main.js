import { Box } from "./objects/Box.js";
import { Rectangle } from "./objects/Rectangle.js";
import { Player } from "./objects/Player.js";
import { clearCanvas } from "./canvas.js";
import { timer } from "./objects/Timer.js";

const objects = [
  new Player({
    pos: [100, 800],
    size: [40, 40],
    color: "red",
  }),
  new Rectangle({
    pos: [400, 650],
    size: [100, 10],
    color: "blue",
  }),
  new Rectangle({
    pos: [200, 900],
    size: [10, 100],
    color: "blue",
  }),
  new Box({
    pos: [400, 900],
    size: [60, 60],
    color: "orange",
  }),
  new Rectangle({
    pos: [500, 900],
    size: [500, 10],
    color: "green",
  }),
];

//p.vel = [0.2, -0.5];

timer.update = (deltaTime) => {
  clearCanvas();
  objects.forEach((obj) => obj.update(deltaTime, objects));
  objects.forEach((obj) => obj.draw());
};

timer.start();
