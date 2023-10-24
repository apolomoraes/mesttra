SELECT
    c.name AS category,
    SUM(p.amount) AS sum
FROM products p
    INNER JOIN categories c ON p.id_categories = c.id
GROUP BY c.name
ORDER BY category;

-- SELECT c.name AS category, SUM(p.amount) AS sum: Estamos selecionando o nome da categoria (da tabela "categories") e a soma da quantidade de produtos (da tabela "products"). Usamos um alias "category" para o nome da categoria e "sum" para a soma.

-- FROM products p: Aqui estamos selecionando os dados da tabela "products" e a renomeamos como "p" para facilitar a referência na consulta.

-- INNER JOIN categories c ON p.id_categories = c.id: Estamos fazendo uma junção interna (INNER JOIN) entre as tabelas "products" (renomeada como "p") e "categories" (renomeada como "c"). Isso é feito com base na correspondência entre as colunas "id_categories" na tabela "products" e "id" na tabela "categories". Isso nos permite relacionar produtos a suas respectivas categorias.

-- GROUP BY c.name: Estamos agrupando os resultados com base no nome da categoria. Isso garante que obteremos a soma da quantidade de produtos por categoria.

-- ORDER BY category: Estamos ordenando os resultados com base no nome da categoria em ordem alfabética.