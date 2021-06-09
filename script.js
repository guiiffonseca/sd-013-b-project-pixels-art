
const selectedColor = document.getElementsByClassName('color');
const pixelBoard = document.getElementById('pixel-board');
const board = document.getElementsByClassName('pixel');

//Requisito 4  e 5
function createBoard(number) {
    for (let index = 0; index < number; index +=1) {
        const rowBoard = document.createElement('tr');
        for (let index2 = 0; index2 < number; index2 += 1) {
            const pixels = document.createElement('td');
            pixels.classList.add('pixel');
           pixels.addEventListener('click', paintingBoard);
            rowBoard.appendChild(pixels);
        }
        pixelBoard.appendChild(rowBoard);
    }
}
createBoard(5);

// Requisito 7
for (let index = 0; index < selectedColor.length; index += 1) {
    selectedColor[index].addEventListener ('click', selector)
}
function selector (event) {
    document.querySelector('.selected').classList.remove('selected')
    event.target.classList.add('selected');
}

// Requisito 8
//for (let index = 0; index < board.length; index += 1){
  //  board[index].addEventListener('click', paintingBoard);
//}
function paintingBoard (event) {
        let color = document.querySelector('.selected');
        let colorBoard = getComputedStyle(color).backgroundColor;
        event.target.style.backgroundColor = colorBoard;
}

// Requisito 9
const eraser = document.querySelector('#clear-board');
eraser.addEventListener('click', clear);
function clear (event) {
    for (let index = 0; index < board.length; index += 1){
        board[index].style.backgroundColor = ' white'
    }
}

// Requisito 10
const vqvButton = document.querySelector('#generate-board');
vqvButton.addEventListener('click', sizeBoard);

function sizeBoard () {
    const input = document.querySelector('#board-size')
    
    if (input.value === '') {
        alert ('Board Inválido!')
    }
    pixelBoard.innerHTML = '';
    
    if (input.value >=1  && input.value <=50) {
        createBoard(input.value);        
    }
    //paintingBoard();
}

