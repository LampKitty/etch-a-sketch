const container = document.querySelector('.container');
// loop for creating n tiles per side and calculating their si
function tilesPerSide(userInput = 16) {
    let result = 0;
    if(userInput != 16) {
        clearNode();
        for (let i = 1; i <= userInput; i++) {
            const div = document.createElement(`div`);
            div.classList.add(`div${i}`);
            container.appendChild(div);
        } 
        tileSizing();
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

function clearNode () {
    while(container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

let usrInput = 0;
// initialize tiles
tilesPerSide(); // create tiles
let childList = document.querySelectorAll('.container>div');
tileSizing(); // apply height and size to tiles
mouseHover();

function tileSizing () {
    if(usrInput) {
        // evaluate all divs again
        childList = document.querySelectorAll('.container>div');
        // let tileSize = calculateTileSize(usrInput);
        let tileSize = calculateTileSize(usrInput);
        childList.forEach(element =>
            element.setAttribute('style',
            `max-height: ${tileSize}%; \
            min-width: ${tileSize}%; \
            background:#a0bdbb; `)
        )
        whichHover();
    } else {
        childList.forEach(element =>
            element.setAttribute('style',
            `max-height: 25%; \
            min-width: 25%; \
            background:#a0bdbb; `)
        )
    }
    
}

let toggleRainbow = 0;

function whichHover() {
    if(toggleRainbow) {
        rainbowHover();
    } else {
        mouseHover();
    }
}

// add 'mouseover' event listeners
function mouseHover() {
    childList.forEach(element =>
        element.addEventListener('mouseover', () =>
            element.style.background = '#f7c3c3')
    );
}

// rainbow button
const rainbowButton = document.querySelector('.rainbow');
rainbowButton.addEventListener('click', function() {
    toggleRainbow = !toggleRainbow;
    console.log(toggleRainbow);
    rainbowHover();
})

// rainbow mode 
function rainbowHover() {
    let rgb = 0;
    if(toggleRainbow) {
        childList.forEach(element =>
            element.addEventListener('mouseover', function() {
                rgb = randomRgb();
                element.style.background = rgb;
            })
        );
    } else {
        mouseHover();
    }
    
}

function randomRgb() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
}

// Ask user input
const tilesButton = document.querySelector('.tiles');
const tilesEvent = tilesButton.addEventListener('click',function() {
    let userInput = prompt('How many tiles?')
    if(userInput > 100) {
        return;
    } else if (userInput === null) {
        return;
    }
    usrInput = userInput;
    tilesPerSide(userInput);
});

const clearButton = document.querySelector('.clear');
const clearEvent = clearButton.addEventListener('click', function() {
    childList.forEach(element =>
        element.style.backgroundColor = '#a0bdbb')
})