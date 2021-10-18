const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text')
console.log(input, text)

input.addEventListener('input', event => {
    text.style.fontSize = `${event.currentTarget.value}px`
});
