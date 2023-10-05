function calcularSomaDivisores(num) {
  let soma = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      soma += i;
    }
  }
  return soma;
}

function ehPerfeito(num) {
  const somaDivisores = calcularSomaDivisores(num);
  return somaDivisores === num;
}

function main() {
  const n = parseInt(lines.shift());

  for (let i = 0; i < n; i++) {
    const x = parseInt(lines.shift());

    if (ehPerfeito(x)) {
      console.log(`${x} eh perfeito`);
    } else {
      console.log(`${x} nao eh perfeito`);
    }
  }
}

main();