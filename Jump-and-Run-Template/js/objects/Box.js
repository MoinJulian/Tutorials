import { Rectangle } from "./Rectangle.js";
import { levelSize } from "../Level.js";

export class Box extends Rectangle {
  constructor(options) {
    const { pos, size, color, grav, friction, vel } = options;
    super({ pos, size, color });
    this.grav = grav || 0.005;
    this.friction = friction || 0; //between 0 and 1
    this.val = vel || [0, 0];
    this.acc = 0;
    this.onGround = false;
    this.ppos = [...this.pos];
  }

  get prevLeft() {
    return this.ppos[0];
  }

  get prevRight() {
    return this.ppos[0] + this.size[0];
  }

  get prevTop() {
    return this.ppos[1];
  }

  get prevBottom() {
    return this.ppos[1] + this.size[1];
  }

  applyPhysics(deltaTime) {
    this.vel[0] += this.acc * deltaTime;
    this.vel[0] *= 1 - this.friction;
    this.vel[1] += this.grav * deltaTime;
    this.pos[0] += this.vel[0] * deltaTime;
    this.pos[1] += this.vel[1] * deltaTime;
    this.onGround = false;
  }

  update(deltaTime, objects) {
    this.ppos = [...this.pos];
    this.applyPhysics(deltaTime);
    objects.forEach((obj) => {
      this.collideWith(obj).fromAbove();
      this.collideWith(obj).fromBelow();
      this.collideWith(obj).fromLeft();
      this.collideWith(obj).fromRight();
    });
    this.boundToLevel();
  }

  collideWith(obj) {
    return {
      fromAbove: () => {
        if (this.prevBottom <= obj.top && this.overlapsWith(obj)) {
          this.setBottom(obj.top);
          this.vel[1] = 0;
          this.onGround = true;
        }
      },
      fromBelow: () => {
        if (this.prevTop >= obj.bottom && this.overlapsWith(obj)) {
          this.setTop(obj.bottom);
          this.vel[1] = 0;
        }
      },
      fromLeft: () => {
        if (this.prevRight <= obj.left && this.overlapsWith(obj)) {
          this.setRight(obj.left);
          this.vel[0] = 0;
        }
      },
      fromRight: () => {
        if (this.prevLeft >= obj.right && this.overlapsWith(obj)) {
          this.setLeft(obj.right);
          this.vel[0] = 0;
        }
      },
    };
  }

  boundToLevel() {
    if (this.bottom >= levelSize[1]) {
      this.vel[1] = 0;
      this.setBottom(levelSize[1]);
      this.onGround = true;
    }
    if (this.left <= 0) {
      this.setLeft(0);
      this.vel[0] = 0;
    } else if (this.right >= levelSize[0]) {
      this.setRight(levelSize[0]);
      this.vel[0] = 0;
    }
  }
}
