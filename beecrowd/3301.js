const prompt = require('prompt-sync')();

const entrada = prompt();
const [H, Z, L] = entrada.split(' ').map(Number);

let nomeSobrinhoMeio;

if ((H > Z && H < L) || (H < Z && H > L)) {
  nomeSobrinhoMeio = 'huguinho';
} else if ((Z > H && Z < L) || (Z < H && Z > L)) {
  nomeSobrinhoMeio = 'zezinho';
} else {
  nomeSobrinhoMeio = 'luisinho';
}

console.log(nomeSobrinhoMeio);