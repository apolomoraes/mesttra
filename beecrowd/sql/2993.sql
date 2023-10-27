SELECT
    amount AS most_frequent_value
FROM value_table
GROUP BY amount
ORDER BY COUNT(*) DESC
LIMIT 1;

-- Usamos a cláusula GROUP BY para agrupar os valores na coluna amount.

-- Contamos a ocorrência de cada valor usando a função COUNT(*).

-- Usamos a cláusula ORDER BY para classificar os grupos em ordem decrescente com base na contagem. Isso colocará o valor mais frequente no topo da lista.

-- Finalmente, usamos LIMIT 1 para limitar o resultado a apenas uma linha, que conterá o valor mais frequente.