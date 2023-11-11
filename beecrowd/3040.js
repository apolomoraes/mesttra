const valor = parseInt(lines.shift());

for (let i = 0; i < valor; i++) {
  const [valor1, valor2, valor3] = lines.shift().split(' ').map(parseFloat);

  const condicao1 = valor1 >= 200 && valor1 <= 300;
  const condicao2 = valor2 >= 50;
  const condicao3 = valor3 >= 150;

  if (condicao1 && condicao2 && condicao3) {
    console.log("Sim");
  } else {
    console.log("Nao");
  }
}