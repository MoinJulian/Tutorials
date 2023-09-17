import { Box } from "./Box.js";

export class Player extends Box {
  constructor(options) {
    super({
      pos: options.pos,
      size: options.size,
      color: "red",
      grav: 0.004,
      friction: 0.2,
    });
    this.walkSpeed = 0.012;
    this.addControls();
  }

  addControls() {
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowRight":
          this.acc = this.walkSpeed;
          break;
        case "ArrowLeft":
          this.acc = -this.walkSpeed;
          break;
      }
    });
    document.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "ArrowRight":
          this.acc = 0;
          break;
        case "ArrowLeft":
          this.acc = 0;
          break;
      }
    });
  }
}
