const prompt = require('prompt-sync')();
function calcularDataRevolucao(anoBase, diasPorRevolucao, revolucoes) {
  const milissegundosPorDia = 24 * 60 * 60 * 1000;
  const dataBase = new Date(`${anoBase}-12-21`);
  const diasTotais = Math.floor(diasPorRevolucao * revolucoes);
  const dataFinal = new Date(dataBase.getTime() + diasTotais * milissegundosPorDia);
  const anoFinal = dataFinal.getFullYear();
  const mesFinal = (dataFinal.getMonth() + 1).toString().padStart(2, '0');
  const diaFinal = dataFinal.getDate().toString().padStart(2, '0');
  return [diasTotais, `${anoFinal}-${mesFinal}-${diaFinal}`];
}

function calcularProximaRevolucaoJupiterSaturno(revolucoes) {
  const diasPorRevolucaoJupiter = 11.9 * 365.25; // considerando anos bissextos
  const diasPorRevolucaoSaturno = 29.6 * 365.25; // considerando anos bissextos

  const [diasTotaisJupiter, dataFinalJupiter] = calcularDataRevolucao(2020, diasPorRevolucaoJupiter, revolucoes);
  const [diasTotaisSaturno, dataFinalSaturno] = calcularDataRevolucao(2020, diasPorRevolucaoSaturno, revolucoes);

  return [diasTotaisJupiter, dataFinalJupiter, diasTotaisSaturno, dataFinalSaturno];
}

const revolucoes = parseInt(prompt());
const [diasJupiter, dataFinalJupiter, diasSaturno, dataFinalSaturno] = calcularProximaRevolucaoJupiterSaturno(revolucoes);

console.log(`Dias terrestres para Jupiter = ${diasJupiter}`);
console.log(`Data terrestre para Jupiter: ${dataFinalJupiter}`);
console.log(`Dias terrestres para Saturno = ${diasSaturno}`);
console.log(`Data terrestre para Saturno: ${dataFinalSaturno}`);
