const prompt = require('prompt-sync')();

const numPerguntas = parseInt(prompt());
for (let i = 1; i <= numPerguntas; i++) {
  const resposta = parseInt(prompt());
  console.log(`resposta ${i}: ${resposta}`);
}