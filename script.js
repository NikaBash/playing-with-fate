const image = document.querySelector("#myImage");
const text = document.querySelector("h2");

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");

buttonOne.addEventListener("click", mrBig);
buttonTwo.addEventListener("click", aiden);

function mrBig() {
    image.setAttribute("src", "2.jpg");
    text.textContent = "Они поженятся?";
    buttonOne.textContent = "Да, но не сразу";
    buttonTwo.textContent = "Никогда";

    buttonOne.addEventListener("click", wedding);
    buttonTwo.addEventListener("click", neverMarried);
}
function wedding() {
    image.setAttribute("src", "3.jpg");
    text.textContent = "Они поженятся и будут счастливы, но у них не будет детей.";
    buttonOne.textContent = "Выбрать другую судьбу.";
    buttonTwo.style = "display: none";

    buttonOne.addEventListener('click', () => {
        location.reload(); 
      });
}
function neverMarried() {
    image.setAttribute("src", "4.jpg");
    text.textContent = "Он ее бросит у алтаря.";
    buttonOne.textContent = "Выбрать другую судьбу.";
    buttonTwo.style = "display: none";

    buttonOne.addEventListener('click', () => {
        location.reload(); 
      });
}
function aiden() {
    image.setAttribute("src", "5.jpg");
    text.textContent = "Они будут счастливы?";
    buttonOne.textContent = "Да";
    buttonTwo.textContent = "Нет";

    buttonOne.addEventListener("click", happy);
    buttonTwo.addEventListener("click", unhappy);
}
function happy() {
    image.setAttribute("src", "6.jpg");
    text.textContent = "Да, и у них родится ребенок";
    buttonOne.textContent = "Выбрать другую судьбу.";
    buttonTwo.style = "display: none";

    buttonOne.addEventListener('click', () => {
        location.reload(); 
      });
}
function unhappy() {
    image.setAttribute("src", "7.jpg");
    text.textContent = "Нет, они разойдутся из-за измены Кэрри.";
    buttonOne.textContent = "Выбрать другую судьбу.";
    buttonTwo.style = "display: none";

    buttonOne.addEventListener('click', () => {
        location.reload(); 
      });
}
