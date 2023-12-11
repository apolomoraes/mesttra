const prompt = require('prompt-sync')();

const palavra = prompt();

const resultado = palavra.length >= 10 ? 'palavrão' : 'palavrinha';
console.log(resultado);