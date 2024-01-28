const botao = document.getElementById("btn1");
const elementoPlataformas = document.querySelector("#btn1 .video-game");

botao.addEventListener("click", () => {

    const btnAtivo = elementoPlataformas.classList.contains("ativo");
    if(btnAtivo){
        elementoPlataformas.classList.remove("ativo");
    }else{
        elementoPlataformas.classList.add("ativo");
    }
});
const botao2 = document.getElementById("btn2");
const elementoPlataformas2 = document.querySelector("#btn2 .video-game");

botao2.addEventListener("click", () => {

    const btnAtivo = elementoPlataformas2.classList.contains("ativo");
    if(btnAtivo){
        elementoPlataformas2.classList.remove("ativo");
    }else{
        elementoPlataformas2.classList.add("ativo");
    }
});
const botao3 = document.getElementById("btn3");
const elementoPlataformas3 = document.querySelector("#btn3 .video-game");

botao3.addEventListener("click", () => {

    const btnAtivo = elementoPlataformas3.classList.contains("ativo");
    if(btnAtivo){
        elementoPlataformas3.classList.remove("ativo");
    }else{
        elementoPlataformas3.classList.add("ativo");
    }
});