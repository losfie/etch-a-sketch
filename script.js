const gridContainer = document.querySelector(".grid-container");
const clearButton = document.querySelector('#clear-btn');
const gridButton = document.querySelector('#new-grid-btn');
const rainbowButton = document.querySelector('#rainbow-btn');
let isRainbow = false;

let standardSquare = 16;

function getRandomColor() {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 30) + 20;
    const l = Math.floor(Math.random() * 20) + 70;
    return `hsl(${h}, ${s}%, ${l}%)`;
}

function createGrid(standardSquare) {
    gridContainer.innerHTML = '';
    
    // Create Rows
    for (let row = 0; row < standardSquare; row++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add('grid-row');
        
        // Create Columns
        for (let col = 0; col < standardSquare; col++) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add('grid-square');

            gridSquare.addEventListener('mouseover', function() {
                if(!isRainbow){
                    this.style.background = 'rgb(12, 188, 185)';
                }
                else {
                    this.style.background = getRandomColor();
                }
                
            });

            gridRow.appendChild(gridSquare);
        }
        
        gridContainer.appendChild(gridRow);
    }
}

createGrid(standardSquare);

clearButton.addEventListener('click', function() {
    createGrid(standardSquare);
});

gridButton.addEventListener('click', function() {
    standardSquare = prompt('Insert a number between 1 and 100');
    if(standardSquare < 100 && standardSquare > 0) {
        createGrid(standardSquare);
    }
    else {
        alert("You've inserted an invalid number! Reverting to default grid");
        standardSquare = 16;
        createGrid(standardSquare);
    }
})

rainbowButton.addEventListener('click', function() {
    if(isRainbow) {
        isRainbow = false;
    }
    else isRainbow = true;
})

