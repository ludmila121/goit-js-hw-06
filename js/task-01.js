const categoriesEl = document.querySelectorAll(`.item`);
 console.log(`Number of categories:`, categoriesEl.length);
categoriesEl.forEach(element => {
    console.log(`Category:`, element.querySelector(`h2`).textContent);
    
    console.log(`element:`, element.querySelectorAll(`li`).length);
});