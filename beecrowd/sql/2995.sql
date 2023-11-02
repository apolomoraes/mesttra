SELECT
    temperature,
    COUNT(*) AS number_of_records
FROM (
        SELECT
            temperature,
            id,
            row_number() over (
                ORDER BY
                    id
            ) - row_number() over (
                PARTITION BY temperature
                ORDER BY
                    id
            ) AS grp
        FROM
            records
    ) AS temp_groups
GROUP BY temperature, grp
ORDER BY MIN(id);

SELECT
    temperature,
    id,
...: Seleciona a coluna temperature (temperatura) e a coluna id (identificador) da tabela records.

row_number() over (
    ORDER BY
        id
) - row_number() over (
    PARTITION BY temperature
    ORDER BY
        id
) AS grp: Esta parte é essencial para determinar os grupos de registros com a mesma temperatura.Ela usa duas funções row_number():

-- A primeira row_number() over (ORDER BY id) atribui um número sequencial para cada registro na ordem dos IDs. Isso basicamente gera uma sequência de números de 1 até o total de registros na tabela.

-- A segunda row_number() over (PARTITION BY temperature ORDER BY id) atribui um número sequencial para cada registro dentro de cada grupo de temperatura (particiona os registros pela temperatura) na ordem dos IDs.

-- Ao subtrair o segundo row_number do primeiro, você obtém um valor constante dentro de cada grupo de temperatura e diferente entre grupos. Esse valor constante é usado como grp para identificar os grupos de registros com a mesma temperatura.

-- A subconsulta interna é usada para criar uma tabela temporária chamada temp_groups com as colunas temperature, id, e grp. Essa tabela será usada para agrupar e contar os registros com a mesma temperatura e marca-los com o mesmo número de grupo.

-- Na consulta principal:

-- SELECT temperature, COUNT(*) AS number_of_records: Esta parte da consulta agrupa os registros pela coluna temperature e pelo número de grupo grp criado na subconsulta interna. A função COUNT(*) conta o número de registros em cada grupo, que é o número de registros com a mesma temperatura.

-- GROUP BY temperature, grp: Agrupa os registros pela temperatura e pelo número de grupo, criando grupos distintos para cada conjunto de registros com a mesma temperatura.

-- ORDER BY MIN(id): A saída é ordenada pelo menor valor de id em cada grupo. Isso garante que a ordem dos grupos na saída seja determinada pelo primeiro registro em cada grupo.