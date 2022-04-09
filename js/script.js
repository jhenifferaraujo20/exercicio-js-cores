const green = document.querySelector(".verde");
const yellow = document.querySelector(".amarelo");
const red = document.querySelector(".vermelho");
const blue = document.querySelector(".azul");
const body = document.querySelector("#body");

green.onclick = () => {
    body.style.background = "green";
}

yellow.onclick = () => {
    body.style.background = "yellow";
}

red.onclick = () => {
    body.style.background = "red";
}

blue.onclick = () => {
    body.style.background = "blue";
}