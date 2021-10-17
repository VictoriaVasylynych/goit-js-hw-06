let counterValue = 0;

const decrementBtn = document.querySelector(['button[data-action="decrement"]']);
const incrementBtn = document.querySelector(['button[data-action="increment"]']);
console.log(decrementBtn)
console.log(incrementBtn)

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue;
    console.log("клик");
});
incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;
    console.log("клик");
});


