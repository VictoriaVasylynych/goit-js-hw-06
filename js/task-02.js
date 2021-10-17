const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const itemEl = document.querySelector('#ingredients')
console.log(itemEl);

const listEl = ingredients.forEach((ingredient) => {

const itemListEl = document.createElement('li');
    itemListEl.classList.add('.item');
    itemListEl.textContent = ingredient;
    itemEl.appendChild(itemListEl);
    console.log(itemListEl);
    
});
