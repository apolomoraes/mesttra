const distancia = lines.shift();

let pontuacao = 0;
if (distancia <= 800) {
  pontuacao = 1;
} else if (distancia <= 1400) {
  pontuacao = 2;
} else {
  pontuacao = 3;
}

console.log(pontuacao);

//--------------------------
// Lê a distância D como entrada usando prompt
// const distancia = lines.shift();

// Define o objeto de mapeamento para os intervalos e pontuações
// const mapeamento = {
//   800: 1,
//   1400: 2,
//   2000: 3
// };

// Inicializa a pontuação como 0 (caso a distância seja maior que 2000)
// let pontuacao = 0;

// // Verifica em qual intervalo a distância se encontra
// for (let intervalo in mapeamento) {
//   if (distancia <= parseInt(intervalo)) {
//     pontuacao = mapeamento[intervalo];
//     break;
//   }
// }

// // Imprime a pontuação
// console.log(pontuacao);
