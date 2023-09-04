let countPositives = 0;
let sumPositives = 0;

for (var i = 0; i < 6; i++) {
  let inputValue = Number(lines.shift());

  if (inputValue > 0) {
    countPositives++;
    sumPositives += inputValue;
  }
}

let averagePositives = sumPositives / countPositives;

console.log(`${countPositives} valores positivos`);

console.log(averagePositives.toFixed(1));