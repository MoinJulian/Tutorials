const mainElement = document.querySelector("main");

for (let i = 0; i < 20; i++) {
  for (let j = 0; j < 20; j++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    mainElement.appendChild(cell);
  }
}
