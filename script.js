
const selectedColor = document.getElementsByClassName('color');
const board = document.querySelectorAll('.pixel');

//Requisito 6 e 7
for (let index = 0; index < selectedColor.length; index += 1) {
    selectedColor[index].addEventListener ('click', selector)
}
function selector (event) {
    document.querySelector('.selected').classList.remove('selected')
    event.target.classList.add('selected');
}

//Requisito 8
for (let index = 0; index < board.length; index += 1){
    board[index].addEventListener('click', paintingBoard);
}
function paintingBoard (event) {
        let color = document.querySelector('.selected');
        let colorBoard = getComputedStyle(color).backgroundColor;
        event.target.style.backgroundColor = colorBoard;
}

//Requisito 9
const eraser = document.querySelector('#clear-board');
eraser.addEventListener('click', clear);

function clear (event) {
    for (let index = 0; index < board.length; index += 1){
        board[index].style.backgroundColor = ' white'
    }
}









