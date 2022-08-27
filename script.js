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
const divList = document.querySelectorAll('.container>div');
tileSizing(); // apply height and size to tiles
mouseHover(divList);

function tileSizing () {
    if(usrInput) {
        // evaluate all divs again
        const divList = document.querySelectorAll('.container>div');
        // let tileSize = calculateTileSize(usrInput);
        let tileSize = calculateTileSize(usrInput);
        divList.forEach(element =>
            element.setAttribute('style',
            `max-height: ${tileSize}%; \
            min-width: ${tileSize}%; \
            background:#a0bdbb; `)
        )
        mouseHover(divList);
    } else {
        divList.forEach(element =>
            element.setAttribute('style',
            `max-height: 25%; \
            min-width: 25%; \
            background:#a0bdbb; `)
        )
    }
    
}


// add 'mouseover' event listeners
function mouseHover(childList) {
    childList.forEach(element =>
        element.addEventListener('mouseover', () =>
            element.style.background = '#f7c3c3')
    );
}


const tilesButton = document.querySelector('.tiles');
const tilesEvent = tilesButton.addEventListener('click',function() {
    let userInput = prompt('How many tiles per side?')
    usrInput = userInput;
    tilesPerSide(userInput);
});

