

const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", (event) => {
    currentTarget.classList.remove("valid", "invalid");
    if (event.currentTarget.value.length === Number(textInput.dataset.length)) {
        event.currentTarget.classList.add("valid");
    } else {
        event.currentTarget.classList.add("invalid");
    }
});