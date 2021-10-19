const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngredients = [];

ingredients.forEach((ingredient) => {
  const itemListEl = document.createElement('li');
  itemListEl.classList.add('.item');
  itemListEl.textContent = ingredient;
  listIngredients.push(itemListEl)
});
 
document.querySelector('#ingredients').append(...listIngredients);
console.log(listIngredients)



















//const ingredients = [
//  'Potatoes',
//  'Mushrooms',
//  'Garlic',
//  'Tomatos',
//  'Herbs',
//  'Condiments',
//];
//
//const ulIngredients = document.querySelector('ul#ingredients');
//
//const liElements = ingredients.map((ingredient) => {
//  
//  const elementLi = document.createElement('li');
//  elementLi.textContent = ingredient;
//  elementLi.classList.add('item');
//
//  return elementLi;
//});
//
//console.log(liElements);
//
//ulIngredients.append(...liElements)