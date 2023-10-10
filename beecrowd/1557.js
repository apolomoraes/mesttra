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

  for (let linha = 0; linha < ordem; linha++) {
    let textoLinha = '';

    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
      textoLinha += matriz[i][coluna].toString().padStart(3, ' ') + ' ';
    }

    console.log(textoLinha.trimEnd());
  }

  console.log();
}

function identificarValorCelula(linha, coluna) {
  return Math.pow(2, linha + coluna)
};