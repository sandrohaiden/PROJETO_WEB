DROP DATABASE IF EXISTS loja;
CREATE DATABASE loja;
USE loja;

CREATE TABLE cliente(
	clicodigo int not null primary key auto_increment,
    clinome varchar(200) not null,
    clicpf varchar(14) not null
);

CREATE TABLE categoria(
	catcodigo int not null primary key auto_increment,
    catdescricao varchar(200) not null,
    catsupercategoria int,
    foreign key(catsupercategoria) references categoria(catcodigo)
);
INSERT INTO categoria(catdescricao, catsupercategoria) values ('Eletrônicos', null), ('GPUs', 1);

CREATE TABLE produto(
	procodigo int not null primary key auto_increment,
    pronome varchar(200) not null,
    prodescricao text,
    proqtd int not null default 10,
    projfotos JSON,
    provalor decimal(8,2),
    propreco decimal(8,2),
    prodesconto int default 0,
    procatcodigo int,
    foreign key(procatcodigo) references categoria(catcodigo)
);

CREATE TABLE status(
	stacodigo int not null primary key auto_increment,
    stadescricao varchar(50)
);

CREATE TABLE compra(
	comcodigo int not null primary key auto_increment,
    comdata timestamp default NOW(),
    comclicodigo int not null,
    comstacodigo int,
    foreign key(comclicodigo) references cliente(clicodigo),
    foreign key(comstacodigo) references status(stacodigo)
);

CREATE TABLE itemvenda(
	itvcodigo int not null primary key auto_increment,
    itvprecovenda decimal(8,2) not null,
    itvprocodigo int not null,
    itvcomcodigo int not null,
    foreign key(itvprocodigo) references produto(procodigo),
    foreign key(itvcomcodigo) references compra(comcodigo)
);

DELIMITER #
CREATE PROCEDURE adicionar_produto(p_nome varchar(200), p_descricao text, p_qtd int,
p_jfotos JSON, p_valor decimal(8,2), p_preco decimal(8,2), p_categoria int)
BEGIN
	IF p_qtd = 0 THEN
		INSERT INTO produto(pronome, prodescricao, projfotos, provalor,
        propreco, procatcodigo)
        VALUES
        (p_nome, p_descricao, p_jfotos, p_valor, p_preco, p_categoria);
	ELSE
		INSERT INTO produto(pronome, prodescricao, proqtd, projfotos,
        provalor, propreco, procatcodigo)
        VALUES
        (p_nome, p_descricao, p_qtd, p_jfotos, p_valor, p_preco, p_categoria);
    END IF;
END#
DELIMITER ;

select JSON_EXTRACT(projfotos, '$[*].path') from produto;
select projfotos from produto;
