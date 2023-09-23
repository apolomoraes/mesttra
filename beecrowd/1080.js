const valores = [];
let posicao;

for(let i = 0; i < 100; i++) {
    const valor = parseInt(lines.shift());
    
    valores.push(valor);
}

const maiorValor = valores.reduce(function(prev, current, index) { 
 if(prev > current) {
    return prev;
 } else{
     posicao = index + 1;
     return current;
 }
 
     
});

console.log(maiorValor);
console.log(posicao);