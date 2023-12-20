const spanItem = document.querySelector("span.empty-rate");
const buttonItem = document.querySelector("button.btn-1");
const form = document.querySelector("form");
const thanksPage = document.querySelector("div.thanks-container");
const ratingButtons = document.querySelectorAll("input[type='radio']");
let test = "";

ratingButtons.forEach((e) => {
    e.addEventListener("click", () => {
        spanItem.innerHTML = e.value;
        test = document.querySelectorAll("input:checked");
    })
})

form.addEventListener("submit", (e) => {
    
    e.preventDefault();
    if (test) {
        thanksPage.classList.remove("hidden");
    }
    
})