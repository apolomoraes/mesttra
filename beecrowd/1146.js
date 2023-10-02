while(true) {
  const valor = parseInt(lines.shift());
  
  if(valor == 0) {
      break;
  }
  
  let resultado = ""
  
  for(let i = 1; i <= valor; i++) {
      resultado += i;
      
      if(i < valor) {
          resultado += " ";
      }
  }
  
  console.log(resultado);
}