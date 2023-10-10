//pega cada linha do arquivo fornecido pelo beecrowd
for (let i = 1; i <= lines[0]; i++) {
  //pega a quantidade de casos de teste
  let palavra = lines[i]

  //cria um vetor para auxiliar nas substituicoes dos caracteres
  let mensagemCrifrada = []

  mensagemCrifrada = primeiraPassada(palavra)
  //mensagemCrifrada.reverse() //segunda passada inverte os caracteres
  mensagem = inverter(mensagemCrifrada)
  mensagemCrifrada = terceiraPassada(mensagemCrifrada)
  imprimirMensagemCifrada(mensagemCrifrada)
}

function imprimirMensagemCifrada(mensagemCrifrada) {
  let txtCifrado = ""
  for (let i = 0; i < mensagemCrifrada.length; i++) {
    txtCifrado += mensagemCrifrada[i]
  }

  console.log(txtCifrado)
}

function terceiraPassada(mensagemCrifrada) {
  //descobre a posicao equivalente a metade do vetor
  let metade = parseInt(mensagemCrifrada.length / 2)

  //para cada caractere a partir da metade do vetor
  for (let i = metade; i < mensagemCrifrada.length; i++) {
    //obtem o codigo ascii do caractere
    let codAscii = mensagemCrifrada[i].charCodeAt()

    //converte a letra para o caractere anterior
    mensagemCrifrada[i] = String.fromCharCode(codAscii - 1)
  }

  return mensagemCrifrada
}

function inverter(vetor) {
  let aux
  let metade = (vetor.length / 2)
  let metadeInteiro = parseInt(metade)
  let limite

  // if (metade == metadeInteiro) 
  //     limite = (metade - 1)
  // else 
  //     limite = (metadeInteiro - 1)

  //e necessario realizar a troca somente ate a metade do vetor
  //caso for ate o fim ocorra a inversao duas vezes
  limite = (metade == metadeInteiro) ? metade : metadeInteiro
  limite--

  for (let i = 0, j = (vetor.length - 1); i < metade; i++, j--) {
    aux = vetor[i]
    vetor[i] = vetor[j]
    vetor[j] = aux
  }

  return vetor
}

function ehLetra(codAscii) {
  if ((codAscii >= 65 && codAscii <= 90) || (codAscii >= 97 && codAscii <= 122)) {
    return true
  } else {
    return false
  }
}

function primeiraPassada(palavra) {
  let codAscii
  let mensagemCrifrada = []

  for (let i = 0; i < palavra.length; i++) {
    //obtem o codigo ascii do caractere
    codAscii = palavra.charCodeAt(i)

    //se for uma letra realiza a substituicao
    //se nao for mantem a mesma letra
    if (ehLetra(codAscii)) {
      mensagemCrifrada[i] = String.fromCharCode(codAscii + 3)
    } else {
      mensagemCrifrada[i] = palavra[i]
    }
  }

  return mensagemCrifrada
}
