const A = parseFloat(lines.shift());
const B = parseFloat(lines.shift());

const media = ((A * 3.5) + (B * 7.5)) / 11;


console.log(`MEDIA = ${media.toFixed(5)}`);