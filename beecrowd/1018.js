const valor = parseInt(lines.shift());
let resto;
let qtdNotas;
let nota;


console.log(valor);

nota = 100
qtdNotas = parseInt(valor / nota);
resto = valor % nota;
console.log(`${qtdNotas} nota(s) de R$ 100,00`);

nota = 50
qtdNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(`${qtdNotas} nota(s) de R$ 50,00`);

nota = 20
qtdNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(`${qtdNotas} nota(s) de R$ 20,00`);

nota = 10
qtdNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(`${qtdNotas} nota(s) de R$ 10,00`);

nota = 5
qtdNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(`${qtdNotas} nota(s) de R$ 5,00`);

nota = 2
qtdNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(`${qtdNotas} nota(s) de R$ 2,00`);

nota = 1
qtdNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(`${qtdNotas} nota(s) de R$ 1,00`);