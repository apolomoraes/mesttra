const valor = parseInt(lines.shift());

let sequencia = "";

for (let i = 0; i < valor; i++) {
  sequencia += "Ho";

  if (i < valor - 1) {
    sequencia += " ";
  }
}

sequencia += "!";

console.log(sequencia);