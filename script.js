let container = document.querySelector(".container");
let gridSize = 8; // 16 means 16x16
let containerSize = 320; // 320 means 320px x 320px

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

const makeGrid = () => {
    let pixelSize = containerSize / gridSize;
    container.style.height = "fit-content";
    container.style.height = containerSize + gridSize*2 + "px"; // gridSize*2 accounts for borders 
    container.style.width = "fit-content";
    container.style.width = containerSize + gridSize*2 + "px"; 

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
            pixel.classList.toggle("painted");;
        });
    };
};

makeGrid();

