const container = document.querySelector('.grid-container');
// Create 16 x 16 Grid
for( let i = 0; i < 16; i++){
    console.log(i);
    for(let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);

    }
}