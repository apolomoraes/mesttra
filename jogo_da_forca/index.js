const prompt = require("prompt-sync")();

let palavraSecreta = "abacate";
let tentativasRestantes = palavraSecreta.length;

for (tentativasRestantes; tentativasRestantes > 0; tentativasRestantes--) {
  console.clear();

  let visor = "";

  for (let i = 0; i < palavraSecreta.length; i++) {
    visor += "__" + "  ";
  }

  console.log(`Tentativas restantes: ${tentativasRestantes}`);

  console.log(`\nPalavra secreta: \n${visor}`);

  prompt("Digite a letra: ");
}