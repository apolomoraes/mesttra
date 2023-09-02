let isPositive = 0;

for (let i = 0; i < 6; i++) {
  const value = lines.shift();
  i + 1

  if (value > 0) {
    isPositive++
  }
}

console.log(`${isPositive} valores positivos`);

/*--------------------------------------------------*/

const value1 = lines.shift();
const value2 = lines.shift();
const value3 = lines.shift();
const value4 = lines.shift();
const value5 = lines.shift();
const value6 = lines.shift();

const values = [value1, value2, value3, value4, value5, value6];

const positive = values.filter(value => value > 0).length;

console.log(`${positive} valores positivos`);