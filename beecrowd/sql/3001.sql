SELECT
    name,
    CASE
        WHEN type = 'A' THEN 20.0
        WHEN type = 'B' THEN 70.0
        WHEN type = 'C' THEN 530.5
    END AS price
FROM products
ORDER BY
    CASE
        WHEN type = 'A' THEN 1
        WHEN type = 'B' THEN 2
        WHEN type = 'C' THEN 3
    END,
    id DESC;

-- Utilizamos uma cláusula CASE para calcular o valor da coluna price com base no tipo do produto (type). As regras especificam os preços para cada tipo.

-- A consulta final seleciona o nome do produto e o preço calculado.

-- Usamos a cláusula ORDER BY para ordenar os produtos em conjuntos com base no tipo do produto (type). Primeiro, produtos do tipo A, depois tipo B e por último tipo C. Dentro de cada conjunto, os produtos são ordenados pelo ID de forma decrescente.

-- A saída da consulta mostrará o nome e o preço corrigido de todos os produtos