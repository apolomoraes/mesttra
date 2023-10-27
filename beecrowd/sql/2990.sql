SELECT e.cpf, e.enome, d.dnome
FROM empregados e
    JOIN departamentos d ON e.dnumero = d.dnumero
    LEFT JOIN trabalha t ON e.cpf = t.cpf_emp
WHERE t.cpf_emp IS NULL
ORDER BY e.cpf;

-- SELECT e.cpf, e.enome, d.dnome: Esta parte da consulta define as colunas que serão selecionadas no resultado. Estamos interessados no CPF do empregado (cpf), no nome do empregado (enome) e no nome do departamento (dnome).

-- FROM empregados e: Aqui, estamos especificando a tabela 'empregados' e dando a ela um alias 'e' para simplificar as referências a essa tabela na consulta.

-- JOIN departamentos d ON e.dnumero = d.dnumero: Essa parte da consulta faz um JOIN com a tabela 'departamentos' (alias 'd') usando a coluna 'dnumero' como critério de junção. Isso permite que a consulta obtenha o nome do departamento ao qual cada empregado está associado, com base no número do departamento.

-- LEFT JOIN trabalha t ON e.cpf = t.cpf_emp: Aqui, realizamos um LEFT JOIN com a tabela 'trabalha' (alias 't'). Estamos associando empregados a projetos com base no CPF do empregado (cpf_emp). O uso do LEFT JOIN significa que a consulta trará todos os empregados, mesmo aqueles que não estão associados a nenhum projeto.

-- WHERE t.cpf_emp IS NULL: Esta cláusula WHERE filtra os resultados. Estamos selecionando apenas as linhas onde 't.cpf_emp' (o CPF associado a projetos) é nulo. Isso significa que estamos pegando empregados que não estão associados a nenhum projeto, já que em uma junção LEFT JOIN, as linhas que não têm correspondência em 'trabalha' terão 't.cpf_emp' como nulo.

-- ORDER BY e.cpf: A consulta finaliza ordenando os resultados com base no CPF do empregado em ordem crescente (do menor para o maior).