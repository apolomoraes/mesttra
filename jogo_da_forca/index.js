const prompt = require("prompt-sync")();

let palavraSecreta = "abacate";
let tentativasRestantes = palavraSecreta.length;

for (tentativasRestantes; tentativasRestantes > 0; tentativasRestantes--) {
  const resposta = processarTentativa(palavraSecreta);
}

function processarTentativa(palavraSecreta) {
  console.clear();

  let visor = "";

  for (let i = 0; i < palavraSecreta.length; i++) {
    visor += "__" + "  ";
  }

  console.log(`Tentativas restantes: ${tentativasRestantes}`);

  console.log(`\nPalavra secreta: \n${visor}`);

  let resposta = prompt(`Escolha a opção abaixo:
  1 - Digitar letra
  2 - Chutar palavra

  Digite a opção:
  `);

  return resposta;
}