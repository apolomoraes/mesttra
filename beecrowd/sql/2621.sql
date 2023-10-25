SELECT p.name
FROM products p
    INNER JOIN providers pr ON p.id_providers = pr.id
WHERE
    p.amount BETWEEN 10 AND 20
    AND LEFT(pr.name, 1) = 'P';

-- SELECT p.name: Esta parte da consulta SQL especifica a coluna que você deseja selecionar na saída, que é o nome dos produtos.

-- FROM products p: Especifica a tabela da qual estamos selecionando os dados, que é a tabela "products". Renomeamos a tabela como "p" para facilitar a referência.

-- INNER JOIN providers pr ON p.id_providers = pr.id: Fazemos uma junção interna (INNER JOIN) entre as tabelas "products" (renomeada como "p") e "providers" (renomeada como "pr"). Isso é feito com base na correspondência entre o ID do fornecedor (p.id_providers) e o ID do fornecedor na tabela "providers" (pr.id).

-- WHERE p.amount BETWEEN 10 AND 20: A cláusula WHERE filtra os resultados. Estamos aplicando uma condição para selecionar apenas produtos cujas quantidades estejam entre 10 e 20.

-- AND LEFT(pr.name, 1) = 'P': Além disso, aplicamos outra condição para selecionar produtos cujo nome do fornecedor comece com a letra 'P'. Usamos a função LEFT() para extrair a primeira letra do nome do fornecedor e a comparamos com 'P'.