insert into
    cliente(
        id,
        nome,
        cpf,
        renda,
        ativo,
        dt_nasc
    )
values (
        4,
        'marcos',
        '111111111',
        1320.00,
        false,
        '21-10-2023'
    )

select * from cliente order by id 

select * from cliente where dt_nasc = current_date;

select extract (
        year
        from current_date
    )
select extract (
        week
        from current_date
    )

update cliente set cpf = '444.444.444-04' 

update cliente set numeroSorte = id where id = 1 

alter table cliente add column email text;

alter table cliente drop column email;

alter table cliente add column numeroSorte int unique;

select * from cliente order by dt_nasc desc offset 1 limit 1;

alter table cliente
add
    column gastos numeric(9, 2) check (gastos >= 0);