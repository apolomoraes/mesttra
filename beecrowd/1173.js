let dobra = []
let valor = Number(lines[0])

dobra[0] = valor

let valorDobrado

console.log(`N[0] = ${valor}`)

for (let i = 1; i <= 9; i++) {
  valorDobrado = 2 * dobra[dobra.length - 1]
  dobra[dobra.length] = valorDobrado
  console.log(`N[${i}] = ${valorDobrado}`)
}
