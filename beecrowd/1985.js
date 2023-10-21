const cardapio = {
  1001: 1.50,
  1002: 2.50,
  1003: 3.50,
  1004: 4.50,
  1005: 5.50
};

const quantidadeProdutos = parseInt(lines.shift());

let totalCompra = 0;

for (let i = 0; i < quantidadeProdutos; i++) {
  const [numeroProduto, quantidade] = lines.shift().split(' ').map(Number);

  totalCompra += cardapio[numeroProduto] * quantidade;
}

console.log(totalCompra.toFixed(2));