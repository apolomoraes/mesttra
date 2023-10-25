select
    concat(
        substring(cpf, 1, 3),
        '.',
        substring(cpf, 4, 3),
        '.',
        substring(cpf, 7, 3),
        '-',
        substring(cpf, 10, 2)
    ) as cpf
from natural_person;

-- SELECT: Esta parte da consulta SQL especifica a coluna que você deseja selecionar na saída, que é o CPF com a máscara.

-- CONCAT: Usamos a função CONCAT para concatenar as partes do CPF com os caracteres de máscara.

-- SUBSTRING(cpf, 1, 3): Usamos a função SUBSTRING para extrair os primeiros 3 dígitos do CPF (os caracteres 1 a 3).

-- SUBSTRING(cpf, 4, 3): Usamos a função SUBSTRING para extrair os próximos 3 dígitos do CPF (os caracteres 4 a 6).

-- SUBSTRING(cpf, 7, 3): Usamos a função SUBSTRING para extrair os próximos 3 dígitos do CPF (os caracteres 7 a 9).

-- SUBSTRING(cpf, 10, 2): Usamos a função SUBSTRING para extrair os últimos 2 dígitos do CPF (os caracteres 10 e 11).

-- -: Incluímos o caractere de traço como parte da máscara.