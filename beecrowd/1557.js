let ordem

let matriz = [[]]

while (true) {
  ordem = Number(lines.shift())

  if (ordem == 0) {
    break;
  }

  for (let linha = 0; linha < ordem; linha++) {
    let colunas = []

    for (let coluna = 0; coluna < ordem; coluna++) {
      colunas[coluna] = identificarValorCelula(linha, coluna)
    }

    matriz[linha] = colunas
  }

  let maiorValor = matriz[ordem - 1][ordem - 1].toString().length

  for (let linha = 0; linha < ordem; linha++) {
    let textoLinha = '';

    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
      textoLinha += matriz[linha][coluna].toString().padStart(maiorValor, ' ') + ' ';
    }

    console.log(textoLinha.trimEnd());
  }

  console.log();
}

function identificarValorCelula(linha, coluna) {
  return Math.pow(2, linha + coluna)
};