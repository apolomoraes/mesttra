const [A, B, C] = lines.shift().split(' ').map(parseFloat);

const areaTriangulo = (A * C) / 2;
const areaCirculo = 3.14159 * Math.pow(C, 2);
const areaTrapezio = ((A + B) * C) / 2;
const areaQuadrado = Math.pow(B, 2);
const areaRetangulo = A * B;

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);