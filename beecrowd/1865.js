const quantidadeTeste = parseInt(lines.shift());

for (let i = 0; i < quantidadeTeste; i++) {
  const valores = lines.shift();
  const valor = valores.split(" ");

  const nome = valor[0];

  if (nome == "Thor") {
    console.log("Y");
  } else {
    console.log("N");
  }

}