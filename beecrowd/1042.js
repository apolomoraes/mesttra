const [num1, num2, num3] = lines.shift().split(' ').map(n => parseInt(n));

const valores = [num1, num2, num3];

valores.sort((a, b) => a - b);

console.log(valores.join('\n'));

console.log();

console.log(`${num1}\n${num2}\n${num3}`);

// A função sort e o método join são métodos em JavaScript que são usados para manipular arrays.

// sort: A função sort é usada para ordenar os elementos de um array em ordem alfabética ou numérica, dependendo dos valores dos elementos. Por padrão, a função sort classifica os elementos como strings e os ordena em ordem lexicográfica. Para ordenar numericamente, você precisa fornecer uma função de comparação. Por exemplo:

// javascript
// Copy code
// const numeros = [3, 1, 2, 5, 4];
// numeros.sort((a, b) => a - b); // Ordena os números em ordem crescente
// console.log(numeros); // [1, 2, 3, 4, 5]
// Neste exemplo, a função de comparação (a, b) => a - b é usada para ordenar os números em ordem crescente.

// join: O método join é usado para criar uma string a partir dos elementos de um array, separando-os por um delimitador específico (geralmente uma vírgula, por padrão). Por exemplo:

// javascript
// Copy code
// const frutas = ['maçã', 'banana', 'laranja'];
// const stringDeFrutas = frutas.join(', ');
// console.log(stringDeFrutas); // "maçã, banana, laranja"
// Neste exemplo, os elementos do array frutas são unidos em uma única string, separados por vírgulas e espaço, porque especificamos ', ' como o delimitador. Se você não fornecer um delimitador, o método join usará uma vírgula como padrão.

// Ambas as funções são muito úteis para manipular e exibir os dados armazenados em arrays de maneira legível e ordenada.