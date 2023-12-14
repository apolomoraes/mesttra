const prompt = require('prompt-sync')();

const T = parseInt(prompt());

for (let i = 0; i < T; i++) {
  const entrada = prompt().split(' ');
  const PA = parseInt(entrada[0]);
  const PB = parseInt(entrada[1]);
  const G1 = parseFloat(entrada[2]) / 100;
  const G2 = parseFloat(entrada[3]) / 100;

  let anos = 0;

  while (PA <= PB && anos <= 100) {
    PA += Math.floor(PA * G1);
    PB += Math.floor(PB * G2);
    anos++;
  }

  if (anos <= 100) {
    console.log(`${anos} anos.`);
  } else {
    console.log('Mais de 1 seculo.');
  }
}