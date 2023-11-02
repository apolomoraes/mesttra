const tipoDeCha = parseInt(lines.shift());

const respostas = lines.shift().split(" ").map(Number);

let numeroDeCorretas = 0;

for (let i = 0; i < respostas.length; i++) {
  if (respostas[i] === tipoDeCha) {
    numeroDeCorretas++;
  }
}

console.log(numeroDeCorretas);