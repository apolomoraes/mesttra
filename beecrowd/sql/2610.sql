SELECT ROUND(AVG(price), 2) AS average_price FROM products;

-- Nesta consulta, usamos a função ROUND para arredondar o resultado da função AVG(price) para duas casas decimais. O resultado será retornado como "average_price" com precisão de duas casas decimais.

-- ROUND(AVG(price), 2) AS average_price: Isso faz duas coisas:

-- AVG(price): A função AVG é uma função de agregação que calcula a média dos valores na coluna "price" da tabela "products". Isso nos dá a média dos preços dos produtos.

-- ROUND(...): A função ROUND é usada para arredondar um número para um determinado número de casas decimais. No nosso caso, estamos arredondando a média calculada para 2 casas decimais. Portanto, ROUND(AVG(price), 2) garante que a média seja exibida com duas casas decimais.

-- AS average_price: É um alias que dá um nome amigável ao resultado da expressão. Neste caso, o resultado da média é nomeado como "average_price", facilitando a referência a esse valor na saída da consulta.