// Obter os elementos dos inputs
const nomeInput = document.getElementById("série");
const corInput = document.getElementById("personagem");

// Adicionar evento de "keydown" para o input de nome
nomeInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        let série = nomeInput.value;
        let personagem = corInput.value;
        alert("bonjour" + série + "! Esse é o seu personagem favorito " + personagem + "!");
    }
});

// Adicionar evento de "keydown" para o input de cor
corInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        let série = nomeInput.value;
        let personagem = corInput.value;
        alert("bonjour" + série + "! Esse é o seu personagem favorito " + personagem + "!");
    }
});

