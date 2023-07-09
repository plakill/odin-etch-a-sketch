let container = document.querySelector(".container");
let gridSize = 8; // 16 means 16x16
let containerSize = 640; // 320 means 320px x 320px
container.style.width = containerSize + "px"; 
container.style.height = containerSize + "px"; 

resizeButton = document.querySelector("button.resize");
resizeButton.addEventListener("click", () => {
    if (gridSize != 64) {
        gridSize *= 2;
    } else {
        gridSize = 8;
    }
    resizeButton.textContent = `${gridSize} x ${gridSize}`;
    makeGrid();
});

clearButton = document.querySelector("button.clear");
clearButton.addEventListener("click", () => {
    makeGrid();
});

const makeGrid = () => {
    let pixelSize = containerSize / gridSize - 2; // 2 is a magic number that fixes issues with borders (its: border size * 2)

    let oldPixels = document.querySelectorAll(".pixel");
    oldPixels.forEach((pixel) => {
        pixel.remove();
    });

    for (let i = 0; i < gridSize*gridSize; i++) {
        let pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.style.width = pixelSize + "px";
        pixel.style.height = pixelSize + "px";
        container.appendChild(pixel)
    
        pixel.addEventListener("mouseover", () => {
            pixel.classList.add("painted");;
        });
    };
};

makeGrid();

