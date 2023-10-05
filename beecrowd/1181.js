const tamanhoMatriz = 12;
const conteudoInicial = null;

let linhaCalcular = Number(lines[0]);
let operacao = lines[1];

let matriz = [[]];

for(let i = 0; i < tamanhoMatriz; i++) {
    let colunas = [conteudoInicial, conteudoInicial, conteudoInicial, conteudoInicial, conteudoInicial, conteudoInicial, conteudoInicial, conteudoInicial, conteudoInicial, conteudoInicial, conteudoInicial, conteudoInicial]
    matriz[i] = colunas;
}

cont = 2

for(let linha = 0; linha < tamanhoMatriz; linha++){
    for(let coluna = 0; coluna < tamanhoMatriz; coluna++) {
        matriz[linha][coluna] = Number(lines[cont])
        cont++
    }
}

switch(operacao) {
    case 'S':
        console.log(calcularSoma(matriz, linhaCalcular).toFixed(1))
    break;
    case 'M':
        console.log(calcularMedia(matriz, linhaCalcular).toFixed(1))
    break;    
}

function calcularSoma(matriz, linha) {
    let soma = 0
    for(let coluna = 0; coluna < tamanhoMatriz; coluna++) {
        soma = soma + matriz[linha][coluna]
    }
    
    return soma
}

function calcularMedia(matriz, linha) {
    let media = (calcularSoma(matriz, linha) / 12)
    return media
}