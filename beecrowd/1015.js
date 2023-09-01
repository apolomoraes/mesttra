const [x1, y1] = lines.shift().split(' ').map(parseFloat);
const [x2, y2] = lines.shift().split(' ').map(parseFloat);

var distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log(distancia.toFixed(4));