const X = parseInt(lines.shift());
const Y = Number(lines.shift()).toFixed(1);

const media = (X / Y).toFixed(3);

console.log(`${media} km/l`);