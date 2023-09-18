let soma = 0;
let contador = 0;

while (true) {
    const valor = parseInt(lines.shift());

    if (valor < 0) {
        break;
    }

    soma += valor;
    contador++
}

media = soma / contador;
console.log(media.toFixed(2));