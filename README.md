# 🎲 Rolagem de Dados
Website onde dois jogadores podem inserir seus nomes e efetuar uma rolagem de dados. O jogador que obter o maior número, vence. A rolagem é feita através de um código Javascript que fornece um número aleatório de 1 a 6. [Acesse aqui](https://mincostta.github.io/rolagem-dados/).

## ⚙️ Tecnologias Usadas
- **Linguagens**: HTML, CSS, Javascript
- **Ferramentas**: Git

## 🔧 Funcionamento
Assim que o botão de cálculo é acionado, o código em Javascript irá gerar um número aleatório entre 1 e 100. O botão só pode ser acionado após o usuário ter digitado dois nomes, com a condição de ambos não poderem ser iguais. A porcentagem prontamente é mostrada, acompanhada de um coração que represente o quão bom é aquele resultado.

## ⚙️ Evento de Clique no Botão

```javascript
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
```
