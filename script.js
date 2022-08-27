const container = document.querySelector('.container');
// loop for creating n tiles per side
function tilesPerSide(userInput = 0) {
    if(userInput) {
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
tilesPerSide();
const divList = document.querySelectorAll('.container>div');
// initialize tiles
divList.forEach(element =>
    element.setAttribute('style',
    'min-height: 25%; \
    min-width: 25%; \
    background:#a0bdbb; ')
)

// add 'mouseover' event listeners
divList.forEach(element =>
    element.addEventListener('mouseover', () =>
        element.style.background = '#f7c3c3')
);

const tilesButton = document.querySelector('.tiles');
const tilesEvent = tilesButton.addEventListener('click',function() {
    userInput = prompt('How many tiles per side?')
    tilesPerSide(userInput);
});
