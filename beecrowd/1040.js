const [A, B, C, D] = lines.shift().split(' ').map(parseFloat);

const media = ((A * 2) + (B * 3) + (C * 4) + (D * 1)) / 10;

console.log(`Media: ${media.toFixed(1)}`);

if (media >= 7.0) {
  console.log("Aluno aprovado.");
} else if (media < 5.0) {
  console.log("Aluno reprovado.");
} else {
  console.log("Aluno em exame.");

  const E = parseFloat(lines.shift());

  console.log(`Nota do exame: ${E.toFixed(1)}`);

  mediaRecalculada = (E + media) / 2;

  if (mediaRecalculada >= 5.0) {
    console.log("Aluno aprovado.");
  } else {
    console.log("Aluno reprovado.");
  }

  console.log(`Media final: ${mediaRecalculada.toFixed(1)}`);
}