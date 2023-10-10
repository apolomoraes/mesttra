const NUM_LEDS = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6]

let caractere
let qtdeLeds
let numero

let total = lines.shift()

for (let i = 0; i < total; i++) {
  numero = lines[i]
  qtdeLeds = 0

  for (let indice = 0; indice < numero.length; indice++) {
    caractere = numero[indice]
    qtdeLeds = qtdeLeds + adicionaQtdeLeds(NUM_LEDS, caractere)
  }

  console.log(qtdeLeds + " leds")
}

function adicionaQtdeLeds(NUM_LEDS, caractere) {
  return NUM_LEDS[caractere]
}