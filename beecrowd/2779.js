let N = parseInt(lines.shift());

let M = parseInt(lines.shift());

let figurinhasCompradas = [];

for (let i = 0; i < M; i++) {
  let figurinha = parseInt(lines.shift());
  figurinhasCompradas.push(figurinha);
}

let figurinhasFaltantes = N - new Set(figurinhasCompradas).size;

console.log(figurinhasFaltantes);