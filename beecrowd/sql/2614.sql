SELECT
    customers.name,
    rentals.rentals_date
FROM customers
    INNER JOIN rentals ON customers.id = rentals.id_customers
WHERE EXTRACT(
        YEAR
        FROM
            rentals.rentals_date
    ) = 2016
    AND EXTRACT(
        MONTH
        FROM
            rentals.rentals_date
    ) = 9;

-- SELECT customers.name, rentals.rentals_date: Esta parte da consulta SQL especifica as colunas que você deseja selecionar na saída. No caso, estamos selecionando as colunas "name" da tabela "customers" (que contém o nome dos clientes) e "rentals_date" da tabela "rentals" (que contém a data de locação).

-- FROM customers: Aqui, especificamos a tabela da qual estamos selecionando os dados, que é a tabela "customers". Não renomeamos a tabela, então usamos o nome completo "customers" para fazer referência a ela.

-- INNER JOIN rentals ON customers.id = rentals.id_customers: Esta é uma cláusula de junção que combina dados das tabelas "customers" e "rentals" com base nas colunas correspondentes. Estamos fazendo uma junção interna (INNER JOIN) usando a coluna "id" da tabela "customers" e a coluna "id_customers" da tabela "rentals". Isso nos permite relacionar clientes a suas locações.

-- WHERE EXTRACT(YEAR FROM rentals.rentals_date) = 2016 AND EXTRACT(MONTH FROM rentals.rentals_date) = 9: Aqui, estamos aplicando uma condição na cláusula WHERE. Usamos a função EXTRACT para obter o ano e o mês da coluna "rentals_date" na tabela "rentals". Em seguida, comparamos o ano (2016) e o mês (9) para selecionar apenas as locações que ocorreram em setembro de 2016.