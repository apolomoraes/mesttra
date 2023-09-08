// const frente = prompt("Quantos metros o terreno possui de frente?");
// const lateral = prompt("Quantos metros o terreno possui de lateral?");
// const valor = prompt("Informe o valor do metro quadrado");

// const areaTotal = frente * lateral;

// alert(`A area total do terreno de ${frente}mts de frente com ${lateral}mts de lateral é: ${areaTotal}`);
// alert(`O valor deste terreno é: ${areaTotal * valor}`);

/*--------------------------------------------------------------------------*/

// const salarioMinimo = prompt("valor da salário minimo");
// const salarioFuncionario = prompt("valor do seu salário");

// const quantidade = salarioFuncionario / salarioMinimo;

// alert(`O funcionário recebe ${quantidade.toFixed(1)} salários minimos`);

/*-------------------------------------------------------------------------------*/

// const nota1 = prompt("Informe primeira nota");
// const nota2 = prompt("Informe segunda nota");
// const nota3 = prompt("Informe terceira nota");

// const ponderada = (nota1 * 1) + (nota2 * 2) + (nota3 * 3);

// const media = ponderada / 6;

// alert(`A média ponderada das notas ${nota1}, ${nota2}, ${nota3} é: ${media.toFixed(1)}`);

/*--------------------------------------------------------------------------------*/

// const numberOne = prompt("primeiro número")
// const numberTwo = prompt("segundo número")

// const divisao = numberOne / numberTwo;

// alert(`a divisão de ${numberOne} por ${numberTwo} é: ${divisao.toFixed(2)}`)

/*---------------------------------------------------------------------------------*/

// const cavalos = prompt("Quantidade de cavalos:")
// const valorFerradura = prompt("Valor de cada(unidade) ferradura:")

// alert(`A quantidade de ferraduras necessárias são ${cavalos * 4} \n
// Valor total das ferraduras: R$${(cavalos * 4) * valorFerradura}
// `)

/*--------------------------------------------------------------------------------------*/

// const peso = prompt("Informe seu peso em KG");

// const pesoQuinzePorcento = 1.15 * peso;

// const pesoVintePorcento = 1.20 * peso;


// alert(`Caso a pessoa engorde 15% ficara com: ${pesoQuinzePorcento.toFixed(2)} \n
// Caso a pessoa engorde 20% ficara com: ${pesoVintePorcento.toFixed(2)}
// `)

/*---------------------------------------------------------------------------------------*/

// const salarioFuncionario = Number(prompt("Informe o salário"));
// const reajuste = salarioFuncionario * 1.15;
// const descontoINSS = reajuste * 0.11;
// const descontoFGTS = reajuste * 0.08;
// const totalDescontos = descontoFGTS + descontoINSS;
// const salarioFinal = reajuste - totalDescontos;

// alert(`Salário inicial: ${salarioFuncionario.toFixed(2)} \n
// Salário Reajustado: ${reajuste.toFixed(2)} \n
// Desconto 11% INSS: ${descontoINSS.toFixed(2)}
// Desconto 8% FGTS: ${descontoFGTS.toFixed(2)}
// Total descontos: ${totalDescontos.toFixed(2)}
// Salário Final: ${salarioFinal.toFixed(2)}
// `)

/*----------------------------------------------------------------------------------*/
// alert("Trapezio")
// const baseMaior = prompt("Digite a base maior");
// const baseMenor = prompt("Digite a base menor");
// const altura = prompt("Digite a altura");
// const areaTrapezio = (baseMaior + baseMenor) * altura / 2;
// alert(`Area do trapezio é: ${areaTrapezio}`);


// alert("Quadrado");
// const lado = prompt("Digite um dos lados do quadrado");
// alert(`A área do quadrado é: ${lado * 4}`);

// alert("Retangulo");
// const largura = prompt("Digite largura");
// const alturaRetangulo = prompt("Digite altura");
// const areaRetangulo = largura * altura;
// alert(`A área do retangulo é: ${areaRetangulo}`);

// alert("Circulo")
// const raio = prompt("Digite o raio do circulo");
// alert(`A areá do circulo é: ${3.14 * (raio ** 2) }`);

// alert("Triangulo")
// const baseTriangulo = prompt("Digite a base");
// const alturaTriangulo = prompt("Digite a altura");
// alert(`A area do triangulo é: ${(baseTriangulo * alturaTriangulo) / 2}`);
/*------------------------------------------------------------------------------*/

// const dataNascimento = prompt("Sua data de nascimento");
// const dataAtual = new Date().getFullYear()

// const idade = dataAtual - dataNascimento;
// const meses = idade * 12;
// const dias = idade * 360;
// const semanas = (dias / 7).toFixed(2);

// alert(`idade em anos: ${idade}`);
// alert(`idade em meses: ${meses}`);
// alert(`idade em dias: ${dias}`);
// alert(`idade em semanas: ${semanas}`);

/*--------------------------------------------------------------------------------*/

// const qtd = prompt("Quantidade de litros de suco necessário?")

// const agua = (qtd * 0.8).toFixed(2)
// const suco = (qtd * 0.2).toFixed(2)

// alert(`quantidade de água: ${agua} \n
// Quantidade de suco: ${suco}
// `)

/*-------------------------------------------------------------------------------*/

// const anelChip = 4;
// const anelAlimento = 3.50 * 2;

// const qtd = prompt("Digite a quantidade de frangos")

// const result = (anelChip * qtd) + (anelAlimento * qtd);

// alert("O valor total para identificar os frangos é: R$" + result)

/*------------------------------------------------------------------------------*/

// const lata350 = prompt("Quantidade de latas de 350ml");
// const garrafa600 = prompt("Quantidade de garrafas de 600ml");
// const garrafa2lt = prompt("Quantidade de garrafas de 2lts");

// const result = (350 * lata350) + (600 * garrafa600) + (2000 * garrafa2lt);

// alert("A quantidade total de litros é: " + result + " litros")

/*---------------------------------------------------------------*/

// const quantidadeSanduiche = prompt("Quantidade de sanduiches");

// const fatiaPresunto = 50;
// const fatiasQueijo = 100;
// const hamburguer = 120;

// const qtdPresunto = ((quantidadeSanduiche * fatiaPresunto) / 1000).toFixed(2);
// const qtdQueijo = ((quantidadeSanduiche * fatiasQueijo) / 1000).toFixed(2);
// const qtdHamburguer = ((quantidadeSanduiche * hamburguer) / 1000).toFixed(2);

// const result = `${qtdPresunto}kgs de Presunto
// ${qtdQueijo}kgs de Queijo
// ${qtdHamburguer}kgs de hamburguer
// `

// alert(result)

/*-----------------------------------------------------------------*/

// const valorHora = 10
// const horaExtra = 15
// const valeCrianca = 90

// const horaTrabalhada = prompt("Quantas horas trabalhadas?")
// const horaExtraTrabalhada = prompt("Quantas horas extras trabalhadas?")
// const filhos = prompt("Quantos filhos menor ou igual a 6 anos")

// const salarioLiquido = horaTrabalhada * valorHora;
// const salarioLiquidoDesconto = salarioLiquido - (salarioLiquido * 0.11)
// const salarioFinal = salarioLiquidoDesconto + (filhos * valeCrianca) + (horaExtraTrabalhada * horaExtra)

// const result = `Horas Normais = R$${salarioLiquido}
// Adicional de horas extras = R$${horaExtra * horaExtraTrabalhada}
// Adicional de dependencias = R$${valeCrianca * filhos}
// Salario Liquido = R$${salarioLiquidoDesconto}
// Salario Final = R$${salarioFinal}
// `

// alert(result)

/*------------------------------------------------------------------ */

// const produto1 = 150;
// const produto2 = 220;
// const produto3 = 97;


// const faturamentoAnterior = Number(prompt("Digite o valor do faturamento anterior"));

// const aumento = faturamentoAnterior * 1.20;
// const aumentoLiquido = aumento - faturamentoAnterior;

// const result = `A meta do proximo mês é: R$${aumento} \n
// Um aumento de: R$${aumentoLiquido} \n
// \n
// Quantidade de peças a serem vendidas para atingirmos a meta: \n
// \n
// Produto 1: ${aumentoLiquido / produto1} \n
// Produto 2: ${aumentoLiquido / produto2} \n
// Produto 3: ${aumentoLiquido / produto3} \n
// `;

// alert(result);

/*------------------------------------------------------------------------------------------*/

// const pao = 0.12;
// const broa = 1.60;

// const quantidadePao = prompt("Quantidade de pães vendidos:");
// const quantidadeBroa = prompt("Quantidade de broas vendidas");
// const reforma = prompt("Digite o valor da reforma");

// const faturamentoBroa = broa * quantidadeBroa;
// const faturamentoPao = pao * quantidadePao;
// const faturamentoTotal = faturamentoBroa + faturamentoPao;
// const poupanca = faturamentoTotal * 0.10;
// const diasReforma = Math.round(reforma / poupanca);

// const result = `Faturamento com a venda de broas: R$${faturamentoBroa} \n
// Faturamento com a venda de pães: R$${faturamentoPao} \n
// Faturamento total: R$${faturamentoTotal} \n
// Valor a ser depositado na poupança: R$${poupanca}
// Para pagar a reforma será necessário ${diasReforma} dias
// `;

// alert(result);

/*------------------------------------------------------------------------------------------*/

// const dia = Number(prompt("Digite o dia"));
// const mes = Number(prompt("Digite o mês"));

// const valorTotal = (mes * 30) + dia;

// const result = `A quantidade de dias que se passaram foi: ${valorTotal}`

// alert(result)

/*------------------------------------------------------------------------------------------------*/

// const numero = prompt("Digite um número de 4 digitos");

// const milhares = Math.floor((numero / 1000) % 10);
// const centena = Math.floor((numero / 100) % 10);
// const dezena = Math.floor((numero / 10) % 10);
// const unidade = numero % 10;

// const result = ` Milhares = ${milhares} \n
// Centenas = ${centena} \n
// Dezenas = ${dezena} \n
// Unidades = ${unidade} \n
// `;

// alert(result);

/*---------------------------------------------------------------------*/

// const numero = Number(prompt("Digite um número: "))

// console.log("Tabuada do + e - para o numero ", numero);
// console.log(numero + " + 0 =  " + (numero + 0) + "            " + numero + " - 0 = ", Math.abs(numero - 0)   )
// console.log(numero + " + 1 =  " + (numero + 1) + "            " + numero + " - 1 = ", Math.abs(numero - 1)   )
// console.log(numero + " + 2 =  " + (numero + 2) + "            " + numero + " - 2 = ", Math.abs(numero - 2)   )
// console.log(numero + " + 3 =  " + (numero + 3) + "            " + numero + " - 3 = ", Math.abs(numero - 3)   )
// console.log(numero + " + 4 =  " + (numero + 4) + "            " + numero + " - 4 = ", Math.abs(numero - 4)   )
// console.log(numero + " + 5 =  " + (numero + 5) + "            " + numero + " - 5 = ", Math.abs(numero - 5)   )
// console.log(numero + " + 6 =  " + (numero + 6) + "            " + numero + " - 6 = ", Math.abs(numero - 6)   )
// console.log(numero + " + 7 =  " + (numero + 7) + "            " + numero + " - 7 = ", Math.abs(numero - 7)   )
// console.log(numero + " + 8 =  " + (numero + 8) + "            " + numero + " - 8 = ", Math.abs(numero - 8)   )
// console.log(numero + " + 9 =  " + (numero + 9) + "            " + numero + " - 9 = ", Math.abs(numero - 9)   )
// console.log("Tabuada da / e * para o numero ", numero);
// console.log(numero + " * 0 =  " + (numero * 0) + "            " + numero + " / 0 = não existe numéro dividido por 0")
// console.log(numero + " * 1 =  " + (numero * 1) + "            " + numero + " / 1 = ", (numero / 1).toFixed(2))
// console.log(numero + " * 2 =  " + (numero * 2) + "            " + numero + " / 2 = ", (numero / 2).toFixed(2))
// console.log(numero + " * 3 =  " + (numero * 3) + "            " + numero + " / 3 = ", (numero / 3).toFixed(2))
// console.log(numero + " * 4 =  " + (numero * 4) + "            " + numero + " / 4 = ", (numero / 4).toFixed(2))
// console.log(numero + " * 5 =  " + (numero * 5) + "            " + numero + " / 5 = ", (numero / 5).toFixed(2))
// console.log(numero + " * 6 =  " + (numero * 6) + "            " + numero + " / 6 = ", (numero / 6).toFixed(2))
// console.log(numero + " * 7 =  " + (numero * 7) + "            " + numero + " / 7 = ", (numero / 7).toFixed(2))
// console.log(numero + " * 8 =  " + (numero * 8) + "            " + numero + " / 8 = ", (numero / 8).toFixed(2))
// console.log(numero + " * 9 =  " + (numero * 9) + "            " + numero + " / 9 = ", (numero / 9).toFixed(2))
/*-------------------------------------------------------------------------- */

