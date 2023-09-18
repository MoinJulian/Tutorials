import { Rectangle } from "./Rectangle.js";
import { levelSize } from "../Level.js";

export class Box extends Rectangle {
  constructor(options, type) {
    const { pos, size, color, grav, friction, vel } = options;
    super({ pos, size, color }, type || "Box");
    this.grav = grav || 0.005;
    this.friction = friction || 0; //between 0 and 1
    this.vel = vel || [0, 0];
    this.acc = 0;
    this.onGround = false;
    this.ppos = [...pos];
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
    this.pos[1] += this.vel[1] * deltaTime;
    this.pos[0] += this.vel[0] * deltaTime;
    this.onGround = false;
  }

  update(deltaTime, objects) {
    this.ppos = [...this.pos];
    this.applyPhysics(deltaTime);
    objects.forEach((obj) => {
      this.collideWith(obj, objects).fromAbove();
      this.collideWith(obj, objects).fromBelow();
      this.collideWith(obj, objects).fromLeft();
      this.collideWith(obj, objects).fromRight();
    });
    this.boundToLevel();
  }

  push() {
    return {
      toLeft: () => false,
      toRight: () => false,
    };
  }

  collideWith(obj, objects) {
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
          if (this.push(obj, objects).toRight()) return;
          this.setRight(obj.left);
          this.vel[0] = 0;
        }
      },
      fromRight: () => {
        if (this.prevLeft >= obj.right && this.overlapsWith(obj)) {
          if (this.push(obj, objects).toLeft()) return;
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

  canBeMoved(offset, objects) {
    if (
      this.left + offset[0] < 0 ||
      this.right + offset[0] > levelSize[0] ||
      this.top + offset[1] < 0 ||
      this.bottom + offset[1] > levelSize[1]
    ) {
      return false;
    }
    return objects
      .filter((obj) => obj.type === "Rectangle" || obj.type === "Box")
      .every((obj) => !this.overlapsWith(obj, offset));
  }
}
