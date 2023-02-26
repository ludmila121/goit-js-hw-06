function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divBox = document.querySelector("#boxes");

const createBoxes = (amount) => {
 
  const newElementsArray = [];
 
  for (let i = 0; i < amount; i++) {
  
    let newElement = document.createElement("div");

    newElement.style.width = `${30 + 10 * i}px`;
    newElement.style.height = `${30 + 10 * i}px`;

    newElement.style.backgroundColor = getRandomHexColor();

    newElementsArray.push(newElement);
  }

  return newElementsArray;
};

createBtn.addEventListener("click", () => {

  let createdBoxes = createBoxes(input.value);

  divBox.append(...createdBoxes);
});

destroyBtn.addEventListener("click", () => (divBox.innerHTML = ""));

divBox.style.display = "flex";
divBox.style.flexWrap = "wrap";
divBox.style.gap = "10px";