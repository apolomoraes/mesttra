for (let i = 0, x = 19; i < 10; i++, x--) {
  temp = lines[i]
  lines[i] = lines[x]
  lines[x] = temp
}

for (let i = 0; i < 20; i++) {
  console.log(`N[${i}] = ${lines[i]}`)
}