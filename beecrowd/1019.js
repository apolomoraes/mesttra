function formatarTempo(totalSegundos) {
  const horas = Math.floor(totalSegundos / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = totalSegundos % 60;

  return `${horas}:${minutos}:${segundos}`;
}

const N = parseInt(lines.shift())

const tempoFormatado = formatarTempo(N);
console.log(tempoFormatado);