const allCategories = document.querySelectorAll('.item');
console.log('number of categories:', allCategories.length);

allCategories.forEach(item => {
    console.log(`Category: ${item.querySelector("h2").textContent}
    Elements: ${item.querySelectorAll("li").length}`)
});






