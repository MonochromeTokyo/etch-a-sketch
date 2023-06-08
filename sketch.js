const container = document.querySelector('.grid-container');

//Function to change the color of an element
function changeColor(){
    this.style.backgroundColor = 'black';

}



// Create 16 x 16 Grid and assign an event listener to each div
for( let i = 0; i < 16; i++){
    console.log(i);
    for(let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
        div.addEventListener('mouseover', changeColor);

    }
}


