let [horaInicial, horaFinal] = lines.shift().split(' ').map(Number);

if (horaFinal < horaInicial) {
  horaFinal += 24;
}

let duracao = horaFinal - horaInicial;

if (duracao < 1) {
  duracao = 24;
} else if (duracao > 24) {
  duracao = 24;
}

console.log(`O JOGO DUROU ${duracao} HORA(S)`);