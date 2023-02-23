// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const listOfIngredientsEl = document.querySelector(`#ingredients`);
console.log(listOfIngredientsEl);
const ingredientsEl = ingredients.map((ingredient => ingredientsEl), {
 ingredientsEl.document.createElement(`li`),
  ingredientsEl.classList.add('item')
   ingredientsEl.textContent = ingredient;
  console.log(ingredientsEl);
  ingredientsEl.append();
}); 
console.log(ingredientsEl);
// [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];
