SELECT
    p.name AS product_name,
    c.name AS category_name
FROM products p
    INNER JOIN categories c ON p.id_categories = c.id
WHERE
    p.amount > 100
    AND p.id_categories IN (1, 2, 3, 6, 9)
ORDER BY p.id_categories;

-- INNER JOIN categories c ON p.id_categories = c.id: Fazemos uma junção interna (INNER JOIN) da tabela "products" com a tabela "categories" usando a coluna "id_categories" da tabela "products" e a coluna "id" da tabela "categories". Isso nos permite relacionar produtos às suas respectivas categorias.

-- WHERE p.amount > 100: A cláusula WHERE filtra os resultados, selecionando apenas produtos cuja quantidade seja maior que 100.

-- AND p.id_categories IN (1, 2, 3, 6, 9): Além disso, aplicamos uma condição para selecionar produtos cujo código de categoria esteja na lista especificada (1, 2, 3, 6, 9).

-- ORDER BY p.id_categories: A cláusula ORDER BY ordena os resultados em ordem crescente com base no código da categoria.