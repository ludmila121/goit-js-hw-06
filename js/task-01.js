const categoriesEl = document.querySelectorAll(`.item`);
 console.log(`Number of categories:`, categoriesEl.length);
categoriesEl.forEach(element => {
    console.log(`Category:`, element.querySelector(`h2`).textContent);
    
    console.log(`element:`, element.querySelectorAll(`li`).length);
});

/* HTML містить список категорій ul#categories.
Напиши скрипт, який:

Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

В результаті, в консолі будуть виведені наступні повідомлення.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5


const cathegoriesRef = document.querySelector("ul#categories");

const countCarthegories = cathegoriesRef.children.length;
console.log(`Number of categories: ${countCarthegories}\n`);

[...cathegoriesRef.children].forEach((item) => {
  console.log(`Category: ${item.children[0].innerText}`);
  console.log(`Elements: ${item.children[1].children.length}\n`);
}); */