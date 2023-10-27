SELECT REPLACE(name, 'H1', 'X') AS name FROM virus;

-- REPLACE(name, 'H1', 'X') AS name: Esta parte da consulta faz a substituição dos caracteres. Aqui está o que cada parte faz:

-- REPLACE(name, 'H1', 'X'): Utiliza a função REPLACE para procurar na coluna name da tabela virus todas as ocorrências da string 'H1' e substituí-las pela string 'X'. Isso resulta em uma nova string onde 'H1' foi substituído por 'X'.

-- AS name: Define um alias (apelido) para o resultado da substituição. O alias é 'name', então o resultado substituído é tratado como uma coluna chamada 'name' na saída da consulta.