import { ctx } from "../canvas.js";

export class Rectangle {
  constructor(options) {
    this.pos = options.pos;
    this.size = options.size;
    this.color = options.color;
    this.type = "Rectangle";
  }

  get left() {
    return this.pos[0];
  }

  get right() {
    return this.pos[0] + this.size[0];
  }

  get top() {
    return this.pos[1];
  }

  get bottom() {
    return this.pos[1] + this.size[1];
  }

  setLeft(val) {
    this.pos[0] = val;
  }

  setRight(val) {
    this.pos[0] = val - this.size[0];
  }

  setTop(val) {
    this.pos[1] = val;
  }

  setBottom(val) {
    this.pos[1] = val - this.size[1];
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos[0], this.pos[1], this.size[0], this.size[1]);
  }

  overlapsWith(obj) {
    if (this === obj) return false;
    return (
      this.left <= obj.right &&
      this.right >= obj.left &&
      this.bottom >= obj.top &&
      this.top <= obj.bottom
    );
  }
}
