var dado1 = document.getElementById("dado1");
var dado2 = document.getElementById("dado2");

var texto = document.getElementById("resultado");

var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");

const rolar = document.getElementById("rolar");
const altName1 = document.getElementById("alt1");
const altName2 = document.getElementById("alt2");

altName1.addEventListener('click', function() {
    var nome1 = prompt("Escreva o nome do Jogador 1");

    if (nome1 === null) {
        player1.textContent = "Jogador 1";
    }

    else {
        player1.textContent = nome1;
    }
});

altName2.addEventListener('click', function() {
    var nome2 = prompt("Escreva o nome do Jogador 2");

    if (nome2 === null) {
        player2.textContent = "Jogador 2";
    }

    else {
        player2.textContent = nome2;
    }
});

rolar.addEventListener('click', function() {
    var rolagem1 = Math.random();
    rolagem1 = rolagem1 * 6 + 1;
    rolagem1 = Math.floor(rolagem1);

    var rolagem2 = Math.random();
    rolagem2 = rolagem2 * 6 + 1;
    rolagem2 = Math.floor(rolagem2);

    dado1.setAttribute("src", "./imgs/dado" + rolagem1 + ".png");
    dado2.setAttribute("src", "./imgs/dado" + rolagem2 + ".png");

    if (rolagem1 == rolagem2) {
        texto.textContent = "É um empate!";
    }

    else if (rolagem1 > rolagem2) {
        texto.textContent = player1.textContent + " venceu!"
    }

    else if (rolagem2 > rolagem1) {
        texto.textContent = player2.textContent + " venceu!"
    }
});

