const openModalBtn = document.querySelector("[data-action=show-modal]");

const closeModalBtn = document.querySelector("[data-action=close-modal]");

const body = document.querySelector("body");

const backDrop = document.querySelector(".backdrop");

openModalBtn.addEventListener("click", () => { body.classList.add('show-modal') })

backDrop.addEventListener("click", () => { body.classList.remove('show-modal') })

closeModalBtn.addEventListener("click", () => { body.classList.remove('show-modal') })

// Завдання 2

const form = document.querySelector("form");

form.addEventListener("change", () => { body.style.backgroundColor = form.elements["color"].value })

// Завдання 3

const input = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

function inputHandler() {
    output.textContent = input.value;

    if (input.value.trim() === '') {
        output.textContent = 'незнайомець'
    }
}

input.addEventListener("input", inputHandler);

// Завдання 4

const symbolInput = document.querySelector("#validation-input");
const inputLength = Number(symbolInput.getAttribute('data-length'));
function symbolHandler() {

    if (symbolInput.value.length === inputLength) {
        symbolInput.classList.remove("invalid");
        symbolInput.classList.add("valid");
    } else {
        symbolInput.classList.remove("valid");
        symbolInput.classList.add("invalid");
    }
}

symbolInput.addEventListener("blur", symbolHandler);

// Завдання 5

const inputRange = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputRange.addEventListener("input", () => { text.style.fontSize = inputRange.value + 'px' })