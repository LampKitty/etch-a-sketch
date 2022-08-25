const container = document.querySelector('.container');

for(let i = 1; i <= 16; i++) {
    const div = document.createElement(`div`);
    div.classList.add(`div${i}`);
    container.appendChild(div);
}

