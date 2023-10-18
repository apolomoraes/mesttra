function calcularNumeroFinalDeAbas() {
  const [numAbas, numAcoes] = lines.shift().split(" ").map(Number);

  let numeroAbas = numAbas;

  for (let i = 0; i < numAcoes; i++) {
    const acao = lines.shift();

    if (acao === "fechou") {
      numeroAbas += 1;
    } else if (acao === "clicou") {
      numeroAbas -= 1;
    }
  }

  console.log(numeroAbas);
}

calcularNumeroFinalDeAbas();