import { Rectangle } from "./Rectangle.js";

export class Box extends Rectangle {
  constructor(options) {
    super(options);
    this.grav = 0.005;
    this.friction = 0; //between 0 and 1
    this.val = [0, 0];
    this.acc = 0;
    this.onGround = false;
  }

  update(deltaTime) {
    this.vel[0] += this.acc * deltaTime;
    this.vel[0] *= 1 - this.friction;
    this.vel[1] += this.grav * deltaTime;
    this.pos[0] += this.vel[0] * deltaTime;
    this.pos[1] += this.vel[1] * deltaTime;
    this.onGround = false;
  }
}
