let container = document.querySelector(".container");
let gridSize = 16; // 16 means 16x16 
for (let i = 0; i < gridSize*gridSize; i++) {
    let div = document.createElement("div");
    div.className = "pixel";
    container.appendChild(div)
}