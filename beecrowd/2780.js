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