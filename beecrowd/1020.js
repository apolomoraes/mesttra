function converterIdadeEmDias() {
  const idadeEmDias = parseInt(lines.shift());

  const anos = Math.floor(idadeEmDias / 365);
  const meses = Math.floor((idadeEmDias % 365) / 30);
  const dias = idadeEmDias - (anos * 365) - (meses * 30);

  console.log(`${anos} ano(s)`);
  console.log(`${meses} mes(es)`)
  console.log(`${dias} dia(s)`)
}
converterIdadeEmDias();