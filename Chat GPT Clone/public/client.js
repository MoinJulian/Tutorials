// HTML Elements
const formElement = document.querySelector("form");
const outputElement = document.getElementById("output");
const textArea = document.querySelector("textarea");

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted")
})