const container = document.querySelector('.container');
// loop for creating 16 divs
for(let i = 1; i <= 16; i++) {
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
    background:#5b6967; \
    ')
)

// add 'mouseover' event listeners
divList.forEach(element =>
        element.addEventListener('mouseover', () => 
        element.style.background = '#fc705d')
    );



