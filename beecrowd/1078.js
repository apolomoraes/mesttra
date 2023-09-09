const value = parseInt(lines.shift());

console.log(`1 x ${value} = ${1 * value}`);
console.log(`2 x ${value} = ${2 * value}`);
console.log(`3 x ${value} = ${3 * value}`);
console.log(`4 x ${value} = ${4 * value}`);
console.log(`5 x ${value} = ${5 * value}`);
console.log(`6 x ${value} = ${6 * value}`);
console.log(`7 x ${value} = ${7 * value}`);
console.log(`8 x ${value} = ${8 * value}`);
console.log(`9 x ${value} = ${9 * value}`);
console.log(`10 x ${value} = ${10 * value}`);

/*-------------------------------------------------*/

for (let i = 1; i < 11; i++) {
  console.log(`${i} x ${value} = ${i * value}`);
}