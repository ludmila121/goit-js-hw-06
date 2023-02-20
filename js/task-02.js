const listOfIngredientsEl = document.querySelector(`#ingredients`);
const ingredientsEl = ingredients.reduce((acc, ingredient) => {
  const liEl = document.createElement(`li`);
  liEl.classList.add(`item`);
  liEl.textContent = ingredient;
  acc.add(liEl);
  return acc;

}, listOfIngredientsEl[]);
[
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
