SELECT c.name, o.id
FROM customers c
    INNER JOIN orders o ON c.id = o.id_customers
WHERE EXTRACT(
        YEAR
        FROM
            o.orders_date
    ) = 2016
    AND EXTRACT(
        MONTH
        FROM
            o.orders_date
    ) BETWEEN 1 AND 6;

-- SELECT c.name, o.id: Esta parte da consulta SQL especifica as colunas que você deseja selecionar na saída. Estamos selecionando o nome dos clientes da tabela "customers" e o número do pedido da tabela "orders".

-- FROM customers c: Especifica a tabela da qual estamos selecionando os dados, que é a tabela "customers". Renomeamos a tabela como "c" para facilitar a referência.

-- INNER JOIN orders o ON c.id = o.id_customers: Fazemos uma junção interna (INNER JOIN) entre as tabelas "customers" (renomeada como "c") e "orders" (renomeada como "o"). Isso é feito com base na correspondência entre o ID do cliente (c.id) e o ID do cliente na tabela de pedidos (o.id_customers).

-- WHERE EXTRACT(YEAR FROM o.orders_date) = 2016 AND EXTRACT(MONTH FROM o.orders_date) BETWEEN 1 AND 6: A cláusula WHERE filtra os resultados. Estamos aplicando duas condições: a primeira verifica se o ano da data do pedido é 2016 e a segunda verifica se o mês da data do pedido está entre 1 (janeiro) e 6 (junho), ou seja, no primeiro semestre.