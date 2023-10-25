select name, customers_number
from lawyers
where customers_number = (
        select
            max(customers_number)
        from lawyers
    )
union all
select name, customers_number
from lawyers
where customers_number = (
        select
            min(customers_number)
        from lawyers
    )
union all
select
    'Average' as name,
    round(avg(customers_number)) as customers_number
from lawyers;

-- SELECT name, customers_number: Seleciona o nome do advogado e o número de clientes da tabela "lawyers".

-- WHERE customers_number = (SELECT MAX(customers_number) FROM lawyers): Filtra o advogado com o maior número de clientes, usando uma subconsulta para encontrar o máximo número de clientes na tabela "lawyers".

-- Segunda parte da consulta:

-- SELECT name, customers_number: Seleciona o nome do advogado e o número de clientes da tabela "lawyers".

-- WHERE customers_number = (SELECT MIN(customers_number) FROM lawyers): Filtra o advogado com o menor número de clientes, usando uma subconsulta para encontrar o mínimo número de clientes na tabela "lawyers".

-- Terceira parte da consulta:

-- SELECT 'Average' as name, ROUND(AVG(customers_number)) as customers_number: Calcula a média do número de clientes entre todos os advogados, arredonda o resultado e nomeia a linha resultante como "Average".

-- A cláusula UNION ALL em SQL é usada para combinar os resultados de duas ou mais consultas em um único conjunto de resultados. A principal diferença entre UNION e UNION ALL é que UNION remove automaticamente as linhas duplicadas do conjunto de resultados, enquanto UNION ALL não faz isso e incluirá todas as linhas, mesmo que haja duplicatas.