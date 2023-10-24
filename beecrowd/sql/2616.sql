SELECT c.id, c.name
FROM customers c
    LEFT JOIN locations l ON c.id = l.id_customers
WHERE l.id IS NULL
ORDER BY c.id;

-- LEFT JOIN locations l ON c.id = l.id_customers: Fazemos uma junção da tabela "customers" com a tabela "locations" usando um LEFT JOIN. Isso significa que todos os clientes da tabela "customers" serão incluídos na consulta, independentemente de terem entradas correspondentes na tabela "locations". A junção é feita com base na igualdade entre o ID do cliente (c.id) e o ID do cliente na tabela de locações (l.id_customers).

-- WHERE l.id IS NULL: A cláusula WHERE filtra os resultados, selecionando apenas os clientes que não têm uma entrada correspondente na tabela "locations". Quando não há correspondência na tabela de locações, o campo "l.id" será NULL.