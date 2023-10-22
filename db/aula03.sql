/* Tabela Enfermidade */

create table
    if not exists enfermidade (
        cod_enf int primary key,
        descricao varchar(40) not null
    );

/* Tabela Quartos */

create table
    if not exists quarto (
        cod_quart int primary key,
        numero int not null,
        andar int not null
    );

/* Tabela Médicos */

create table
    if not exists medico (
        cod_medico int primary key,
        nome varchar(40) not null,
        sobrenome varchar(60) not null,
        endereco varchar(100),
        genero varchar(1),
        numero_crm varchar(20) not null,
        especialidade varchar(60) not null,
        salario numeric(9, 2) not null
    );

/* Tabela Paciente */

create table
    if not exists paciente (
        cod_paciente int primary key,
        nome varchar(60) not null,
        sobrenome varchar(60) not null,
        endereco varchar(100),
        genero varchar(1),
        data_nasc date not null,
        cod_quart int references quarto(cod_quart),
        /* Referência ao campo na tabela QUARTO, 
         * Neste caso é uma chave estrangeira */
        cod_medico int references medico(cod_medico)
        /* Referência ao campo na tabela MEDICO,
         *  Neste caso é uma chave estrangeira */
    );

/* Tabela Enfermidade_Paciente */

create table
    if not exists enfermidade_paciente (
        cod_enf_paciente int primary key,
        cod_paciente int references paciente(cod_paciente),
        /* Referência ao campo na tabela PACIENTE, 
         * Neste caso é uma chave estrangeira */
        cod_enf int references enfermidade(cod_enf),
        /* Referência ao campo na tabela ENFERMIDADE, 
         * Neste caso é uma chave estrangeira */
        data_ep date not null
    );

/* Inserções de dados */

/* Enfermidade */

insert into enfermidade
values (1, 'Gripe'), (2, 'Dengue'), (3, 'Caxumba'), (4, 'Virose'), (5, 'Pneumonia');

/* Quartos */

insert into quarto
values (1, 100, 1), (2, 101, 1), (3, 102, 1), (4, 103, 1), (5, 104, 1), (6, 200, 2), (7, 201, 2), (8, 202, 2), (9, 203, 2), (10, 204, 2);

/* Médicos */

insert into medico
values (
        1,
        'João',
        'Silva',
        'Rua A, 1',
        'M',
        '123456789',
        'Cardiologista',
        12000.00
    ), (
        2,
        'José',
        'Almeida',
        'Rua B, 2',
        'M',
        '123456770',
        'Urologista',
        11500.00
    ), (
        3,
        'Maria',
        'Borges',
        'Rua C, 3',
        'F',
        '123456780',
        'Pediatra',
        10000.00
    ), (
        4,
        'Joana',
        'Rocha',
        'Rua D, 4',
        'F',
        '123456760',
        'Clinico Geral',
        9000.00
    ), (
        5,
        'Mario',
        'Oliveira',
        'Rua E, 5',
        'M',
        '123456750',
        'Cardiologista',
        12000.00
    );

/* Paciente */

insert into paciente
values (
        1,
        'Marcos',
        'Silva',
        'Rua F, 6',
        'M',
        '01-02-1986',
        1,
        1
    ), (
        2,
        'Paula',
        'Muniz',
        'Rua G, 7',
        'F',
        '02-01-1984',
        2,
        1
    ), (
        3,
        'Sebastiana',
        'Queiroz',
        'Rua H, 8',
        'F',
        '15-12-1984',
        3,
        2
    ), (
        4,
        'Mauricio',
        'Oliveira',
        'Rua I, 9',
        'M',
        '22-06-1985',
        4,
        2
    ), (
        5,
        'Maria',
        'Castro',
        'Rua J, 10',
        'F',
        '19-03-1987',
        5,
        3
    ), (
        6,
        'Adalberto',
        'Machado',
        'Rua K, 11',
        'M',
        '30-07-1988',
        6,
        3
    ), (
        7,
        'Rafaela',
        'Nunes',
        'Rua L, 12',
        'F',
        '09-09-1990',
        7,
        4
    ), (
        8,
        'Roberto',
        'Marcondes',
        'Rua M, 13',
        'M',
        '12-10-1989',
        8,
        4
    ), (
        9,
        'Laura',
        'Dias',
        'Rua N, 14',
        'F',
        '02-04-1991',
        9,
        5
    ), (
        10,
        'Mauro',
        'Cipriano',
        'Rua O, 15',
        'M',
        '03-11-1982',
        10,
        5
    );

/* Enfermidade_Paciente */

insert into
    enfermidade_paciente
values (1, 1, 1, '01-09-2015'), (2, 2, 2, '02-09-2015'), (3, 3, 3, '03-09-2015'), (4, 4, 4, '04-09-2015'), (5, 5, 5, '05-09-2015'), (6, 6, 1, '06-09-2015'), (7, 7, 2, '07-09-2015'), (8, 8, 3, '08-09-2015'), (9, 9, 4, '09-09-2015'), (10, 10, 5, '10-09-2015');