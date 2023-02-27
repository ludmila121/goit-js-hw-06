

const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === Number(textInput.dataset.length)) {
        event.currentTarget.classList.remove("invalid");
        event.currentTarget.classList.add("valid");
    } else {
        event.currentTarget.classList.remove("valid");
        event.currentTarget.classList.add("invalid");
    }
});