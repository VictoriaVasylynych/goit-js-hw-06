function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const color = document.querySelector('.color');
const button = document.querySelector('.change-color')
console.log(button, color, body);

button.addEventListener('click', changeColor);

function changeColor() {
    body.style.backgroundColor = getRandomHexColor();
    color.innerHTML = getRandomHexColor();
}
 