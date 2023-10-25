SELECT
    products.name,
    providers.name,
    categories.name
FROM products
    INNER JOIN providers ON products.id_providers = providers.id
    INNER JOIN categories ON products.id_categories = categories.id
WHERE
    providers.name = 'Sansul SA'
    AND categories.name = 'Imported';

-- SELECT products.name, providers.name, categories.name: Esta parte da consulta SQL especifica as colunas que você deseja selecionar na saída. Estamos selecionando o nome dos produtos, o nome dos fornecedores e o nome das categorias.

-- FROM products: Especifica a tabela da qual estamos selecionando os dados, que é a tabela "products". Não renomeamos a tabela, então usamos o nome completo "products" para fazer referência a ela.

-- INNER JOIN providers ON products.id_providers = providers.id: Fazemos uma junção interna (INNER JOIN) da tabela "products" com a tabela "providers" usando a coluna "id_providers" da tabela "products" e a coluna "id" da tabela "providers". Isso nos permite relacionar os produtos com seus fornecedores.

-- INNER JOIN categories ON products.id_categories = categories.id: Fazemos uma junção interna (INNER JOIN) da tabela "products" com a tabela "categories" usando a coluna "id_categories" da tabela "products" e a coluna "id" da tabela "categories". Isso nos permite relacionar os produtos com suas categorias.

-- WHERE providers.name = 'Sansul SA' AND categories.name = 'Imported': A cláusula WHERE filtra os resultados, selecionando apenas os produtos cujo fornecedor tem o nome 'Sansul SA' e cuja categoria tem o nome 'Imported'. Essa condição nos ajuda a encontrar os produtos fornecidos pelo fornecedor 'Sansul SA' e pertencentes à categoria 'Imported'.