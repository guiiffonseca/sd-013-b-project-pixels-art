
const selectedColor = document.getElementsByClassName('color');
console.log(selectedColor);


for (let index = 0; index < selectedColor.length; index+=1) {
    selectedColor[index].addEventListener ('click', selector)}
    
function selector (event) {
   
    document.querySelector('.selected').classList.remove('selected')
    event.target.classList.add('selected');
}
