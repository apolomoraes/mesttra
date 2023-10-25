select
    name,
    round( (
            math * 2 + specific * 3 + project_plan * 5
        ) / 10,
        2
    ) as avg
from candidate
    join score on candidate.id = score.candidate_id
order by avg desc;

-- ROUND((math*2 + specific*3 + project_plan*5) / 10, 2) AS avg: Calculamos a média ponderada de acordo com a fórmula fornecida, onde multiplicamos as pontuações individuais pelos pesos (2, 3 e 5) e, em seguida, dividimos o resultado por 10. Usamos a função ROUND para arredondar o resultado para duas casas decimais, como especificado.

-- FROM candidate: Especificamos a tabela "candidate" como a fonte de dados principal.

-- JOIN score ON candidate.id = score.candidate_id: Unimos a tabela "score" à tabela "candidate" usando a coluna "id" da tabela "candidate" e a coluna "candidate_id" da tabela "score".

-- ORDER BY avg DESC: Ordenamos os resultados em ordem decrescente com base na pontuação média, de modo que os candidatos com a maior pontuação apareçam no topo da lista.