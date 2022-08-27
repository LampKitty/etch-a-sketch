const container = document.querySelector('.container');
// loop for creating n tiles per side and calculating their si
function tilesPerSide(userInput = 16) {
    let result = 0;
    if(userInput != 16) {
        for (let i = 1; i <= userInput; i++) {
            const div = document.createElement(`div`);
            div.classList.add(`div${i}`);
            container.appendChild(div);
        } 
    } else {
        for (let i = 1; i <= 16; i++) {
            const div = document.createElement(`div`);
            div.classList.add(`div${i}`);
            container.appendChild(div);
        }
    }
    
}

function calculateTileSize(userInput) {
    if(userInput != 0) {
        return (100 / Math.sqrt(userInput));
    }
}
// initialize tiles
tilesPerSide();
const divList = document.querySelectorAll('.container>div');
tileSizing();
// Check for user input
function isInput(userInput) {
    return Boolean(userInput);
}

let input = 0;

function tileSizing () {
    divList.forEach(element =>
        element.setAttribute('style',
        `min-height: 25%; \
        min-width: 25%; \
        background:#a0bdbb; `)
    )
}


// add 'mouseover' event listeners
divList.forEach(element =>
    element.addEventListener('mouseover', () =>
        element.style.background = '#f7c3c3')
);

const tilesButton = document.querySelector('.tiles');
const tilesEvent = tilesButton.addEventListener('click',function() {
    userInput = prompt('How many tiles per side?')
    isInput = isInput(userInput);
    tilesPerSide(userInput);
});

