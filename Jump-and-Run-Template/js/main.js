import { Rectangle } from "./objects/Rectangle.js";

const r = new Rectangle({ pos: [10, 10], size: [300, 20], color: "green" });
const s = new Rectangle({ pos: [10, 15], size: [300, 20], color: "blue" });

r.draw();
s.draw();

console.log(r.overlapsWith(s));
