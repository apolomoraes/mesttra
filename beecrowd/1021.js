let valor = lines.shift();
let resto;
let qtdNotas;
let nota;
let qtdMoedas;
let moeda;


console.log("NOTAS:");

nota = 100
qtdNotas = parseInt(valor / nota);
resto = valor % nota;
console.log(`${qtdNotas} nota(s) de R$ 100.00`);

nota = 50
qtdNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(`${qtdNotas} nota(s) de R$ 50.00`);

nota = 20
qtdNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(`${qtdNotas} nota(s) de R$ 20.00`);

nota = 10
qtdNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(`${qtdNotas} nota(s) de R$ 10.00`);

nota = 5
qtdNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(`${qtdNotas} nota(s) de R$ 5.00`);

nota = 2
qtdNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(`${qtdNotas} nota(s) de R$ 2.00`);

console.log("MOEDAS:");

moeda = 1
qtdMoedas = parseInt(resto / moeda);
resto = resto % moeda;
console.log(`${qtdMoedas} moeda(s) de R$ 1.00`);

resto = parseInt(resto * 100);

moeda = 50
qtdMoedas = parseInt(resto / moeda);
resto = resto % moeda;
console.log(`${qtdMoedas} moeda(s) de R$ 0.50`);

moeda = 25
qtdMoedas = parseInt(resto / moeda);
resto = resto % moeda;
console.log(`${qtdMoedas} moeda(s) de R$ 0.25`);

moeda = 10
qtdMoedas = parseInt(resto / moeda);
resto = resto % moeda;
console.log(`${qtdMoedas} moeda(s) de R$ 0.10`);

moeda = 5
qtdMoedas = parseInt(resto / moeda);
resto = resto % moeda;
console.log(`${qtdMoedas} moeda(s) de R$ 0.05`);

moeda = 1
qtdMoedas = parseInt(resto / moeda);
resto = resto % moeda;
console.log(`${qtdMoedas} moeda(s) de R$ 0.01`);