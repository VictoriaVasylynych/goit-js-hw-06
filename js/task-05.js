const input = document.querySelector('#name-input')
console.log(input);

const nameOutput = document.querySelector('#name-output')
console.log(nameOutput);

input.addEventListener('input', onInputChange);
function onInputChange(event) {
    console.log(event.currentTarget.value);
    nameOutput.textContent = event.currentTarget.value;
}
