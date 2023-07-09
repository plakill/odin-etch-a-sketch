let container = document.querySelector(".container");
let gridSize = 8; // 16 means 16x16
let containerSize = 640; // 320 means 320px x 320px
container.style.width = containerSize + "px"; 
container.style.height = containerSize + "px"; 

const modes = ["Pen", "Eraser", "Rainbow", "Shadow"];


const generateRandomColor = () => {
    return Math.floor(Math.random() * 256);
};

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

modeButton = document.querySelector("button.mode");
modeButton.addEventListener("click", () => {
    if (modeButton.textContent != "Shadow") {
        modeButton.textContent = modes[modes.indexOf(modeButton.textContent) + 1];
    } else {
        modeButton.textContent = modes[0];
    }
});

const makeGrid = () => {
    let opacity = 0;
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
            let mode = modeButton.textContent;
            switch (mode) {
                case "Pen":
                    pixel.style.backgroundColor = "black";
                    break;
                case "Eraser":
                    pixel.style.backgroundColor = "white";
                    break;
                case "Rainbow":
                    let randomColor = [generateRandomColor(), generateRandomColor(), generateRandomColor()];
                    pixel.style.backgroundColor = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;
                    break;
                case "Shadow":
                    opacity += 0.1
                    if (opacity >= 1) opacity = 0.1;
                    pixel.style.backgroundColor = `rgba(0,0,0,${opacity})`;
                    break;
            }
        });
    };
};

makeGrid();

