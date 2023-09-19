import { Box } from "./Box.js";

export class Player extends Box {
  constructor(options, type) {
    super(
      {
        pos: options.pos,
        size: options.size,
        color: "red",
        grav: 0.004,
        friction: 0.2,
      },
      type || "Player"
    );
    this.walkSpeed = 0.012;
    this.jumpSpeed = 1.45;
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
        case "ArrowUp":
          if (this.onGround) {
            this.onGround = false;
            this.vel[1] = -this.jumpSpeed;
          }
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

  push(box, objects) {
    return {
      toLeft: () => {
        if (box.type !== "Box") return false;
        const distance = box.right - this.left;
        if (box.canBeMoved([-distance, 0], objects)) {
          box.setRight(this.left);
          return true;
        }
        const smallDistance = box.getDistanceToLeftObject(objects);
        if (box.canBeMoved([-smallDistance, 0], objects)) {
          box.setLeft(box.left - smallDistance);
          this.setLeft(box.right);
          return true;
        }
        return false;
      },
      toRight: () => {
        if (box.type !== "Box") return false;
        const distance = this.right - box.left;
        if (box.canBeMoved([distance, 0], objects)) {
          box.setLeft(this.right);
          return true;
        }
        const smallDistance = box.getDistanceToRightObject(objects);
        if (box.canBeMoved([smallDistance, 0], objects)) {
          box.setLeft(box.left + smallDistance);
          this.setRight(box.left);
          return true;
        }
        return false;
      },
    };
  }
}
