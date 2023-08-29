const [a, b, c] = lines.shift().split(' ').map(Number);

const maior_ab = Math.max(a, b);

const maior = Math.max(maior_ab, c);

console.log(`${Number(maior)} eh o maior`);