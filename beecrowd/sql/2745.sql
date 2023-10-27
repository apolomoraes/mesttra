SELECT
    name,
    ROUND(salary * 0.10, 2) AS tax
FROM people
WHERE salary > 3000;

-- SELECT name, ROUND(salary * 0.10, 2) AS tax: Selecionamos o nome da pessoa da coluna 'name' e calculamos a taxa que deve ser paga, que é igual a 10% (0,10) da renda (salary). Usamos a função ROUND para arredondar o valor para duas casas decimais.

-- FROM people: Especificamos que os dados são da tabela 'people'.

-- WHERE salary > 3000: Fazemos uma condição para selecionar apenas as pessoas com renda acima de 3000, que são as que devem pagar a taxa.

-- O resultado dessa consulta será uma lista com o nome da pessoa e o valor da taxa que ela deve pagar com duas casas decimais de precisão