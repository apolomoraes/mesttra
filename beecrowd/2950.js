const [a, b, c] = lines.shift().split(' ').map(Number);

const diametros = b + c

const result = (a / diametros).toFixed(2);

console.log(result);