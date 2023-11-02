let [valor, saldo] = lines.shift().split(" ").map(Number);

let menorSaldo = saldo;

for (let i = 0; i < valor; i++) {
  const movimentacao = parseInt(lines.shift());
  saldo += movimentacao;
  if (saldo < menorSaldo) {
    menorSaldo = saldo;
  }
}

console.log(menorSaldo);