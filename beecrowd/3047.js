const idadeM = lines.shift();
const idade1 = lines.shift();
const idade2 = lines.shift();
const idade3 = idadeM - idade1 - idade2;

const result = Math.max(idade1, idade2, idade3);

console.log(result);