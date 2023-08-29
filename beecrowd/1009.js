const nomeVendedor = lines.shift();
const salarioFixo = parseFloat(lines.shift());
const totalVendas = parseFloat(lines.shift());
const comissaoTotalVendas = totalVendas * 0.15;

const total = (salarioFixo + comissaoTotalVendas).toFixed(2);

console.log(`TOTAL = R$ ${total}`);