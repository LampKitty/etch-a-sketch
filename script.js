const container = document.querySelector('.container');
// loop for creating 16 divs
for (let i = 1; i <= 16; i++) {
    const div = document.createElement(`div`);
    div.classList.add(`div${i}`);
    container.appendChild(div);
}

const divList = document.querySelectorAll('.container>div');
// iterate elements of container and apply attributes to them
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
function askUserInput() {
    tilesButton.addEventListener('click', () => 
    prompt('How many tiles per side?'))
}

