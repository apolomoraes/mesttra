const [A, B, C, D] = lines.shift().split(' ').map(n => parseInt(n));

const positivo = C > 0 ? true : false;
const positivo2 = D > 0 ? true : false;
const par = (A % 2) == 0 ? true : false;

if ((B > C) && (D > A) && (C + D) > (A + B) && positivo && positivo2 && par) {
  console.log("Valores aceitos");
} else {
  console.log("Valores nao aceitos");
}