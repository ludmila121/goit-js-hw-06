
const pozitionEl = document.querySelector(`#font-size-control`);
const abracadabra = document.querySelector(`#text`);
pozitionEl.addEventListener(`input`, (event) => {
    const size = event.currentTarget.value;
    abracadabra.style.fontSize = `${size}px`;

});
